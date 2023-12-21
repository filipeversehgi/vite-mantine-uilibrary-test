import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { EventInfo } from '@ckeditor/ckeditor5-utils'
import { memo, useState } from 'react'
import { FieldError, FieldValues, useController, useFormContext } from 'react-hook-form'

import { Flex, Text, useMantineTheme } from '@mantine/core'

import { IconCheck } from '@/components/icons/untitled-ui'
import { LabelInput } from '@/components/inputs/LabelInput'

import classes from './EditorInput.module.css'
import { EditorInputProps } from './EditorInput.types'

function $EditorInput<T extends FieldValues>({
    name,
    label,
    placeholder,
    defaultValue,
    showCheckMark = true,
    required = false,
    control,
    disabled = false,
    maxLength,
    rules,
    toolbar = ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
    ...props
}: EditorInputProps<T>) {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
    const theme = useMantineTheme()
    const [data] = useState(defaultValue)
    const [isDirty, setDirty] = useState(false)
    const { setValue, setError, clearErrors } = useFormContext()
    const {
        field,
        formState,
        fieldState: { invalid, error: fieldError },
    } = useController({
        control,
        name,
        defaultValue,
        rules,
    })

    const error = formState.errors[name] as FieldError | undefined
    const handleReady = (editor: typeof ClassicEditor) => {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement())
    }

    const handleOnChange = (event: EventInfo<string, unknown>, editor: typeof ClassicEditor) => {
        setDirty(true)
        const value: string = editor.getData()
        if (maxLength) {
            if (value.length > maxLength) setError(name, { type: 'maxLength' })
            else clearErrors(`${name}.maxLength`)
        }
        setValue(name, value as any)
    }

    const handleOnBlur = (event: EventInfo<string, unknown>, editor: typeof ClassicEditor) => {
        const value = editor.getData().trim()
        setDirty(true)
        field.onChange(value)
        field.onBlur()

        if (required && value.length === 0) {
            setError(name, { type: 'required', message: 'Required' })
        } else {
            setCanRenderCheckmark(true)
            clearErrors(`${name}.required`)
        }
        props?.onBlur && props.onBlur(event, value)
    }

    const rightCheckMark = !invalid && isDirty && showCheckMark && canRenderCheckmark && (
        <div className={classes.rightSection}>
            <IconCheck color={theme.colors.green[9]} />
        </div>
    )

    ClassicEditor.defaultConfig = {
        toolbar: {
            items: toolbar,
        },
    }

    return (
        <Flex direction="column" gap="xxs">
            <Text fz="sm">
                <LabelInput label={label} required={required} />
            </Text>
            <div className={error ? classes.editorErrorContainer : classes.editorContainer}>
                <CKEditor
                    data={data}
                    disabled={disabled}
                    id={name}
                    editor={ClassicEditor}
                    config={{ placeholder }}
                    onReady={handleReady}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                />
                {rightCheckMark}
            </div>
            <Text fz="xs" color="red.6">
                {fieldError?.message}
            </Text>
        </Flex>
    )
}

export const EditorInput = memo($EditorInput)

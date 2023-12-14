import { memo, useEffect, useRef, useState } from 'react'
import { useController } from 'react-hook-form'

import { Textarea, useMantineTheme, Space, Flex, Tooltip } from '@mantine/core'

import { getValidationMessage } from '@/common/utils'
import { LabelInput } from '@/components/forms'
import { IconCheck, IconHelpCircle } from '@/components/icons/untitled-ui'

import { HFTextAreaInputProps } from './TextAreaInput.types'

function HFTextAreaInput({
    id,
    label,
    placeholder,
    helperText,
    showCheckMark = true,
    required = false,
    validations,
    control,
    toolTipText,
    disabled = false,
    ...props
}: HFTextAreaInputProps) {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
    const theme = useMantineTheme()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const {
        field,
        fieldState: { error, isDirty, invalid },
    } = useController({
        control,
        name: id,
        defaultValue: '',
        rules: {
            required: required,
            minLength: validations?.rules?.minLength,
            maxLength: validations?.rules?.maxLength,
            pattern: new RegExp(validations?.rules?.regex || ''),
            validate: validations?.rules?.validate,
        },
    })

    const rightCheckMark = !invalid && isDirty && showCheckMark && canRenderCheckmark && (
        <IconCheck color={theme.colors.green[9]} />
    )

    const moveCursorToEnd = () => {
        const currentTextArea = textAreaRef.current
        if (currentTextArea) {
            textAreaRef.current.focus()
            if (currentTextArea.value.length > 0) {
                const textLength = textAreaRef.current.value.length
                textAreaRef.current.setSelectionRange(textLength, textLength)
            }
        }
    }

    useEffect(() => {
        moveCursorToEnd()
    }, [])

    return (
        <Textarea
            id={id}
            label={
                <Flex>
                    {<LabelInput label={label} required={required} disabled={disabled} />}
                    {toolTipText && (
                        <>
                            <Space w={4} />
                            <Tooltip
                                width={320}
                                multiline
                                position="top-start"
                                arrowSize={6}
                                withArrow
                                label={toolTipText}>
                                <span>
                                    <IconHelpCircle />
                                </span>
                            </Tooltip>
                        </>
                    )}
                </Flex>
            }
            placeholder={placeholder}
            description={helperText}
            rightSection={rightCheckMark}
            disabled={disabled}
            error={getValidationMessage(validations, error)}
            {...field}
            {...props}
            ref={textAreaRef}
            onBlur={(event) => {
                let value = event.target.value
                value = value.trimStart().trimEnd()
                if (isDirty) {
                    field.onChange(value)
                    field.onBlur()
                    setCanRenderCheckmark(true)
                }
                props?.onBlur && props.onBlur(event)
            }}
        />
    )
}

export default memo(HFTextAreaInput)

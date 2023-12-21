import { memo, useEffect, useRef } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { Flex, Space, Textarea, Tooltip } from '@mantine/core'

import { IconHelpCircle } from '@/components/icons/untitled-ui'

import { withCheckmark } from '../WithCheckmark/WithCheckmark'
import { HFTextAreaInputProps } from './TextAreaInput.types'

function HFTextAreaInput<T extends FieldValues>({
    name,
    control,
    defaultValue,
    rules,
    label,
    shouldUnregister,
    onChange,
    toolTipText,
    ...props
}: HFTextAreaInputProps<T>) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const {
        field: { value, onChange: fieldOnChange, ...field },
        fieldState,
    } = useController<T>({
        name,
        control,
        defaultValue,
        rules,
        shouldUnregister,
    })

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
            value={value}
            onChange={(e) => {
                fieldOnChange(e)
                onChange?.(e)
            }}
            error={fieldState.error?.message}
            label={
                <Flex>
                    {label}
                    {toolTipText && (
                        <>
                            <Space w={4} />
                            <Tooltip w={320} multiline position="top-start" arrowSize={6} withArrow label={toolTipText}>
                                <span>
                                    <IconHelpCircle />
                                </span>
                            </Tooltip>
                        </>
                    )}
                </Flex>
            }
            {...field}
            {...props}
            onBlur={(event) => {
                let { value } = event.target;
                value = value.trimStart().trimEnd()
                if (fieldState.isDirty) {
                    fieldOnChange(value)
                    field.onBlur()
                }
                props?.onBlur && props.onBlur(event)
            }}
        />
    )
}

const HFTextAreaWithCheckmark = withCheckmark(HFTextAreaInput)

export const TextAreaInput = memo(HFTextAreaWithCheckmark)

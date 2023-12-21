import { memo } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { TextInput as $TextInput } from '@mantine/core'

import { withCheckmark } from '../WithCheckmark/WithCheckmark'
import { HFTextInputProps } from './TextInput.types'

function HFTextInput<T extends FieldValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    onChange,
    ...props
}: HFTextInputProps<T>) {
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

    return (
        <$TextInput
            value={value}
            onChange={(e) => {
                fieldOnChange(e)
                onChange?.(e)
            }}
            error={fieldState.error?.message}
            {...field}
            {...props}
        />
    )
}

export const TextInput = memo(withCheckmark(HFTextInput))

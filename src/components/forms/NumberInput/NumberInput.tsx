import { memo } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { NumberInput as $NumberInput } from '@mantine/core'

import { useKeyDownEventListener } from '@/hooks/useKeyDownEventListener'

import { withCheckmark } from '../WithCheckmark/WithCheckmark'
import { HFNumberInputProps } from './NumberInput.types'

function HFNumberInput<T extends FieldValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    label,
    onChange,
    ...props
}: HFNumberInputProps<T>) {
    const { ref } = useKeyDownEventListener({
        allowedCodes: ['Backspace', 'Enter', 'Tab'],
        allowedKeys: [',', '.'],
    })

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
        <$NumberInput
            value={value}
            onChange={(e) => {
                fieldOnChange(e)
                onChange?.(e)
            }}
            error={fieldState.error?.message}
            label={label}
            {...field}
            {...props}
            onBlur={(event) => {
                if (fieldState.isDirty) {
                    field.onBlur()
                }
                props?.onBlur && props.onBlur(event)
            }}
            ref={ref}
        />
    )
}

const NumberInputWithCheckmark = withCheckmark(HFNumberInput)

export const NumberInput = memo(NumberInputWithCheckmark)

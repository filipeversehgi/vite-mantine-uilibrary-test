import { FieldValues, useController } from 'react-hook-form'

import { Select } from '@mantine/core'

import { withCheckmark } from '../WithCheckmark/WithCheckmark'
import { SelectInputProps } from './SelectInput.types'

function $SelectInput<T extends FieldValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    onChange,
    label,
    ...props
}: SelectInputProps<T>) {
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
        <Select
            value={value}
            onChange={(e) => {
                fieldOnChange(e)
                onChange?.(e)
            }}
            error={fieldState.error?.message}
            label={label}
            styles={{ section: { pointerEvents: 'none' } }}
            nothingFoundMessage="No options"
            {...props}
            {...field}
            onBlur={(event) => {
                if (fieldState.isDirty) {
                    field.onBlur()
                }
                props?.onBlur && props.onBlur(event)
            }}
        />
    )
}

export const SelectInput = withCheckmark($SelectInput)

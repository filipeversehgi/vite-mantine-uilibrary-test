import { FieldValues, useController } from 'react-hook-form'

import { Switch } from '@mantine/core';

import { SwitchGroup } from './SwitchGroup';
import { SwitchInputProps } from './SwitchInput.types';

export function SwitchInput<T extends FieldValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    onChange,
    ...props
}: SwitchInputProps<T>) {
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
        <Switch
            value={value}
            checked={value}
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

SwitchInput.Item = Switch
SwitchInput.Group = SwitchGroup

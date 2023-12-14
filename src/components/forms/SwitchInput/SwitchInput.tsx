import { memo } from 'react'
import { Controller } from 'react-hook-form'

import { Switch } from '@mantine/core'

import { SwitchInputProps } from './SwitchInput.types'

function SwitchInput({ id, required, label, helperText, control, onChange, ...props }: SwitchInputProps) {
    return (
        <Controller
            control={control}
            name={id}
            render={({ field: { onChange: hfOnChange, value } }) => (
                <Switch
                    id={id}
                    label={label}
                    required={required}
                    description={helperText}
                    {...props}
                    checked={value}
                    onChange={(event) => {
                        hfOnChange(event)
                        if (onChange) onChange(event)
                    }}
                />
            )}
        />
    )
}

export default memo(SwitchInput)

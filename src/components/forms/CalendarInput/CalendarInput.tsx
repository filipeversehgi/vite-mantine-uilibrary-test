import { useState } from 'react'
import { useController } from 'react-hook-form'

import { useMantineTheme } from '@mantine/core'
import { DateInput } from '@mantine/dates'

import { getValidationMessage } from '@/common/utils'
import { LabelInput } from '@/components/forms'
import { IconCheck, IconCalendar } from '@/components/icons/untitled-ui'

import { CalendarInputProps } from './CalendarInput.types'

function CalendarInput({
    id,
    label,
    placeholder,
    required,
    helperText,
    valueFormat,
    showCheckMark = true,
    minDate,
    clearable = true,
    control,
    validations,
    disabled,
    ...props
}: CalendarInputProps) {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
    const theme = useMantineTheme()
    const {
        field,
        fieldState: { error, isDirty, invalid },
    } = useController({
        control,
        name: id,
        defaultValue: false,
        rules: {
            required: required,
        },
    })

    const rightCheckMark = !disabled && !invalid && isDirty && showCheckMark && canRenderCheckmark && (
        <IconCheck color={theme.colors.green[9]} />
    )

    return (
        <DateInput
            id={id}
            label={<LabelInput label={label} required={required} disabled={disabled} />}
            placeholder={placeholder}
            required={required}
            rightSection={rightCheckMark}
            icon={<IconCalendar />}
            valueFormat={valueFormat}
            description={helperText}
            minDate={minDate}
            clearable={clearable}
            disabled={disabled}
            error={getValidationMessage(validations, error)}
            {...field}
            {...props}
            withAsterisk={false}
            onBlur={(event) => {
                if (isDirty) {
                    field.onBlur()
                    setCanRenderCheckmark(event.target.value ? true : false)
                }
                props?.onBlur && props.onBlur(event)
            }}
        />
    )
}

export default CalendarInput

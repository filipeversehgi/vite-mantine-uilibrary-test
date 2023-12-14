import { memo, useState } from 'react'
import { useController } from 'react-hook-form'

import { PasswordInput, Tooltip, useMantineTheme } from '@mantine/core'

import { getValidationMessage, passwordRequirements } from '@/common/utils'
import { IconEye, IconEyeOff } from '@/components/icons/untitled-ui'

import { HFPasswordInputProps } from './PasswordInput.types'
import PasswordRequirements from './PasswordRequirements'

function HFPasswordInput({
    id,
    label,
    placeholder,
    helperText,
    required = false,
    validations,
    control,
    showTooltip = false,
    ...props
}: HFPasswordInputProps) {
    const [isTooltipOpened, setTooltipOpened] = useState(false)
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
    const theme = useMantineTheme()

    const isPasswordValid = !invalid && isDirty && showTooltip

    const checks = passwordRequirements.map((requirement, index) => (
        <PasswordRequirements key={index} label={requirement.label} meets={requirement.re.test(field.value)} />
    ))

    return (
        <Tooltip
            label={isPasswordValid ? 'All good!' : checks}
            position="top-end"
            withArrow
            opened={isTooltipOpened && showTooltip}
            color={isPasswordValid ? 'teal' : undefined}>
            <PasswordInput
                id={id}
                placeholder={placeholder}
                description={helperText}
                label={label}
                error={getValidationMessage(validations, error)}
                visibilityToggleIcon={({ reveal }) =>
                    reveal ? <IconEyeOff color={theme.colors.dark[2]} /> : <IconEye color={theme.colors.dark[2]} />
                }
                {...field}
                {...props}
                onFocus={(event) => {
                    props?.onFocus && props.onFocus(event)
                    setTooltipOpened(true)
                }}
                onBlur={(event) => {
                    if (isDirty) {
                        field.onBlur()
                    }
                    props?.onBlur && props.onBlur(event)
                    setTooltipOpened(false)
                }}
            />
        </Tooltip>
    )
}

export default memo(HFPasswordInput)

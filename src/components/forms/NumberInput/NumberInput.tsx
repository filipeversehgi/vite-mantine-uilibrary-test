import { memo, useState } from 'react'
import { useController } from 'react-hook-form'

import { NumberInput, useMantineTheme } from '@mantine/core'

import { getValidationMessage } from '@/common/utils'
import { LabelInput } from '@/components/forms/LabelInput'
import { IconCheck } from '@/components/icons/untitled-ui'
import { useKeyDownEventListener } from '@/hooks'

import { HFNumberInputProps } from './NumberInput.types'

function HFNumberInput({
    id,
    label,
    placeholder,
    helperText,
    disabled,
    parser,
    formatter,
    icon,
    showCheckMark = true,
    required = false,
    decimalSeparator = '.',
    thousandsSeparator = ',',
    hideControls = false,
    precision = 0,
    validations,
    control,
    ...props
}: HFNumberInputProps) {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
    const { ref } = useKeyDownEventListener({ allowedCodes: ['Backspace', 'Enter', 'Tab'], allowedKeys: [',', '.'] })
    const theme = useMantineTheme()
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

    return (
        <NumberInput
            id={id}
            icon={icon}
            parser={parser}
            decimalSeparator={decimalSeparator}
            thousandsSeparator={thousandsSeparator}
            precision={precision}
            formatter={formatter}
            hideControls={hideControls}
            label={<LabelInput disabled={disabled} required={required} label={label} />}
            placeholder={placeholder}
            description={helperText}
            rightSection={rightCheckMark}
            disabled={disabled}
            error={getValidationMessage(validations, error)}
            width={'100%'}
            {...field}
            {...props}
            onBlur={(event) => {
                if (isDirty) {
                    field.onBlur()
                    setCanRenderCheckmark(true)
                }
                props?.onBlur && props.onBlur(event)
            }}
            ref={ref}
        />
    )
}

export default memo(HFNumberInput)

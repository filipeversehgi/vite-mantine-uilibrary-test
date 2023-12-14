import { useState } from 'react'
import { useController } from 'react-hook-form'

import { Select, Space, useMantineTheme, Flex } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

import { getValidationMessage } from '@/common/utils'
import { LabelInput } from '@/components/forms'
import { IconCheck } from '@/components/icons/untitled-ui'

import { SelectInputProps } from './SelectInput.types'

function SelectInput({
    id,
    label,
    showCheckMark = true,
    required = false,
    disabled,
    placeholder,
    helperText,
    data,
    control,
    validations,
    searchable = true,
    allowDeselect = true,
    clearable = true,
    ...props
}: SelectInputProps) {
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
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

    const rightCheckMark = !invalid && isDirty && field.value && showCheckMark && canRenderCheckmark && (
        <IconCheck color={theme.colors.green[9]} />
    )

    return (
        <Select
            id={id}
            label={<LabelInput label={label} required={required} disabled={disabled} />}
            rightSection={
                <Flex gap="xxx" justify="flex-end">
                    {rightCheckMark || <Space w="md" />} <IconChevronDown size={theme.spacing.md} />
                </Flex>
            }
            rightSectionWidth={64}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            nothingFound="No options"
            placeholder={placeholder}
            size="sm"
            description={helperText}
            searchable={searchable}
            allowDeselect={allowDeselect}
            clearable={clearable}
            error={getValidationMessage(validations, error)}
            {...props}
            {...field}
            withAsterisk={false}
            data={data}
            onBlur={(event) => {
                if (isDirty) {
                    field.onBlur()
                    setCanRenderCheckmark(true)
                }
                props?.onBlur && props.onBlur(event)
            }}
        />
    )
}

export default SelectInput

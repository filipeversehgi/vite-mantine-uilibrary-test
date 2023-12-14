import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { MultiSelect, Space, useMantineTheme, Flex, Text, Loader } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

import { getValidationMessage } from '@/common/utils'
import { LabelInput } from '@/components/forms/LabelInput'
import { IconCheck } from '@/components/icons/untitled-ui'

import { PADDING_OFFSET, DELTA_WIDTH_MULTIPLIER, DELTA_ADDITIONAL_WIDTH } from './constants'
import { useStyles } from './MultiSelectInput.styles'
import { MultiSelectInputProps } from './MultiSelectInput.types'

function MultiSelectInput({
    id,
    label,
    showCheckMark = true,
    required = false,
    placeholder,
    helperText,
    control,
    enumValues,
    data,
    validations,
    searchable = true,
    disabled,
    enableCollapsibleValues = false,
    maxCollapsibleValues,
    maxCollapsibleMessage,
    ...props
}: MultiSelectInputProps) {
    const multiSelectRef = useRef<HTMLInputElement | null>(null)
    const [canRenderCheckmark, setCanRenderCheckmark] = useState(false)
    const [showLimitMessage, setShowLimitMessage] = useState<boolean>(false)
    const [totalSelectedWidth, setTotalSelectedWidth] = useState(0)
    const [isLoading, setLoading] = useState(false)

    const theme = useMantineTheme()
    const { classes } = useStyles()
    const { t } = useTranslation('common')
    const { setError, clearErrors } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({
        control,
        name: id,
        defaultValue: false,
        rules: {
            required: required,
        },
    })

    const [source, setSource] = useState(data.map((item) => ({ ...item, disabled: false })))

    const rightCheckMark = showCheckMark && canRenderCheckmark && <IconCheck color={theme.colors.green[9]} />

    const empty = () => {
        return <div className={classes.item}>{`${field.value?.length} ${t('forms.selectedItems')}`}</div>
    }

    const checkMultiSelectSize = useCallback(
        (newValue: string[]) => {
            const deltaWidth = newValue.reduce((acc, value) => {
                const matchingObject = source.find((item) => item.value === value)
                const label = matchingObject ? matchingObject.label : ''
                return acc + label.length * DELTA_WIDTH_MULTIPLIER + DELTA_ADDITIONAL_WIDTH
            }, 0)

            setTotalSelectedWidth(deltaWidth)
        },
        [source]
    )

    const handleChangeValues = (value: string[]) => {
        checkMultiSelectSize(value)
        multiSelectRef.current?.blur()
    }

    useEffect(() => {
        setLoading(true)
        const value = field.value
        if (maxCollapsibleValues) {
            const disabled = value.length >= maxCollapsibleValues
            const newSource = data.map((item) => ({
                ...item,
                disabled: disabled && !value.includes(item.value),
            }))
            setSource(newSource)
            setLoading(false)
        }
    }, [data, field.value, maxCollapsibleValues])

    const showMaxCollapsibleMessage = useMemo(() => {
        const maxValues = maxCollapsibleValues ?? 0
        return !!maxCollapsibleMessage && field.value.length >= maxValues
    }, [field.value.length, maxCollapsibleMessage, maxCollapsibleValues])

    useEffect(() => {
        const multiSelectWidth = multiSelectRef.current?.parentElement?.offsetWidth

        if (!multiSelectWidth) return
        if (totalSelectedWidth === 0 && field.value.length > 0) {
            checkMultiSelectSize(field.value)
            return
        }
        if (totalSelectedWidth > multiSelectWidth - PADDING_OFFSET) {
            setShowLimitMessage(true)
            return
        }
        setShowLimitMessage(false)
    }, [checkMultiSelectSize, field.value, totalSelectedWidth])
    return (
        <Flex gap="xs" justify="flex-start" align="stretch" direction="column">
            <MultiSelect
                id={id}
                label={<LabelInput label={label} required={required} disabled={disabled} />}
                rightSection={
                    <Flex gap="xxs" justify="flex-end">
                        {isLoading && <Loader size="xs" />}
                        {rightCheckMark || <Space w="md" />} <IconChevronDown size={theme.spacing.md} />
                    </Flex>
                }
                rightSectionWidth={showCheckMark ? 64 : 48}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                nothingFound="No options"
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={isLoading}
                searchable={searchable}
                description={helperText}
                error={getValidationMessage(validations, error)}
                {...props}
                {...field}
                withAsterisk={false}
                ref={multiSelectRef}
                valueComponent={showLimitMessage && enableCollapsibleValues ? empty : undefined}
                disableSelectedItemFiltering={enableCollapsibleValues}
                data={
                    isLoading
                        ? []
                        : source ??
                          (enumValues as string[]).map((item) => {
                              return { value: item, label: item }
                          })
                }
                onChange={(event) => {
                    if (enableCollapsibleValues) handleChangeValues(event)
                    field.onChange(event)
                    if (showCheckMark) setCanRenderCheckmark(event.length > 0)

                    const showRequired = required && event.length === 0
                    if (showRequired) {
                        setError(id, { type: 'required' })
                    } else {
                        clearErrors(id)
                    }
                    props?.onChange && props.onChange(event)
                }}
            />
            {showMaxCollapsibleMessage && <Text fz="sm">{maxCollapsibleMessage}</Text>}
        </Flex>
    )
}

export default memo(MultiSelectInput)

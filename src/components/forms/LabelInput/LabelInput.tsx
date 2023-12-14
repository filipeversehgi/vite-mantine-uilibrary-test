import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text, Flex } from '@mantine/core'

import { LabelInputProps } from './LabelInput.types'

function LabelInput({ label, required = false, disabled = false }: LabelInputProps) {
    const { t } = useTranslation('common')

    if (!label) return <></>

    const labelColor = disabled ? 'light.2' : 'light.0'
    const optionalColor = disabled ? 'light.2' : 'dark.2'

    return (
        <Flex align="center" justify="start" direction="row" gap={4}>
            <Text component="span" color={labelColor} size="sm" weight={500}>
                {label}
            </Text>
            {!required && (
                <Text component="span" color={optionalColor} size="sm">
                    ({t('optional')})
                </Text>
            )}
        </Flex>
    )
}

export default memo(LabelInput)

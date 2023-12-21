import { memo } from 'react'

import { Badge } from '@mantine/core'

import { ChipProps } from './Chip.types'

function $Chip({ label, icon, showStatusCircle = false, ...props }: ChipProps) {
    const statusCircle = showStatusCircle ? <div /> : undefined

    return (
        <Badge leftSection={icon || statusCircle} {...props}>
            {label}
        </Badge>
    )
}

export const Chip = memo($Chip)

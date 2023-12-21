import { ReactNode } from 'react'

import { BadgeProps as MantineBadgeProps } from '@mantine/core';

export type ChipProps = {
    label: string
    showStatusCircle?: boolean
    icon?: ReactNode
} & MantineBadgeProps

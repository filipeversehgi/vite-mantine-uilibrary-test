import { ReactNode } from 'react'

import { ButtonProps, FloatingPosition } from '@mantine/core'

export type ButtonDropdownItem = {
    label: string
    onClick: () => void
    icon?: ReactNode
}

export type ButtonDropdownTooltip = {
    text: string
    position?: FloatingPosition
}

export type ButtonDropdownProps = {
    label: string
    tooltip?: ButtonDropdownTooltip
    dropdownItems: ButtonDropdownItem[]
    position?: FloatingPosition
    isLoading?: boolean
} & ButtonProps

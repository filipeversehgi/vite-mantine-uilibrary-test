import { ReactNode } from 'react'

export type IconStyleProps = {
    size?: number
    color?: string
    fixedHeight?: boolean
}

export type SvgIconProps = IconStyleProps & {
    children: ReactNode
    viewBox?: string
    titleAccess?: string
}

export type ValueLabelProps = {
    value: string
    label: string
}

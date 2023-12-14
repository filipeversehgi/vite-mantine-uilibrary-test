import { MouseEvent } from 'react'

import { DefaultMantineColor, MantineSize, MantineStyleProps } from '@mantine/core'

export type BackLinkProps = {
    text: string
    to?: string
    color?: DefaultMantineColor
    size?: MantineSize
    hideArrow?: boolean
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
} & MantineStyleProps

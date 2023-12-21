import { PrimitiveAtom } from 'jotai'

import { MantineSize } from '@mantine/core';

export type DrawerProps = {
    position?: 'top' | 'right' | 'bottom' | 'left'
    fullSize?: boolean
    onClose?: () => void
    children: React.ReactNode
    atom: PrimitiveAtom<boolean>
    size?: MantineSize | (string & {}) | number
    withCloseButton?: boolean
    className?: string
}

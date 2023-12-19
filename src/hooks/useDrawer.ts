import { PrimitiveAtom, useAtom } from 'jotai'

type DrawerActions = {
    toggle: () => void
    close: () => void
    open: () => void
}

export function useDrawer(atom: PrimitiveAtom<boolean>): [boolean, DrawerActions] {
    const [isOpen, setIsOpen] = useAtom(atom)

    const toggle = () => {
        setIsOpen((isOpen: boolean) => !isOpen)
    }

    const close = () => {
        setIsOpen(false)
    }

    const open = () => {
        setIsOpen(true)
    }

    return [isOpen, { toggle, close, open }]
}

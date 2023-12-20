/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback } from 'react'
import { KeyboardEvent } from 'react'

import { useOs } from '@mantine/hooks'
import { useEventListener } from '@mantine/hooks'

type KeyDownResult = {
    ref: MutableRefObject<any>
    keydown: (event: KeyboardEvent) => void
}

type KeyDownAllowedProps = {
    allowedCodes: string[]
    allowedKeys: string[]
}

export function useKeyDownEventListener({ allowedCodes, allowedKeys }: KeyDownAllowedProps): KeyDownResult {
    const os = useOs()
    const keydown = useCallback(
        (event: {
            code: string
            key: string
            ctrlKey: boolean
            metaKey: boolean
            preventDefault: () => void
            stopPropagation: () => void
        }) => {
            const isCtrlOrCmdKey = event.ctrlKey || event.metaKey
            const isNumber = (n: string) => /^[0-9]$/.test(n)

            const isInvalidKey =
                !isCtrlOrCmdKey &&
                !allowedCodes.includes(event.code) &&
                !allowedKeys.includes(event.key) &&
                !isNumber(event.key)

            if (os != 'android' && isInvalidKey) {
                event.preventDefault()
                event.stopPropagation()
            }
        },
        [allowedCodes, allowedKeys, os]
    )
    const ref = useEventListener('keydown', keydown)

    return { ref, keydown }
}
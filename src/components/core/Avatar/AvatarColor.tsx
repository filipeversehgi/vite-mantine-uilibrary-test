import { memo, useMemo } from 'react'

import { Avatar, useMantineTheme } from '@mantine/core'

import { AvatarColorProps } from './Avatar.types'

const letterToNumberIndex: Record<string, number> = {}
const aIndex = 'a'.charCodeAt(0)

for (let i = 0; i <= 25; i++) {
    const letter = String.fromCharCode(i + aIndex)
    letterToNumberIndex[letter.toLowerCase()] = i
}

/**
 * Avatar with a fixed color based on initials
 */
function AvatarColor({ alt, radius = 'xl', size = 30, fallback }: AvatarColorProps) {
    const theme = useMantineTheme()

    const initials = useMemo(() => {
        let result = alt?.slice(0, 1)
        const words = alt?.split(' ')
        if (words?.length > 1) {
            result += words[words.length - 1].substring(0, 1)
        }
        return result?.toUpperCase() || ''
    }, [alt])

    const color = useMemo(() => {
        const { colors } = theme;
        const firstLetter = initials.charAt(0).toLowerCase()
        const colorIndex = letterToNumberIndex[firstLetter] % Object.keys(colors).length
        return Object.keys(colors)[colorIndex]
    }, [initials])

    return (
        <Avatar size={size} radius={radius} color={color}>
            {fallback || initials}
        </Avatar>
    )
}

export default memo(AvatarColor)

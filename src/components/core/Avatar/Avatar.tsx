import { memo } from 'react'

import { Avatar as MantineAvatar } from '@mantine/core'

import { AvatarImageProps } from './Avatar.types'
import AvatarColor from './AvatarColor'

function $Avatar({ alt, src, radius = 'xl', size = 30, fallback }: AvatarImageProps) {
    if (src) {
        return (
            <MantineAvatar src={src} size={size} radius={radius}>
                {fallback}
            </MantineAvatar>
        )
    }

    return <AvatarColor size={size} radius={radius} alt={alt} fallback={fallback} />;
}

export const Avatar = memo($Avatar)

import { MantineNumberSize } from '@mantine/styles'

export type AvatarImageProps = {
    alt: string
    src?: string | null
    size?: MantineNumberSize
    radius?: MantineNumberSize
    fallback?: React.ReactNode
}

export type AvatarColorProps = Pick<AvatarImageProps, 'alt' | 'radius' | 'size' | 'fallback'>

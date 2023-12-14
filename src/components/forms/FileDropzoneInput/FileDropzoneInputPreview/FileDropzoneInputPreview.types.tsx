import { FileWithPath } from '@mantine/dropzone'

export type FileDropzoneInputPreviewProps = {
    imageUrl: string
    avatarAlt: string
    avatarSize?: number
    avatarBgColor?: string
    file: FileWithPath
    boxPreview?: boolean
    setFiles: (files: FileWithPath[]) => void
}

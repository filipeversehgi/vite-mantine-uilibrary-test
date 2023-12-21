import { FileWithPath } from '@mantine/dropzone'

export type FileDropzoneInputProps = {
    id: string
    label?: string
    accept: Accept[]
    maxSizeMb: number
    avatarAlt?: string
    avatarSize?: number
    avatarBgColor?: string
    required?: boolean
    disabled?: boolean
    noPreview?: boolean
    boxPreview?: boolean
    isLoading?: boolean
    onUpdateFiles?: (files?: FileWithPath[]) => void
    onUpdateFilesErrors?: (filesErrors: FileRejection[]) => void
}

export type FileRejection = {
    file: File
    errors: { message: string; code: string }[]
}

export type Accept = 'PNG' | 'SVG' | 'JPG' | 'GIF' | 'WEBP' | 'AVIF' | 'MP4' | 'CSV'

export const acceptConfig = {
    PNG: 'image/png',
    SVG: 'image/sgv+xml',
    JPG: 'image/jpeg',
    GIF: 'image/gif',
    WEBP: 'image/webp',
    AVIF: 'image/avif',
    MP4: 'video/mp4',
    zip: 'application/zip',
    CSV: 'text/csv',
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    exe: 'application/vnd.microsoft.portable-executable',
}

import { Accept } from '@/components/forms/FileDropzoneInput/FileDropzoneInput.types'

export type UploadedObject = {
    file: File
    info: UploadedObjectInfo
}

export type UploadedObjectInfo = {
    url: string
    fileName: string
}

export type UploadedFileDialogVariants = {
    key: string
    xs: string
    sm: string
    md: string
    lg: string
}

// Conditional Typing to now require SizeName if onUpload is defined
export type UploadFileDialogProps = {
    id: string
    opened: boolean
    title: string
    label?: string
    maxMbSize: number
    accept: Accept[]
    onClose: (url?: UploadedObjectInfo) => void
    customContent?: React.ReactNode
    onUpload: { upload: (file: File) => void; isLoading: boolean }
}

import { Accept } from '@/components/forms/FileDropzoneInput/FileDropzoneInput.types'
import { FormInputType, ValidationObject } from '@/components/forms/types'

export type GalleryProps = Omit<FormInputType, 'showCheckMark'> & {
    id: string
    maxElements?: number
    hasFeatured?: boolean
    colSpan?: number
    bgColor?: string
    defaultValue: GalleryImageProps[]
    maxMbSize: number
    accept: Accept[]
    validations?: ValidationObject
}

export interface GalleryImageProps {
    src: string
    alt: string
    id: string
}

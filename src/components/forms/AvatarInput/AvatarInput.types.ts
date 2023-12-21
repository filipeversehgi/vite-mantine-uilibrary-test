import { FieldValues } from 'react-hook-form'

import { FormInputType } from '@/components/forms/types';

export type AvatarInputProps<T extends FieldValues> = FormInputType<T> & {
    fallbackImg?: React.ReactNode
    onUpload: {
        isLoading: boolean
        upload: (file: File) => void
    }
}

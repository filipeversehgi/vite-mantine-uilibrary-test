import { RefObject } from 'react'

import { FileRejection } from '../FileDropzoneInput.types'

export type FileDropzoneInputErrorProps = {
    setFilesErrors: (filesErrors: FileRejection[]) => void
    errorMessage: string
    openRef: RefObject<() => void>
}

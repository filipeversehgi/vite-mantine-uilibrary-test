import { EventInfo } from '@ckeditor/ckeditor5-utils'

import { FormInputType } from '@/components/forms/types'

export type EditorInputProps = FormInputType & {
    toolTipText?: string
    disabled?: boolean
    onChange?: (value: Date | null) => void
    onBlur?: (event: EventInfo<string, unknown>, editor: string) => void
    maxLength?: number
    className?: string
    toolbar?: string[]
    defaultValue?: string
}

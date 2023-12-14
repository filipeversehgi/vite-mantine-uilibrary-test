import { TextareaProps } from '@mantine/core'

import { FormInputType } from '@/components/forms/types'

export type HFTextAreaInputProps = FormInputType &
    TextareaProps & {
        toolTipText?: string
    }

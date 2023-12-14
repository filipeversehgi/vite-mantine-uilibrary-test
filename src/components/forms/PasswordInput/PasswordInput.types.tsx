import { PasswordInputProps } from '@mantine/core'

import { FormInputType } from '@/components/forms/types'

export type HFPasswordInputProps = Omit<FormInputType, 'showCheckMark'> &
    PasswordInputProps & {
        showTooltip?: boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rules?: any
    }

export type PasswordRequirementsProps = {
    meets: boolean
    label: string
}

import { FieldValues, UseControllerProps } from 'react-hook-form'

import { PasswordInputProps } from '@mantine/core';

export type HFPasswordInputProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<PasswordInputProps, 'value' | 'defaultValue'> & {
        showTooltip: boolean
        requirements: PasswordRequirementsInput[]
    }

export type PasswordRequirementsInput = {
    re: RegExp
    label: string
}

export type PasswordRequirementsProps = {
    meets: boolean
    label: string
}

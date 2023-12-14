/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent } from 'react'
import { Control } from 'react-hook-form'

import { SwitchProps } from '@mantine/core'

export type SwitchInputProps = {
    id: string
    required: boolean
    label?: string
    helperText?: string
    defaultValue?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    control: Control
} & SwitchProps

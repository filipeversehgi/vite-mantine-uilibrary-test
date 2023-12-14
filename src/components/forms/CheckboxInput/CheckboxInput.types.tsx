import { CheckboxProps } from '@mantine/core'

import { FormInputType } from '@/components/forms/types'

export type HFCheckboxInputProps = Omit<FormInputType, 'showCheckMark' | 'validations'> & CheckboxProps

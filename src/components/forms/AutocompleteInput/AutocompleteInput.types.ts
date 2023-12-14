import { AutocompleteProps } from '@mantine/core'

import { FormInputType } from '@/components/forms/types'

export type HFTextInputProps = { data: string[] } & FormInputType & AutocompleteProps

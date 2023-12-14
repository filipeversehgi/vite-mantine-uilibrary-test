import { TextInputProps as InputTextProps } from '@mantine/core'

export type SearchInputProps = {
    id: string
    placeholder: string
    onDebounceChange: (value: string) => void
} & InputTextProps

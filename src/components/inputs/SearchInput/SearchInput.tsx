import { FormEvent, useEffect, useRef } from 'react'

import { ActionIcon, TextInput, useMantineTheme } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'

import { IconSearchMd, IconXClose } from '@/components/icons/untitled-ui'

import { SearchInputProps } from './SearchInput.types'

export function SearchInput({ id, placeholder, onDebounceChange, debounceValue = 250, ...props }: SearchInputProps) {
    const [value, setValue] = useDebouncedState('', debounceValue)
    const inputRef = useRef<HTMLInputElement>(null)
    const theme = useMantineTheme()

    useEffect(() => {
        onDebounceChange(value)
    }, [onDebounceChange, value])

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value.toLowerCase())
    }

    const handleClearSearch = () => {
        ;(inputRef.current as HTMLInputElement).value = ''
        setValue('')
    }

    return (
        <TextInput
            id={id}
            placeholder={placeholder}
            ref={inputRef}
            onChange={handleSearch}
            leftSection={<IconSearchMd />}
            rightSection={
                value && (
                    <ActionIcon onClick={handleClearSearch}>
                        <IconXClose size={14} color={theme.colors.gray[2]} />
                    </ActionIcon>
                )
            }
            {...props}
        />
    )
}

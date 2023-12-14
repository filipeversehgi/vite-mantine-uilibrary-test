import { FormEvent, useEffect, useRef } from 'react'

import { ActionIcon, TextInput, useMantineTheme } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'

import { DEBOUNCE_VALUE } from '@/common/configs/constants.config'
import { IconSearchMd, IconXClose } from '@/components/icons/untitled-ui'

import { SearchInputProps } from './SearchInput.types'

function SearchInput({ id, placeholder, onDebounceChange, ...props }: SearchInputProps) {
    const [value, setValue] = useDebouncedState('', DEBOUNCE_VALUE)
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
            icon={<IconSearchMd />}
            rightSection={
                value && (
                    <ActionIcon onClick={handleClearSearch}>
                        <IconXClose size={14} color={theme.fn.lighten(theme.colors.dark[2], 0.3)} />
                    </ActionIcon>
                )
            }
            {...props}
        />
    )
}

export default SearchInput

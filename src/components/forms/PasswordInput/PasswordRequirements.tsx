import { Center, Text, Box, useMantineTheme } from '@mantine/core'

import { IconCheck, IconXClose } from '@/components/icons/untitled-ui'

import { PasswordRequirementsProps } from './PasswordInput.types'

function PasswordRequirements({ meets, label }: PasswordRequirementsProps) {
    const theme = useMantineTheme()

    return (
        <Text color={meets ? 'teal' : 'light.8'} mt={5} size="sm">
            <Center inline>
                {meets ? <IconCheck color={theme.colors.green[9]} /> : <IconXClose />}
                <Box ml={6}>{label}</Box>
            </Center>
        </Text>
    )
}

export default PasswordRequirements

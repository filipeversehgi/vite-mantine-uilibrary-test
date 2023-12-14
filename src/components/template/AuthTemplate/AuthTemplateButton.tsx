import { Box } from '@mantine/core'

import { LoadingButton } from '@/components/core'

import { AuthTemplateButtonProps } from './AuthTemplate.types'

function AuthTemplateButton({ onClick, width = 183, isLoading = false, children }: AuthTemplateButtonProps) {
    return (
        <Box w={width}>
            <LoadingButton isLoading={isLoading} type="submit" fullWidth onClick={onClick}>
                {children}
            </LoadingButton>
        </Box>
    )
}

export default AuthTemplateButton

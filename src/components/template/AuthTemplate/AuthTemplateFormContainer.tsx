import { Flex } from '@mantine/core'

import { useStyles } from './AuthTemplate.styles'

function AuthTemplateFormContainer({ children }: { children: React.ReactNode }) {
    const { classes } = useStyles()

    return (
        <Flex className={classes.formContainer} direction="column">
            {children}
        </Flex>
    )
}

export default AuthTemplateFormContainer

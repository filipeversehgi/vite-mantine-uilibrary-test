import { Flex } from '@mantine/core'

import { useStyles } from './AuthTemplate.styles'

function AuthTemplateContainer({ children }: { children: React.ReactNode }) {
    const { classes } = useStyles()

    return (
        <Flex className={classes.container} direction="column">
            {children}
        </Flex>
    )
}

export default AuthTemplateContainer

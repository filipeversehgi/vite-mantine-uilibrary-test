import { Link } from 'react-router-dom'

import { Flex, Text } from '@mantine/core'

import { useStyles } from './AuthTemplate.styles'
import { AuthTemplateActionProps } from './AuthTemplate.types'

function AuthTemplateAction({ text, action }: AuthTemplateActionProps) {
    const { classes } = useStyles()

    return (
        <Flex className={classes.container} direction="column">
            <Flex justify="left">
                <Text className={classes.actionText}>
                    {text}
                    {action && (
                        <Link to={action.to} className={classes.actionLink}>
                            {action.text}
                        </Link>
                    )}
                </Text>
            </Flex>
        </Flex>
    )
}

export default AuthTemplateAction

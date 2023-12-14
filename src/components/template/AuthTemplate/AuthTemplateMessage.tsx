import { Text } from '@mantine/core'

import { useStyles } from './AuthTemplate.styles'
import { AuthTemplateMessageProps } from './AuthTemplate.types'

function AuthTemplateMessage({ text }: AuthTemplateMessageProps) {
    const { classes } = useStyles()

    return (
        <Text className={classes.message} ta="left" w={'100%'}>
            {text}
        </Text>
    )
}

export default AuthTemplateMessage

import { Flex, Title } from '@mantine/core'

import { PageMetaTemplate } from '@/components/template/PageMetaTemplate'

import { useStyles } from './AuthTemplate.styles'
import { AuthTemplateProps } from './AuthTemplate.types'
import AuthTemplateAction from './AuthTemplateAction'
import AuthTemplateButton from './AuthTemplateButton'
import AuthTemplateContainer from './AuthTemplateContainer'
import AuthTemplateFormContainer from './AuthTemplateFormContainer'
import AuthTemplateMessage from './AuthTemplateMessage'

function AuthTemplate({ title, children, subTitle }: AuthTemplateProps) {
    const { classes } = useStyles()

    return (
        <PageMetaTemplate meta={{ title }}>
            <Flex direction={'column'} className={classes.container}>
                <Title className={classes.title} align="left">
                    {title}
                </Title>
                {subTitle && (
                    <Title className={classes.subTitle} align="left">
                        {subTitle}
                    </Title>
                )}
                {children}
            </Flex>
        </PageMetaTemplate>
    )
}

AuthTemplate.Container = AuthTemplateContainer
AuthTemplate.FormContainer = AuthTemplateFormContainer
AuthTemplate.Action = AuthTemplateAction
AuthTemplate.Message = AuthTemplateMessage
AuthTemplate.Button = AuthTemplateButton

export default AuthTemplate

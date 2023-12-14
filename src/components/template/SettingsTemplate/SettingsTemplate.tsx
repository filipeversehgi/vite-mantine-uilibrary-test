import { useTranslation } from 'react-i18next'

import { Divider, Text } from '@mantine/core'

import { BackLink } from '@/components/core'
import { PageMetaTemplate } from '@/components/template'
import { couplePaths } from '@/routes/paths'

import { useStyles } from './SettingsTemplate.styles'
import { SettingsTemplateProps } from './SettingsTemplate.types'
import SettingsTemplateSection from './SettingsTemplateSection'

function SettingsTemplate({ title, children }: SettingsTemplateProps) {
    const { classes, theme } = useStyles()
    const { t } = useTranslation('common')

    return (
        <PageMetaTemplate meta={{ title }}>
            <BackLink color={theme.colors.blue[5]} text={t('options.back')} to={couplePaths.root} size={12} mb="lg" />
            <Text component="h1" m={0} className={classes.title}>
                {title}
            </Text>
            <Divider my="xl" />
            {children}
        </PageMetaTemplate>
    )
}

SettingsTemplate.Section = SettingsTemplateSection

export default SettingsTemplate

import { Grid, Text, Card, Divider } from '@mantine/core'

import { useStyles } from './SettingsTemplate.styles'
import { SettingsTemplateSectionProps } from './SettingsTemplate.types'

function SettingsTemplateSection({ title, description, showDivider = true, children }: SettingsTemplateSectionProps) {
    const { classes } = useStyles()

    return (
        <>
            <Grid gutter="xl" my={0}>
                <Grid.Col xs={12} sm={12} md={5} lg={6} py={0} className={classes.sectionContainer}>
                    <Text component="h2" fz="md" fw={600} m={0} className={classes.sectionTitle}>
                        {title}
                    </Text>
                    <Text mt="xl" fz="sm" className={classes.sectionDescription}>
                        {description}
                    </Text>
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={7} lg={6} py={0}>
                    <Card radius="lg" py="xl" px={32} className={classes.rightSideContainer}>
                        {children}
                    </Card>
                </Grid.Col>
            </Grid>
            {showDivider && <Divider my="xl" />}
        </>
    )
}

export default SettingsTemplateSection

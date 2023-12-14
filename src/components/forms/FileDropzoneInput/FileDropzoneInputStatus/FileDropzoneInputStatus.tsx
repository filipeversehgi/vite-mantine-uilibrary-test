import { useTranslation } from 'react-i18next'

import { Text } from '@mantine/core'

import { useStyles } from './FileDropzoneInputStatus.styles'
import { FileDropzoneInputStatusProps } from './FileDropzoneInputStatus.types'

function FileDropzoneInputStatus({ accept, maxSizeMb }: FileDropzoneInputStatusProps) {
    const { classes } = useStyles()
    const { t } = useTranslation('common')

    return (
        <>
            <Text fz="sm" mt="xs" mb="xxs">
                <Text component="span" className={classes.text}>
                    {t('dropzone.clickToUpload')}
                </Text>{' '}
                <Text component="span" className={classes.textSecondary}>
                    {t('dropzone.orDragAndDrop')}
                </Text>
            </Text>
            <Text fz="xs" color="light.2">
                {accept.map((type, index) => {
                    if (accept.length === 1) return `${type}`
                    if (accept.length - 2 === index) {
                        return `${type} `
                    }
                    if (accept.length - 1 === index) {
                        return `${t('dropzone.or')} ${type}`
                    }
                    return `${type}`
                })}
                {` (${t('dropzone.max')} ${maxSizeMb}MB)`}
            </Text>
        </>
    )
}

export default FileDropzoneInputStatus

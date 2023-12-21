import { useContext } from 'react'

import { Text } from '@mantine/core';

import { TranslationContext } from '@/components/core/TranslationContext'

import classes from './FileDropzoneInputStatus.module.css'
import { FileDropzoneInputStatusProps } from './FileDropzoneInputStatus.types'

function FileDropzoneInputStatus({ accept, maxSizeMb }: FileDropzoneInputStatusProps) {
    const { dropZone: t } = useContext(TranslationContext)

    return (
        <>
            <Text fz="sm" mt="xs" mb="xxs">
                <Text component="span" className={classes.text}>
                    {t.clickToUpload}
                </Text>{' '}
                <Text component="span" className={classes.textSecondary}>
                    {t.orDragAndDrop}
                </Text>
            </Text>
            <Text fz="xs" color="light.2">
                {accept.map((type, index) => {
                    if (accept.length === 1) return `${type}`
                    if (accept.length - 2 === index) {
                        return `${type} `
                    }
                    if (accept.length - 1 === index) {
                        return `${t.or} ${type}`
                    }
                    return `${type}`
                })}
                {` (${t.max} ${maxSizeMb}MB)`}
            </Text>
        </>
    )
}

export default FileDropzoneInputStatus

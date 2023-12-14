import { useTranslation } from 'react-i18next'

import { ActionIcon, Button, Group, Text } from '@mantine/core'

import { IconFile4, IconTrash } from '@/components/icons/untitled-ui'

import { useStyles } from './FileDropzoneInputError.styles'
import { FileDropzoneInputErrorProps } from './FileDropzoneInputError.types'

function FileDropzoneInputError({ setFilesErrors, openRef, errorMessage }: FileDropzoneInputErrorProps) {
    const { classes } = useStyles()
    const { t } = useTranslation('common')

    const clearFilesErrors = () => {
        setFilesErrors([])
    }

    return (
        <div className={classes.errorContainer}>
            <Group className={classes.avatar} mt="xxs" align="flex-start">
                <div className={classes.iconDecorationError}>
                    <IconFile4 />
                </div>
                <div className={classes.flex1}>
                    <div>
                        <Text size="sm" color="dark.2">
                            {errorMessage}
                        </Text>
                    </div>
                    <Button
                        color="red.6"
                        radius="md"
                        mt="md"
                        onClick={() => {
                            clearFilesErrors()

                            if (openRef.current)
                                setTimeout(() => {
                                    if (openRef.current) openRef.current()
                                })
                        }}>
                        {t('dropzone.tryAgain')}
                    </Button>
                </div>
                <ActionIcon className={classes.trashBtn} onClick={clearFilesErrors}>
                    <IconTrash size={20} />
                </ActionIcon>
            </Group>
        </div>
    )
}

export default FileDropzoneInputError

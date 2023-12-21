import { useContext } from 'react'

import { ActionIcon, Button, Group, Text } from '@mantine/core';

import { TranslationContext } from '@/components/core/TranslationContext'
import { IconFile4, IconTrash } from '@/components/icons/untitled-ui'

import classes from './FileDropzoneInputError.module.css';
import { FileDropzoneInputErrorProps } from './FileDropzoneInputError.types';

function FileDropzoneInputError({ setFilesErrors, openRef, errorMessage }: FileDropzoneInputErrorProps) {
    const { dropZone: t } = useContext(TranslationContext)

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
                        <Text size="sm" c="dark.2">
                            {errorMessage}
                        </Text>
                    </div>
                    <Button
                        color="error.4"
                        radius="md"
                        mt="md"
                        onClick={() => {
                            clearFilesErrors()

                            if (openRef.current) {
                                setTimeout(() => {
                                    if (openRef.current) openRef.current();
                                });
                            }
                        }}>
                        {t.tryAgain}
                    </Button>
                </div>
                <ActionIcon color="red" size="lg" className={classes.trashBtn} onClick={clearFilesErrors}>
                    <IconTrash size={20} />
                </ActionIcon>
            </Group>
        </div>
    )
}

export default FileDropzoneInputError

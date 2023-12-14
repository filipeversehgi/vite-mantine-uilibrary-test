import { memo, useCallback, useEffect, useState } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ActionIcon, Flex, Grid, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { IAssetSizesEnum, ISingleFileResponse } from '@scaliolabs/wedplanco-sdk'

import { getValidationMessage } from '@/common/utils'
import { AvatarImage } from '@/components/core'
import { LabelInput } from '@/components/forms'
import { GalleryImageProps, GalleryProps } from '@/components/forms/Gallery/Gallery.types'
import GalleryButton from '@/components/forms/Gallery/GalleryButton'
import { IconEdit2, IconMonitor2, IconTrash } from '@/components/icons/untitled-ui'
import { UploadFileDialog } from '@/components/overlay'

import { useStyles } from './Gallery.styles'

function Gallery({
    id,
    label,
    required = false,
    maxElements,
    hasFeatured = false,
    colSpan = 4,
    bgColor,
    maxMbSize,
    accept,
    defaultValue,
    validations,
}: GalleryProps) {
    const theme = useMantineTheme()
    const { classes, cx } = useStyles()
    const [opened, handlers] = useDisclosure(false)
    const { setValue, setError, clearErrors, formState } = useFormContext()
    const [currentId, setCurrentId] = useState('')
    const { t } = useTranslation(['common', 'forms'])
    const [itm, setItems] = useState(defaultValue)
    const error = formState.errors[id] as FieldError | undefined

    const validateRequired = useCallback(
        (items: GalleryImageProps[]) => {
            if (required) {
                if (items.length === 0) {
                    setError(id, { type: 'required' })
                } else {
                    clearErrors(id)
                }
            }
        },
        [clearErrors, id, required, setError]
    )

    useEffect(() => {
        if (formState.isSubmitting) {
            clearErrors('photo')
            validateRequired(itm)
        }
    }, [itm, formState.isSubmitting, validateRequired, clearErrors])

    const handleRemovePhoto = (itmId: string) => {
        const newItems = [...itm]
        const newValue = newItems.filter((x) => x.id !== itmId)
        validateRequired(newValue)
        setItems(newValue)
        setValue(id, newValue)
    }

    const handleAddOrEdit = (itmId?: string) => {
        setCurrentId(itmId ?? '')
        handlers.open()
    }

    const handleCloseUploadDialog = (data?: ISingleFileResponse) => {
        let newItems = [...itm]
        if (data) {
            if (currentId) {
                newItems = newItems.map((image) => {
                    return image.id === currentId ? { ...image, src: data?.url, alt: data?.fileName } : { ...image }
                })
            } else {
                newItems.push({ src: data?.url, alt: data?.fileName, id: new Date().getTime().toString() })
            }
        }
        validateRequired(newItems)
        setItems(newItems)
        setValue(id, newItems)
        handlers.close()
    }

    return (
        <div className={classes.root}>
            <Text fz="sm">
                <LabelInput label={label} required={required} />
            </Text>
            {itm.length > 0 && (
                <Grid className="belgrano">
                    {itm?.map((item: GalleryImageProps, index: number) => {
                        const containerClass = cx(
                            index === 0 && hasFeatured ? classes.featured : classes.noFeatured,
                            classes.photo
                        )
                        return (
                            <Grid.Col key={item.id} span={index === 0 && hasFeatured ? 12 : colSpan}>
                                <div className={containerClass}>
                                    <AvatarImage
                                        alt={item.alt}
                                        fallback={<IconMonitor2 color={theme.colors.light[2]} size={16} />}
                                        ignoreColor
                                        radius="md"
                                        src={item.src}
                                        bgColor={bgColor}
                                    />
                                    <span>
                                        <ActionIcon onClick={() => handleRemovePhoto(item.id)}>
                                            <IconTrash color="black" />
                                        </ActionIcon>

                                        <ActionIcon onClick={() => handleAddOrEdit(item.id)}>
                                            <IconEdit2 color="white" />
                                        </ActionIcon>
                                    </span>
                                </div>
                            </Grid.Col>
                        )
                    })}
                </Grid>
            )}
            <Text fz="xs" color="red.6">
                {getValidationMessage(validations, error)}
            </Text>
            {(!maxElements || itm.length < maxElements) && (
                <Flex justify="left">
                    <Text className={classes.actionLink} onClick={() => handleAddOrEdit()}>
                        <GalleryButton
                            label={t(`forms:gallery.${itm.length === 0 ? 'add' : 'addAnother'}`).toString()}
                        />
                    </Text>
                </Flex>
            )}
            <UploadFileDialog
                id="photo"
                outputSizeName={IAssetSizesEnum.LG}
                opened={opened}
                onClose={handleCloseUploadDialog}
                title={t('dropzone.uploadImage')}
                accept={accept}
                maxMbSize={maxMbSize}
            />
        </div>
    )
}

export default memo(Gallery)

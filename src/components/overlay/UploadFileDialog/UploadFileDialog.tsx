import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Grid, Modal, Text } from '@mantine/core'
import { FileRejection, FileWithPath } from '@mantine/dropzone'

import { IAssetExtensionsEnum } from '@scaliolabs/wedplanco-sdk'

import { wedplanco } from '@/common/services'
import LoadingButton from '@/components/core/LoadingButton/LoadingButton'
import { FileDropzoneInput } from '@/components/forms'
import { useAssetUploadMutation } from '@/data/queries'

import { UploadFileDialogProps, UploadedObject, UploadedObjectInfo } from './UploadFileDialog.types'

function UploadFileDialog({
    id,
    opened,
    title,
    label,
    maxMbSize,
    accept,
    onClose,
    onUpload,
    outputExtension = IAssetExtensionsEnum.JPEG,
    outputSizeName,
    customContent,
}: UploadFileDialogProps) {
    const { t } = useTranslation('common')
    const { mutate: uploadMutation, isLoading } = useAssetUploadMutation()
    const methods = useFormContext()
    const { reset, setError, clearErrors, getValues, setValue, formState } = methods
    const uploadButton = useRef<HTMLButtonElement | null>(null)
    const files = getValues(`${id}-dropzone`)
    const [hasPrevFile, setHasPrevFile] = useState(false)

    const handleUpload = () => {
        if (files.length === 0) {
            setError(`${id}-dropzone`, { message: t('feedback.emptyImage').toString() })
        } else {
            clearErrors(`${id}-dropzone`)
        }

        if (onUpload) {
            onUpload.upload(files[0])
            return
        }

        if (files && files.length > 0) {
            uploadMutation(
                { file: files[0] },
                {
                    onSuccess: ({ baseUrl, key }) => {
                        const info: UploadedObjectInfo = {
                            fileName: baseUrl,
                            url: wedplanco.assetsV2.getVariant({
                                key,
                                extension: outputExtension,
                                sizeName: outputSizeName,
                            }),
                        }

                        const uploadObject: UploadedObject = { file: files[0], info }
                        setValue(id, uploadObject)
                        setValue(`${id}-dropzone`, [])
                        onClose(info)
                    },
                }
            )
        }
    }

    const handleOnClose = () => {
        //Wait the Dialog Animation to clean the field
        setTimeout(() => {
            setValue(`${id}-dropzone`, [])
            setError(`${id}-dropzone`, { message: '' })
        }, 300)

        onClose()
    }

    const handleUpdateFiles = useCallback((files?: FileWithPath[]) => {
        setHasPrevFile((files && files.length > 0) ?? false)
        if (uploadButton.current) uploadButton.current.focus()
    }, [])

    const handleUpdateFileErrors = (filesErrors: FileRejection[]) => {
        if (filesErrors.length === 0) setError(id, { message: '' })
    }

    useEffect(() => {
        if (opened) {
            reset()
            setHasPrevFile(false)
        }
    }, [opened, reset])

    return (
        <Modal
            centered
            title={<Text ta="center">{title}</Text>}
            opened={opened}
            onClose={handleOnClose}
            scrollAreaComponent={Modal.NativeScrollArea}
            className="modal-no-scroll modal-body-scroll"
            size={440}>
            <Grid>
                <Grid.Col span={12}>
                    <FileDropzoneInput
                        id={`${id}-dropzone`}
                        label={label}
                        accept={accept}
                        maxSizeMb={maxMbSize}
                        required
                        onUpdateFiles={handleUpdateFiles}
                        onUpdateFilesErrors={handleUpdateFileErrors}
                    />
                    <Text fz="xs" color="red.7" mt="xxs">
                        {formState.errors[id]?.message as string}
                    </Text>
                </Grid.Col>
                {customContent && <Grid.Col span={12}>{customContent}</Grid.Col>}
                <Grid.Col span={12}>
                    <LoadingButton
                        ref={uploadButton}
                        radius="md"
                        fullWidth
                        disabled={!files?.length && !hasPrevFile}
                        isLoading={onUpload?.isLoading || isLoading}
                        onClick={handleUpload}>
                        {t('button.upload')}
                    </LoadingButton>
                </Grid.Col>
                <Grid.Col span={12} mb={0}>
                    <Button
                        radius="md"
                        className="subtle"
                        variant="subtle"
                        fullWidth
                        onClick={handleOnClose}
                        disabled={isLoading}>
                        {t('button.cancel')}
                    </Button>
                </Grid.Col>
            </Grid>
        </Modal>
    )
}

export default UploadFileDialog

import { memo, useCallback, useEffect } from 'react'
import { FieldError, useController, useFormContext } from 'react-hook-form'

import { ActionIcon, Flex, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { IAssetSizesEnum } from '@scaliolabs/wedplanco-sdk'

import { getValidationMessage } from '@/common/utils'
import { AvatarImage } from '@/components/core'
import { LabelInput } from '@/components/forms/LabelInput'
import { IconEdit2, IconMonitor2, IconTrash } from '@/components/icons/untitled-ui'
import { UploadFileDialog } from '@/components/overlay'
import { UploadedObject } from '@/components/overlay/UploadFileDialog/UploadFileDialog.types'

import { useStyles } from './AvatarInput.styles'
import { AvatarInputProps } from './AvatarInput.types'

function AvatarInput({ id, label, control, fallbackImg, required = false, validations }: AvatarInputProps) {
    const theme = useMantineTheme()
    const [opened, { open, close }] = useDisclosure(false)
    const { classes } = useStyles()
    const { setError, clearErrors, formState, setValue } = useFormContext()
    const { field } = useController({
        control,
        name: id,
        rules: { required: required },
    })
    const error = formState.errors[id] as FieldError | undefined

    const { info: uploaded } = (field.value as UploadedObject) ?? { info: undefined }

    const validateRequired = useCallback(() => {
        if (required) {
            !field.value.info ? setError(id, { type: 'required' }) : clearErrors(id)
        }
    }, [clearErrors, field.value.info, id, required, setError])

    const handleRemoveImage = () => {
        validateRequired()
        field.onChange([])
        setValue(`${id}-dropzone`, [])
    }

    useEffect(() => {
        validateRequired()
    }, [validateRequired])

    return (
        <Flex gap={'xs'} direction={'column'}>
            <LabelInput label={label} required={required} />
            <div className={classes.image}>
                <AvatarImage
                    fallback={fallbackImg || <IconMonitor2 color={theme.colors.light[2]} size={16} />}
                    size={120}
                    radius="md"
                    src={uploaded?.url || ''}
                    alt={uploaded?.fileName || ''}
                    ignoreColor
                    bgColor={''}
                />
                <span>
                    {uploaded && uploaded.url && (
                        <ActionIcon onClick={() => handleRemoveImage()}>
                            <IconTrash color="black" />
                        </ActionIcon>
                    )}
                    <ActionIcon onClick={open}>
                        <IconEdit2 color="white" />
                    </ActionIcon>
                    <UploadFileDialog
                        id={id}
                        opened={opened}
                        onClose={close}
                        outputSizeName={IAssetSizesEnum.XS}
                        title={''}
                        accept={['PNG', 'JPG']}
                        maxMbSize={2}
                    />
                </span>
            </div>
            <Text fz="xs" color="red.6">
                {getValidationMessage(validations, error)}
            </Text>
        </Flex>
    )
}

export default memo(AvatarInput)

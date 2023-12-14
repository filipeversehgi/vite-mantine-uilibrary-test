import { ActionIcon, Avatar, Group, Text } from '@mantine/core'

import { AvatarImage } from '@/components/core'
import { IconImage3, IconTrash } from '@/components/icons/untitled-ui'

import { useStyles } from './FileDropzoneInputPreview.styles'
import { FileDropzoneInputPreviewProps } from './FileDropzoneInputPreview.types'

function FileDropzoneInputPreview({
    imageUrl,
    file,
    setFiles,
    boxPreview,
    avatarAlt,
    avatarSize,
    avatarBgColor,
}: FileDropzoneInputPreviewProps) {
    const { classes, theme } = useStyles()

    const clearFiles = () => {
        setFiles([])
    }

    return boxPreview ? (
        <div className={classes.image}>
            <AvatarImage
                alt={avatarAlt}
                size={avatarSize}
                radius="md"
                src={imageUrl}
                bgColor={avatarBgColor}
                fallback={<IconImage3 size={32} />}
            />
            <span>
                {imageUrl && (
                    <ActionIcon onClick={clearFiles}>
                        <IconTrash />
                    </ActionIcon>
                )}
            </span>
        </div>
    ) : (
        <Group className={classes.avatar} mt="xxs">
            <Avatar src={imageUrl} radius="xl" size={44} />
            <div className={classes.flex1}>
                <Text size="sm" weight={600}>
                    {file.name}
                </Text>

                <Text color="dark.2" size="xs">
                    {(file.size / 1024).toFixed(2)} KB
                </Text>
            </div>
            <ActionIcon onClick={clearFiles}>
                <IconTrash size={20} color={theme.black} />
            </ActionIcon>
        </Group>
    )
}

export default FileDropzoneInputPreview

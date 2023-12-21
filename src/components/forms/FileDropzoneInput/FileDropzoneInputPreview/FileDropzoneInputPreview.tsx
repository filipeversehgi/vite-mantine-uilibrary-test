import { ActionIcon, Group, Text, useMantineTheme } from '@mantine/core'

import { Avatar } from '@/components/core/Avatar';
import { IconImage3, IconTrash } from '@/components/icons/untitled-ui';

import classes from './FileDropzoneInputPreview.module.css';
import { FileDropzoneInputPreviewProps } from './FileDropzoneInputPreview.types';

function FileDropzoneInputPreview({
    imageUrl,
    file,
    setFiles,
    boxPreview,
    avatarAlt,
    avatarSize,
    avatarBgColor,
}: FileDropzoneInputPreviewProps) {
    const theme = useMantineTheme()
    const clearFiles = () => {
        setFiles([])
    }

    return boxPreview ? (
        <div className={classes.image}>
            <Avatar alt={avatarAlt} size={avatarSize} radius="md" src={imageUrl} fallback={<IconImage3 size={32} />} />
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
            <Avatar alt="alt" src={imageUrl} radius="full" size={44} />
            <div className={classes.flex1}>
                <Text size="sm" fw={600}>
                    {file.name}
                </Text>

                <Text color="dark.2" size="xs">
                    {(file.size / 1024).toFixed(2)} KB
                </Text>
            </div>
            <ActionIcon size="lg" onClick={clearFiles}>
                <IconTrash size={20} color={theme.white} />
            </ActionIcon>
        </Group>
    )
}

export default FileDropzoneInputPreview

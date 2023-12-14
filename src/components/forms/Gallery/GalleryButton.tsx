import { memo } from 'react'

import { Flex, Space } from '@mantine/core'

import { useStyles } from './Gallery.styles'

function GalleryButton({ label }: { label: string }) {
    const { classes } = useStyles()

    return (
        <Flex direction="row">
            {`+`}
            <Space w={2} />
            <span className={classes.addImage}>{label}</span>
        </Flex>
    )
}

export default memo(GalleryButton)

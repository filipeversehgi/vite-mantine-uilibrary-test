import { createStyles } from '@mantine/core'

import { getColorBySchema } from '@/common/utils/color.utils'

export const useStyles = createStyles((theme) => ({
    cancelBtn: {
        color: theme.white,
        backgroundColor: getColorBySchema(theme, 6),
        borderColor: getColorBySchema(theme, 4),
        ':hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : undefined,
        },
    },
}))

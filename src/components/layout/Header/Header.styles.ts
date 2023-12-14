import { createStyles } from '@mantine/core'

import { getColorBySchema } from '@/common/utils/color.utils'

export const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: getColorBySchema(theme, 6),
        padding: theme.spacing.md,
        boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.05) 0px 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0px 0.4375rem 0.4375rem -0.3125rem',
    },
    burger: {
        transform: 'rotate(180deg)',
        '> div': {
            width: 12,
            '::after, ::before': {
                width: 22,
            },
        },
    },
}))

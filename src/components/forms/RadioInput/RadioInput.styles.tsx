import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    radioItem: {
        paddingBlock: theme.spacing.xs,
        input: {
            height: theme.spacing.md,
            width: theme.spacing.md,
        },
        label: {
            lineHeight: theme.spacing.md,
        },
        svg: {
            width: theme.spacing.xxs,
            height: theme.spacing.xxs,
            top: `calc(50% - ${theme.spacing.xxs} / 2)`,
            left: `calc(50% - ${theme.spacing.xxs}/ 2)`,
            transform: 'scale(0.95) !important',
        },
    },
}))

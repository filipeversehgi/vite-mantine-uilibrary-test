import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    image: {
        width: 120,
        position: 'relative',
        '> span': {
            position: 'absolute',
            bottom: 0,
            right: theme.spacing.xxs,
            button: {
                backgroundColor: theme.colors.light[9],
                marginBottom: theme.spacing.xs,
            },
        },
    },
}))

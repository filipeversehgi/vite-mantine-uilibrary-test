import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    flex1: {
        flex: '1 !important',
    },
    avatar: {
        gap: theme.spacing.sm,
        '> div:nth-of-type(2)': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.black,
        },
    },
    image: {
        width: '100%',
        height: 107,
        position: 'relative',
        'div:first-of-type': {
            width: '100%',
            height: 107,
        },
        '> span': {
            position: 'absolute',
            bottom: 0,
            right: theme.spacing.xxs,
            button: {
                backgroundColor: theme.colors.dark[4],
                marginBottom: theme.spacing.xs,
            },
        },
    },
}))

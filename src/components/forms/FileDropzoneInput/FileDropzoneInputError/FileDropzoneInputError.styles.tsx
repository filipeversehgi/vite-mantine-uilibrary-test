import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    flex1: {
        flex: '1 !important',
    },
    errorContainer: {
        padding: theme.spacing.md,
        border: `1px solid ${theme.colors.red[6]}`,
        borderRadius: theme.radius.lg,
        '> div:first-of-type': {},
        'svg path': {
            stroke: theme.colors.red[8],
        },
    },
    iconDecorationError: {
        height: 32,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: `solid 4px ${theme.colors.red[0]}`,
        backgroundColor: theme.colors.red[0],
        'svg path': {
            stroke: theme.colors.red[8],
        },
    },
    spanMargin: {
        marginLeft: theme.radius.xs,
    },
    avatar: {
        gap: theme.spacing.sm,
        '> div:nth-of-type(2)': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.black,
        },
    },
    trashBtn: {
        '&:hover': {
            backgroundColor: theme.colors.red[0],
        },
    },
}))

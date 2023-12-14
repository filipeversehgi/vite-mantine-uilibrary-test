import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    title: {
        fontSize: theme.fontSizes.xxl,
        fontWeight: 400,
        lineHeight: 'normal',
        textAlign: 'left',
    },
    container: {
        maxWidth: 343,
        minWidth: 270,
        gap: theme.spacing.lg,
        button: {
            maxHeight: '36px',
            fontSize: theme.fontSizes.sm,
        },
    },
    formContainer: {
        maxWidth: 270,
        width: '100%',
        flex: 1,
        gap: theme.spacing.lg,
        alignItems: 'center',
        '> form': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
        },
        button: {
            maxHeight: '36px',
            fontSize: theme.fontSizes.sm,
        },
    },
    actionText: {
        fontSize: theme.fontSizes.sm,
        color: theme.colors.light[2],
        textAlign: 'center',
        lineHeight: '1.2rem',
    },
    actionLink: {
        textDecoration: 'underline',
        fontWeight: 500,
        textUnderlineOffset: 4,
        marginLeft: theme.spacing.xs,
        color: theme.colors.blue[6],
        '&:hover': {
            color: theme.colors.blue[6],
        },
    },
    message: {
        color: theme.colors.light[8],
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,
        lineHeight: '1.5',
        width: '100%',
    },
    subTitle: {
        fontSize: theme.fontSizes.md,
        fontWeight: 400,
        lineHeight: 'normal',
        textAlign: 'left',
    },
}))

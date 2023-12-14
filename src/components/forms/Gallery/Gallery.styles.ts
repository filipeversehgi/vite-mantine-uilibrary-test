import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    actionLink: {
        fontSize: theme.fontSizes.sm,
        textDecoration: 'none',
        fontWeight: 500,
        marginLeft: theme.spacing.xs,
        color: theme.colors.blue[6],
        cursor: 'pointer',
        '&:hover': {
            color: theme.colors.blue[6],
        },
    },
    featured: {
        'div:first-of-type': {
            width: '100%',
            height: 200,
        },
    },
    noFeatured: {
        'div:first-of-type': {
            width: '100%',
            height: 135,
        },
    },
    photo: {
        width: '100%',
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
    root: {
        display: 'grid',
        gap: '0.5rem',
    },
    addImage: {
        textDecoration: 'underline',
        textUnderlineOffset: 4,
    },
}))

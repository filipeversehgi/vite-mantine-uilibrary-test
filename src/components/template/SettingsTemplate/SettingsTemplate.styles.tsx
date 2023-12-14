import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    title: {
        overflowWrap: 'break-word',
        fontSize: '32px',
        fontWeight: 400,
        lineHeight: 'normal',
        fontFamily: 'Butler',
        color: theme.colors.blue[6],
    },
    sectionContainer: {
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
        '& > div': {
            maxWidth: 328,
            width: '100%',
        },
        [`@media (max-width: ${theme.breakpoints.md})`]: {
            '& > div': {
                maxWidth: '100%',
                width: '100%',
            },
        },
    },
    sectionTitle: {
        overflowWrap: 'break-word',
        lineHeight: 'normal',
        fontWeight: 600,
    },
    sectionDescription: {
        color: theme.colors.light[2],
        lineHeight: 'normal',
    },
    rightSideContainer: {
        width: '100%',
        borderRadius: theme.radius.lg,
        border: '1px solid',
        flex: 1,
        borderColor: theme.colors.dark[4],
        padding: theme.radius.xl,
        h3: {
            display: 'flex',
            gap: theme.spacing.xs,
        },
        '> form': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
        },
    },
}))

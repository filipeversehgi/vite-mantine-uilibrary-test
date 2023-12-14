import { createStyles } from '@mantine/core'

import { getColorBySchema } from '@/common/utils/color.utils'

export const useStyles = createStyles((theme) => ({
    authRoot: {
        minHeight: '100vh',
        height: '100%',
        margin: 0,
        overflow: 'hidden',
    },
    authSidebar: {
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        maxWidth: 1080,
        backgroundColor: getColorBySchema(theme, 6),
        maxHeight: '100vh',
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '50vw',
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },
    authSidebarImage: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
    },
    gradient: {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
        paddingInline: 50,
    },
    authContent: {
        width: '100%',
        height: '100%',
        padding: 0,
        display: 'flex',
        maxWidth: 'unset',
        overflow: 'hidden',
    },
    authMainContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBlock: theme.spacing.xl,
        overflow: 'hidden',
        marginLeft: '50vw',
        '> a': {
            marginLeft: theme.spacing.xl,
        },
        [theme.fn.smallerThan('md')]: {
            marginBlock: theme.spacing.lg,
            marginLeft: 0,
            '> a': {
                marginLeft: theme.spacing.lg,
            },
        },
    },
    authMainContainerInner: {
        flex: 1,
        gap: theme.spacing.lg,
        margin: theme.spacing.xl,
        overflow: 'hidden',
    },
    title: {
        fontSize: theme.fontSizes.xxl,
        fontFamily: 'Butler',
        fontWeight: 400,
        lineHeight: 'normal',
        color: theme.colors.light[9],
    },
    description: {
        color: theme.colors.light[9],
        marginBottom: 55,
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,
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
}))

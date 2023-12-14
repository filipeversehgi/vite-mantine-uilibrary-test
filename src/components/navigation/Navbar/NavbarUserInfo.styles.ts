import { createStyles, keyframes } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    userInfoExpand: {
        animation: `${userInfoExpandAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    userInfoCollapse: {
        animation: `${userInfoCollapseAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    footerData: {
        flex: 1,
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        maxWidth: 240,
        '&:hover, &[data-expanded]': {
            flexGrow: 1,
            cursor: 'pointer',
        },
        '&:hover': {
            backgroundColor: theme.colors.light[7],
        },
        '&[data-expanded]': {
            backgroundColor: theme.colors.light[4],
        },
    },
    staticFooterData: {
        cursor: 'auto !important',
        '&:hover, &[data-expanded]': {
            flexGrow: 1,
            cursor: 'pointer',
        },
        '&:hover': {
            backgroundColor: 'initial',
        },
        '&[data-expanded]': {
            backgroundColor: 'initial',
        },
    },
    avatar: {
        gap: theme.spacing.sm,
        flexWrap: 'nowrap',
        '> div:nth-of-type(2)': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.black,
        },
    },
}))

export const userInfoExpandAnim = keyframes({
    '0%': { width: 0 },
    '100%': { width: 180 },
})

export const userInfoCollapseAnim = keyframes({
    '0%': { width: 180 },
    '100%': { width: 0 },
})

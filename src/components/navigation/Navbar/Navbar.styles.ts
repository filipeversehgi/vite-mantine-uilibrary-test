import { createStyles, keyframes } from '@mantine/core'

import { getColorBySchema } from '@/common/utils/color.utils'

export const useStyles = createStyles((theme, { isNavbarCollapsed }: { isNavbarCollapsed: boolean }) => ({
    navbar: {
        width: isNavbarCollapsed ? 85 : 280,
        backgroundColor: getColorBySchema(theme, 6),
        padding: `${theme.spacing.md} ${theme.spacing.md}`,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        [`@media (max-width: ${theme.breakpoints.md})`]: {
            height: '100%',
            minHeight: '-webkit-fill-available',
        },
        zIndex: 101,
    },
    navToggleAnim: {
        animation: `${isNavbarCollapsed ? navbarCollapseAnim : navbarExpandAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
        animationIterationCount: 1,
    },
    linkLogo: {
        height: 53,
        marginTop: theme.spacing.sm,
        marginBottom: theme.spacing.xs,
    },
    userInfoContainer: {
        marginTop: theme.spacing.md,
    },
    arrow: {
        padding: 0,
        marginTop: 3,
        marginLeft: 3,
        transform: isNavbarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    arrowRotateAnim: {
        animation: `${isNavbarCollapsed ? arrowRotateRightAnim : arrowRotateLeftAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    arrowCircle: {
        marginLeft: isNavbarCollapsed ? 55 : 252,
        background: 'white',
        border: '1px solid #ced4da',
        borderWidth: 1,
        borderRadius: '50%',
        width: '2rem',
        height: '2rem',
        marginTop: 25,
        position: 'fixed',
        cursor: 'pointer',
        zIndex: 999,
    },
    arrowCircleAnim: {
        animation: `${isNavbarCollapsed ? arrowCircleCollapseAnim : arrowCircleExpandAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    navbarDrawerBody: {
        padding: 0,
        height: '100%',
    },
    navbarDrawerHeight: {
        height: '100%',
        minHeight: '-webkit-fill-available',
    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        fontSize: theme.fontSizes.xs,
        marginBottom: theme.spacing.md,
        marginTop: '20px',
        color: getColorBySchema(theme, 2),
        'svg path': {
            stroke: getColorBySchema(theme, 2),
        },
        '&:hover': {
            color: getColorBySchema(theme, 8),
            'svg path': {
                stroke: getColorBySchema(theme, 8),
            },
        },
    },
    linkBtn: {
        height: 32,
        fontWeight: 500,
        padding: `0px ${theme.spacing.xs}`,
        color: '#2D2920',
        backgroundColor: 'transparent',
        textTransform: 'none',
        'svg path': {
            stroke: '#2D2920',
        },
        '&.active': {
            color: theme.white,
            backgroundColor: '#11132E',
            'svg path': {
                stroke: theme.white,
            },
        },
        '&.vendorMyPage': {
            color: '#2D2920',
            backgroundColor: 'transparent',
            'svg path': {
                stroke: '#2D2920',
            },
        },
        '&[data-disabled]': {
            backgroundColor: 'transparent',
            'svg path': {
                stroke: '#adb5bd',
            },
        },
        ':hover': {
            color: theme.white,
            backgroundColor: '#11132E',
            'svg path': {
                stroke: theme.white,
            },
        },
        ' > div': {
            justifyContent: 'flex-start',
        },
    },
    groupLinkToggleAnim: {
        animation: `${isNavbarCollapsed ? groupLinkCollapseAnim : groupLinkExpandAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    fadeAnim: {
        animation: `${isNavbarCollapsed ? fadeOutAnim : fadeInAnim} 0.3s ease-in-out`,
        animationFillMode: 'forwards',
    },
    links: {
        flex: 1,
        paddingInline: theme.spacing.xs,
        '.group-title': {
            color: '#A6A092',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: theme.fontSizes.xs,
            marginBlock: theme.spacing.xs,
            opacity: isNavbarCollapsed ? 0 : 1,
        },
    },
}))

export const navbarExpandAnim = keyframes({
    '0%': { width: 85 },
    '100%': { width: 280 },
})

export const navbarCollapseAnim = keyframes({
    '0%': { width: 280 },
    '100%': { width: 85 },
})

export const arrowRotateRightAnim = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(180deg)' },
})

export const arrowRotateLeftAnim = keyframes({
    '0%': { transform: 'rotate(180deg)' },
    '100%': { transform: 'rotate(0deg)' },
})

export const arrowCircleCollapseAnim = keyframes({
    '0%': { marginLeft: 252 },
    '100%': { marginLeft: 52 },
})

export const arrowCircleExpandAnim = keyframes({
    '0%': { marginLeft: 52 },
    '100%': { marginLeft: 252 },
})

export const groupLinkCollapseAnim = keyframes({
    '0%': { width: 220 },
    '100%': { width: 36 },
})

export const groupLinkExpandAnim = keyframes({
    '0%': { width: 36 },
    '100%': { width: 220 },
})

export const fadeInAnim = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
})

export const fadeOutAnim = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
})

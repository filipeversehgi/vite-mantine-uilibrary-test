import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    title: {
        overflowWrap: 'break-word',
        fontSize: 48,
        fontWeight: 400,
        lineHeight: 'normal',
        fontFamily: 'Butler',
    },
    desc: {
        fontSize: theme.fontSizes.sm,
        lineHeight: 'normal',
    },
}))

import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    text: {
        color: theme.fn.primaryColor(),
        fontWeight: 600,
    },
    textSecondary: {
        color: theme.colors.light[1],
        fontWeight: 400,
    },
    fileType: {
        lineHeight: 'normal',
    },
}))

import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    editorContainer: {
        position: 'relative',
    },
    editorErrorContainer: {
        position: 'relative',
        '.ck-rounded-corners .ck.ck-toolbar': {
            borderTopColor: theme.colors.red[6],
            borderLeftColor: theme.colors.red[6],
            borderRightColor: theme.colors.red[6],
        },
        '.ck-rounded-corners .ck.ck-content': {
            borderBottomColor: `${theme.colors.red[6]}`,
            borderLeftColor: `${theme.colors.red[6]}`,
            borderRightColor: `${theme.colors.red[6]}`,
        },
    },
    rightSection: {
        position: 'absolute',
        top: 45,
        bottom: 0,
        right: 16,
        paddingTop: 12,
    },
}))

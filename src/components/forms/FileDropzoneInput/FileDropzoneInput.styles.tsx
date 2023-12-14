import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    iconDecoration: {
        height: 32,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: `solid 4px ${theme.colors.light[6]}`,
        backgroundColor: theme.colors.light[9],
        'svg path': {
            stroke: theme.fn.lighten(theme.colors.dark[2], 0.3),
        },
    },
}))

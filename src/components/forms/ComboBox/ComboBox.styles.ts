import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    comboBox: {
        '> div:first-of-type > div > div': {
            padding: `0px 0px 0px ${theme.spacing.sm}`,
            height: 40,
            '> div': {
                minHeight: '40px',
                height: 40,
            },
        },
        input: {
            padding: '10px 14px 10px 0px',
            height: theme.spacing.xxl,
        },
    },
    item: {
        ':not(:first-of-type)': {
            display: 'none',
        },
    },
}))

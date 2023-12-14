import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
    item: {
        ':not(:first-of-type)': {
            display: 'none',
        },
    },
}))

import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

type ExtendedCustomColors = 'brand' | 'gray' | 'andre' | DefaultMantineColor

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>
    }

    export type ButtonVariant = 'xs'
}

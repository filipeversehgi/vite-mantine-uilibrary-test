import { MantineTheme } from '@mantine/core'

/**
 * This utility is used to transform a string value into a HSL color
 */
export function stringToHslColor(str: string, s: number, l: number) {
    if (!str) return ''

    let hash = 0
    for (let i = 0; i < str?.length; i += 1) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }

    const h = hash % 360
    return `hsl(${h}, ${s}%, ${l}%)`
}

type Shade =
    | number
    | {
          light?: number
          dark?: number
      }

/**
 * Get the color based on the theme and shade.
 * @param {MantineTheme} theme - The theme object containing colorScheme and colors.
 * @param {Shade} shade - The shade value or an object with shade values for light and dark color schemes.
 * @returns {string} The color based on the theme and shade.
 */
export function getColorBySchema(theme: MantineTheme, shade: Shade): string | undefined {
    function getColorByShade(colors: string[], shade: number): string {
        return colors[shade]
    }

    // Check if shade is a number
    if (typeof shade === 'number') {
        return getColorByShade(theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.light, shade)
    }

    // Check if shade is an object
    if (typeof shade === 'object' && shade !== null) {
        const darkShade = shade.dark !== undefined ? shade.dark : 0
        const lightShade = shade.light !== undefined ? shade.light : 0

        return theme.colorScheme === 'dark'
            ? getColorByShade(theme.colors.dark, darkShade)
            : getColorByShade(theme.colors.light, lightShade)
    }

    return undefined
}

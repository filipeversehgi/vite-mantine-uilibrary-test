export function formatPhoneNumber(phoneNumberString: string): string | null {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return null
}

export function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

export function unslugify(value: string) {
    const wordsArray = value.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return wordsArray.join(' ')
}

export function breakLongStrings(paragraph: string, maxWidth: number): string[] {
    const words = paragraph.split(' ')
    const lines: string[] = []

    let currentLine = ''

    for (let word of words) {
        while (word.length > maxWidth) {
            lines.push(word.substring(0, maxWidth))
            word = word.substring(maxWidth)
        }

        const wordWithSpace = currentLine === '' ? word : ` ${word}`

        if (currentLine.length + wordWithSpace.length <= maxWidth || currentLine === '') {
            currentLine += wordWithSpace
        } else {
            lines.push(currentLine)
            currentLine = word
        }
    }

    if (currentLine !== '') {
        lines.push(currentLine)
    }

    return lines
}

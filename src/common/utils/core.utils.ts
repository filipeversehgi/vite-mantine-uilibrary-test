/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Check if it's a production build
 */
export function isProductionBuild() {
    return import.meta.env.NODE_ENV === 'production'
}

/**
 * Check if a number is grater than zero
 */
export const isGreaterThanZero = (value: string | number) => {
    const num = Number(value)
    if (num <= 0) {
        return false
    } else {
        return true
    }
}

/**
 * This is used for reset application location
 */
export function resetAppLocation() {
    return window.location.reload()
}

/**
 * This is used for mock a promise
 */
export function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms))
}

/**
 * Redirect to root
 */
export function redirectToRoot(): void {
    window.location.href = '/'
}

/**
 * Redirect to navigate
 */
export function redirectTo(path: string): void {
    window.location.href = path
}

/**
 * This is used for getting the right picture return
 */
export function getPhotoUpload(photo: string, showAvatar: boolean, defaultImage?: string): string | undefined {
    if (photo) {
        return photo
    } else if (defaultImage && showAvatar) {
        return defaultImage
    } else {
        return undefined
    }
}

/**
 * This is used to calculate password with strength meter
 */
export function getPasswordStrength(password: string, requirements: { re: RegExp }[]) {
    let multiplier = password.length > 5 ? 0 : 1

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1
        }
    })

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0)
}

/**
 * This is used to shuffle items in an array
 */
export function shuffleArray(array: any[]) {
    // Clone the original array to avoid modifying it
    const shuffledArray = [...array]

    // Start from the end of the array and swap elements randomly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }

    return shuffledArray
}

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export const monthsAgo = (dateString: string): number | undefined => {
    if (!dateString) return undefined

    const [inputMonth, inputYear] = dateString.split('-')

    if (isNaN(Number(inputYear))) return undefined

    const current = dayjs()
    const input = dayjs(`${inputYear}-${inputMonth}`).endOf('month')

    if (!input.isValid()) return undefined

    // Calculate the difference in months, ignoring the day part
    const monthsDifference = current.diff(input, 'month')
    return monthsDifference
}

export function getAbsoluteDateFromUtc(date: Date | string): Date {
    return new Date(dayjs(date).utc().format('YYYY-MM-DD HH:mm:ss'))
}

export function getAbsoluteDateFromLocal(date: Date | string): Date {
    return new Date(dayjs(date).format('YYYY-MM-DD HH:mm:ss[Z]'))
}

export function formatUTCDate(date: Date, format: string): string {
    return dayjs(date).utc().format(format)
}

export function getFormattedDate(date: Date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
}

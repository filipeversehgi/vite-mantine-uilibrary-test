/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SortedConfig<T> {
    key: keyof T | string
    order?: 'asc' | 'desc'
}

function validateTypes<T>(value: T): boolean {
    return value instanceof Date || value instanceof Number || typeof value === 'number'
}

function recursiveSort<T>(a: T, b: T, sortArray: Array<SortedConfig<T>>): number {
    if (sortArray.length === 0) return 0

    const { key, order = 'asc' } = sortArray[0]
    const rowA = a as any
    const rowB = b as any
    const valueA = rowA[key] !== undefined ? rowA[key] : ''
    const valueB = rowB[key] !== undefined ? rowB[key] : ''

    if (valueA === valueB) {
        sortArray.shift()
        return recursiveSort(a, b, sortArray)
    }

    let result = 0
    if (validateTypes(valueA) && validateTypes(valueB)) {
        result = valueA - valueB
    } else {
        result = valueA?.toString().localeCompare(valueB?.toString(), undefined, {
            numeric: true,
            sensitivity: 'base',
        })
    }

    return order === 'asc' ? result : -1 * result
}

export function sortBy<T>(array: Array<T>, sortConfig: Array<SortedConfig<T>>): Array<T> {
    const clonedArray = [...array]
    return clonedArray.sort((a, b) => recursiveSort(a, b, [...sortConfig]))
}

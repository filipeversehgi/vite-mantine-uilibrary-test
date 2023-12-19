import { CategoryScopeEnum, ICategory } from '@scaliolabs/wedplanco-sdk'

/**
 * Convert categories with a specific target to a format suitable for InputSelect fields.
 * @param categories - An array of category objects.
 * @returns An array of { value, label } objects for use in InputSelect fields.
 */
export function getVendorCategories(categories: ICategory[]) {
    // Filter categories that have at least one target matching CategoryScopeEnum.WORKSPACE
    const filtered = categories.filter((category) =>
        category.target.some((target) => target === CategoryScopeEnum.WORKSPACE)
    )

    // Map the filtered categories to { value, label } objects
    const vendorCategories = filtered.map((category) => ({
        value: category.slug,
        label: category.name,
    }))

    return vendorCategories
}

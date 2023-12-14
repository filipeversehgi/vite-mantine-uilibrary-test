/* eslint-disable @typescript-eslint/no-explicit-any */
export type LinkProps = {
    label: string
    icon: JSX.Element
    url: string
    target?: string
    hidden?: boolean
}

export type LinksGroupProps = {
    links: LinkProps[]
    title?: string
    divider?: boolean
}

export type ProfileDataProps = {
    title: string
    text: string
    image?: string | null
    isClickable?: boolean
    renderPosition?: 'header' | 'footer'
    vendorServiceNoApproved?: boolean
}

export type NavbarUserInfoProps = {
    profileData: ProfileDataProps
    onItemClick: () => void
}

export type NavbarProps = {
    logo?: string
    linksGroup?: LinksGroupProps[]
    isLoading?: boolean
    profileData?: ProfileDataProps
    onBack?: () => void
}

export type LinkToSettingsProps = { component: any; to: string } | { disabled: true }

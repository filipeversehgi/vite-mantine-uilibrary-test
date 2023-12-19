import React from "react"

export type HeaderProps = {
    onToggle: () => void
    logo: React.ReactNode,
    onlyForMobile?: boolean
}
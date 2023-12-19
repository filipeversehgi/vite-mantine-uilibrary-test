import { AppShellHeaderConfiguration, AppShellNavbarConfiguration } from "@mantine/core"
import React from "react"

export type AppShellProps = {
    navbar: React.ReactNode,
    header: React.ReactNode,
    navbarConfig?: AppShellNavbarConfiguration,
    headerConfig?: AppShellHeaderConfiguration
    children: React.ReactNode
}
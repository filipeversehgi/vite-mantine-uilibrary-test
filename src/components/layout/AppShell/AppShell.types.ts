import React from 'react'

import { AppShellHeaderConfiguration, AppShellNavbarConfiguration } from '@mantine/core';

export type AppShellProps = {
    navbar: React.ReactNode
    header: React.ReactNode
    navbarConfig?: AppShellNavbarConfiguration
    headerConfig?: AppShellHeaderConfiguration
    children: React.ReactNode
}

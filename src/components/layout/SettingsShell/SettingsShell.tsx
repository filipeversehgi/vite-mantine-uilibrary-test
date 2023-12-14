import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { AppShell, Container } from '@mantine/core'

import { Header } from '@/components/layout'
import { SettingsNavbar } from '@/containers'

function SettingsShell() {
    return (
        <AppShell navbar={<SettingsNavbar />} header={<Header />}>
            <Container className="shell-container">
                <Suspense>
                    <Outlet />
                </Suspense>
            </Container>
        </AppShell>
    )
}

export default SettingsShell

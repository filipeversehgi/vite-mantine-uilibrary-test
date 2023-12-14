import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { AppShell as MantineShell, Container } from '@mantine/core'

import { Header } from '@/components/layout'
import { WedPlanNavbar } from '@/containers'

function AppShell() {
    return (
        <MantineShell navbar={<WedPlanNavbar />} header={<Header />}>
            <Container className="shell-container">
                <Suspense>
                    <Outlet />
                </Suspense>
            </Container>
        </MantineShell>
    )
}

export default AppShell

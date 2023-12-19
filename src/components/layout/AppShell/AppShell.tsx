import { Suspense } from 'react';

import { Container, AppShell as MantineShell } from '@mantine/core';

import { AppShellProps } from './AppShell.types';

function AppShell({ navbar, header, children, headerConfig, navbarConfig }: AppShellProps) {
  return (
    <MantineShell header={headerConfig} navbar={navbarConfig}>
      <MantineShell.Header>{header}</MantineShell.Header>
      <MantineShell.Navbar>{navbar}</MantineShell.Navbar>
      <MantineShell.Main>
        <Container>
          <Suspense>{children}</Suspense>
        </Container>
      </MantineShell.Main>
    </MantineShell>
  );
}

export default AppShell;

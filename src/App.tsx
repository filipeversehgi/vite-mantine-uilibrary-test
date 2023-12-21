import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { Router } from './Router'
import './global.css'

import { theme } from './theme'

export default function App() {
    return (
        <MantineProvider defaultColorScheme="light" theme={theme}>
            <Router />
        </MantineProvider>
    )
}

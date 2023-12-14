import { useSetAtom } from 'jotai'
import { Link } from 'react-router-dom'

import { Burger, Flex, Header as MantineHeader, Image } from '@mantine/core'
import { useLocalStorage, useMediaQuery } from '@mantine/hooks'

import Logo from '@/assets/img/logo.svg'
import { INITIAL_NAVBAR_COLLAPSED } from '@/common/configs'
import { navbarStore } from '@/data/store/navbar.atoms'

import { useStyles } from './Header.styles'

function Header() {
    const { classes, theme } = useStyles()

    const setIsNavbarOpened = useSetAtom(navbarStore.isNavbarOpenedAtom)
    const [, setIsNavbarCollapsed] = useLocalStorage<boolean>(INITIAL_NAVBAR_COLLAPSED)
    const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const handleNavbarOpenOnClick = () => {
        setIsNavbarCollapsed(false)
        setIsNavbarOpened((previousValue) => !previousValue)
    }

    if (!matches) return <></>

    return (
        <>
            <MantineHeader className={classes.header} height={87}>
                <Flex justify="space-between" align="center">
                    <Link to="/">
                        <Image src={Logo} maw={248} mt="lg" mb="xs" alt="wedplanco logo" />
                    </Link>
                    <Burger
                        className={classes.burger}
                        opened={false}
                        onClick={() => handleNavbarOpenOnClick()}
                        size="sm"
                    />
                </Flex>
            </MantineHeader>
        </>
    )
}

export default Header

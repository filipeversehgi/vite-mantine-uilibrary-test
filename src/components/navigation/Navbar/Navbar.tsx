/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAtom, useAtomValue } from 'jotai'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { ScrollArea, Image, Divider, Text, Button, Drawer, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconChevronLeft } from '@tabler/icons-react'

import IconLogo from '@/assets/img/logoShort.svg'
import { navbarStore } from '@/data/store/navbar.atoms'
import { useNavbarCollapse } from '@/hooks'
import { couplePaths, vendorPaths } from '@/routes/paths'

import { useStyles } from './Navbar.styles'
import { NavbarProps } from './Navbar.types'
import NavbarSkeleton from './NavbarSkeleton'
import NavbarUserInfo from './NavbarUserInfo'

function Navbar({ linksGroup, isLoading, logo, profileData }: NavbarProps) {
    const { t } = useTranslation('common')
    const { pathname } = useLocation()
    const theme = useMantineTheme()
    const { isNavbarCollapsed, executeNavbarAnimation, handleArrowClick, logoRef, collapsedLogoRef } =
        useNavbarCollapse(theme)
    const { classes, cx } = useStyles({ isNavbarCollapsed })
    const [isNavbarOpened, setIsNavbarOpened] = useAtom(navbarStore.isNavbarOpenedAtom)
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const myPageUrlAtom = useAtomValue(navbarStore.myPageUrlAtom)

    const handleNavbarItemClick = useCallback(() => {
        if (isMobile) {
            setIsNavbarOpened(false)
        }
    }, [isMobile, setIsNavbarOpened])

    const showAnimation = !isMobile && executeNavbarAnimation

    const navbarContent = (
        <nav className={cx(classes.navbar, showAnimation ? classes.navToggleAnim : '')}>
            {!isMobile && (
                <span className={cx(classes.arrowCircle, executeNavbarAnimation ? classes.arrowCircleAnim : '')}>
                    <IconChevronLeft
                        size={theme.spacing.xl}
                        color={theme.colors.blue[6]}
                        onClick={handleArrowClick}
                        className={cx(classes.arrow, executeNavbarAnimation ? classes.arrowRotateAnim : '')}
                    />
                </span>
            )}
            {logo && (
                <>
                    <Link to="/" onClick={() => setIsNavbarOpened(false)} className={classes.linkLogo}>
                        <Image
                            display="none"
                            ref={collapsedLogoRef}
                            src={IconLogo}
                            alt="wedplanco logo"
                            ml={4}
                            width={50}
                        />

                        <Image
                            display={isMobile ? 'block' : 'none'}
                            ref={logoRef}
                            src={logo}
                            maw={248}
                            mt={theme.spacing.xs}
                            alt="wedplanco logo"
                            className={showAnimation ? classes.fadeAnim : ''}
                        />
                    </Link>
                </>
            )}
            {isLoading && <NavbarSkeleton />}
            {!isLoading && (
                <>
                    {profileData?.renderPosition === 'header' && (
                        <div className={classes.userInfoContainer}>
                            <NavbarUserInfo profileData={profileData} onItemClick={handleNavbarItemClick} />
                        </div>
                    )}
                    <ScrollArea className={classes.links} offsetScrollbars>
                        {linksGroup?.map((group, index) => (
                            <div key={`${group?.title}-${index}`}>
                                {group.title && (
                                    <Text mih={12} className={cx('group-title', showAnimation ? classes.fadeAnim : '')}>
                                        {group.title}
                                    </Text>
                                )}
                                {group.links.map(
                                    (link) =>
                                        !link.hidden && (
                                            <Button
                                                component={NavLink}
                                                target={link.target ?? '_self'}
                                                to={link.url}
                                                end={link.url === couplePaths.root || link.url === vendorPaths.root}
                                                key={link.label}
                                                leftIcon={link.icon}
                                                className={cx(
                                                    classes.linkBtn,
                                                    showAnimation ? classes.groupLinkToggleAnim : '',
                                                    link.label === t('navbar.directory') && myPageUrlAtom === pathname
                                                        ? 'vendorMyPage'
                                                        : ''
                                                )}
                                                w={isNavbarCollapsed ? 36 : 220}
                                                onClick={handleNavbarItemClick}>
                                                <Text lh="normal">{link.label}</Text>
                                            </Button>
                                        )
                                )}
                                {group.divider && <Divider my="xl" />}
                            </div>
                        ))}
                    </ScrollArea>
                </>
            )}
            {profileData?.renderPosition === 'footer' && (
                <>
                    <Divider my="md" mx="xs" />
                    <NavbarUserInfo profileData={profileData} onItemClick={handleNavbarItemClick} />
                </>
            )}
        </nav>
    )

    if (isMobile) {
        return (
            <Drawer
                classNames={{
                    body: classes.navbarDrawerBody,
                    content: classes.navbarDrawerHeight,
                    inner: classes.navbarDrawerHeight,
                }}
                size={280}
                opened={isNavbarOpened}
                onClose={() => setIsNavbarOpened(false)}
                withCloseButton={false}>
                {navbarContent}
            </Drawer>
        )
    }
    return navbarContent
}

export default memo(Navbar)

import { TFunction } from 'i18next'
import { useResetAtom } from 'jotai/utils'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useParams } from 'react-router-dom'

import { Container, Flex, Grid, Text, BackgroundImage } from '@mantine/core'

import { UserRoleEnum } from '@scaliolabs/wedplanco-sdk'

import AdminHero from '@/assets/img/celebrant.webp'
import VendorHero from '@/assets/img/vendorHero.jpg'
import ImgHero from '@/assets/img/weddingHero.webp'
import { env } from '@/common/configs/env.config'
import { RoleService } from '@/common/services/role.service'
import { LogoIcon } from '@/components/icons/general'
import { authStore } from '@/data/store/auth.atoms'
import { authPaths } from '@/routes/paths'

import { useStyles } from './AuthShell.styles'
import { AuthShellContent } from './AuthShell.types'

export const getAuthShellContent = (t: TFunction<'authentication'>, role = '') => {
    const roleInfo: AuthShellContent = {
        couple: {
            title: t('shell.coupleTitle'),
            description: t('shell.coupleDescription'),
            image: ImgHero,
            footer: {
                text: t('shell.coupleFooter'),
                action: t('shell.coupleFooterAction'),
                urlSignIn: authPaths.insertRole('vendor', authPaths.signIn),
                urlSignUp: authPaths.insertRole('vendor', authPaths.signUp),
            },
        },
        vendor: {
            title: t('shell.vendorTitle'),
            description: t('shell.vendorDescription'),
            image: VendorHero,
            footer: {
                text: t('shell.vendorFooter'),
                action: t('shell.vendorFooterAction'),
                urlSignIn: authPaths.insertRole('couple', authPaths.signIn),
                urlSignUp: authPaths.insertRole('couple', authPaths.signUp),
            },
        },
        owner: {
            title: '',
            description: '',
            image: AdminHero,
            footer: { text: '', action: '', urlSignIn: '', urlSignUp: '' },
        },
    }

    return roleInfo[role as UserRoleEnum]
}

export function AuthShell() {
    const { t } = useTranslation('authentication')
    const { classes, theme } = useStyles()
    const { role: roleParam } = useParams()
    const role = roleParam || RoleService.getUserRole()
    const resetFlow = useResetAtom(authStore.signupFlowSuccessAtom)

    const content = getAuthShellContent(t, role as UserRoleEnum)
    const canRenderFooter = [authPaths.signIn, authPaths.signUp].some((path) => location.pathname.includes(path))

    return (
        <Grid className={classes.authRoot}>
            <Grid.Col span={6} className={classes.authSidebar}>
                <BackgroundImage src={content?.image || ''} className={classes.authSidebarImage}>
                    <Container className={classes.authContent}>
                        <Flex justify="flex-end" align="center" direction="column" w={'100%'}>
                            <Flex justify="flex-end" direction="column" className={classes.gradient} w={'100%'}>
                                <Text mb="sm" className={classes.title}>
                                    {content?.title}
                                </Text>
                                <Text className={classes.description}>{content?.description}</Text>
                            </Flex>
                        </Flex>
                    </Container>
                </BackgroundImage>
            </Grid.Col>
            <Grid.Col span={theme.fn.smallerThan('md') ? 'auto' : 6} className={classes.authMainContainer}>
                <Link to={env.MARKETING_URL}>
                    <LogoIcon height={35} width={249} />
                </Link>
                <Flex align="center" justify="center" direction="column" className={classes.authMainContainerInner}>
                    <Outlet />
                </Flex>
                {canRenderFooter && (
                    <Text className={classes.actionText}>
                        {content?.footer.text}
                        <Link
                            to={
                                (location.pathname.includes(authPaths.signUp)
                                    ? content?.footer.urlSignUp
                                    : content?.footer.urlSignIn) || ''
                            }
                            className={classes.actionLink}
                            onClick={() => resetFlow()}>
                            {content?.footer.action}
                        </Link>
                    </Text>
                )}
            </Grid.Col>
        </Grid>
    )
}

export default AuthShell

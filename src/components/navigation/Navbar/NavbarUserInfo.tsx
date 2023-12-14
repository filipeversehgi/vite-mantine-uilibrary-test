import { useAtomValue } from 'jotai';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Divider, Flex, Group, Menu, Text } from '@mantine/core';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';

import { UserRoleEnum } from '@scaliolabs/wedplanco-sdk';

import { INITIAL_NAVBAR_COLLAPSED } from '@/common/configs';
import { RoleService } from '@/common/services/role.service';
import { AvatarImage } from '@/components/core';
import { IconLogout, IconSettings } from '@/components/icons/untitled-ui';
import { navbarStore } from '@/data/store/navbar.atoms';
import { useAuth } from '@/hooks';
import { couplePaths, vendorPaths } from '@/routes/paths';

import { LinkToSettingsProps, NavbarUserInfoProps } from './Navbar.types';
import { useStyles } from './NavbarUserInfo.styles';

function NavbarUserInfo({ profileData, onItemClick }: NavbarUserInfoProps) {
  const { t } = useTranslation('common');
  const { classes, cx, theme } = useStyles();
  const { logout } = useAuth();
  const [isNavbarCollapsed] = useLocalStorage<boolean>(INITIAL_NAVBAR_COLLAPSED);
  const executeNavbarAnimation = useAtomValue(navbarStore.executeNavbarAnimationAtom);

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  // TODO Remove role from here when navbar will be decoupled
  const role = RoleService.getUserRole();
  const userInfoToggleAnim = isNavbarCollapsed ? classes.userInfoCollapse : classes.userInfoExpand;
  const goToSettings: LinkToSettingsProps =
    !profileData.vendorServiceNoApproved && role !== UserRoleEnum.OWNER
      ? {
          component: Link,
          to: role === UserRoleEnum.VENDOR ? vendorPaths.settings : couplePaths.settings,
        }
      : { disabled: true };

  return (
    <Menu
      width={285}
      position="top"
      transitionProps={{ transition: 'fade' }}
      disabled={!profileData.isClickable}
      withinPortal
    >
      <Flex align="center" mb="sm">
        <Menu.Target>
          <Flex
            className={cx(classes.footerData, {
              [classes.staticFooterData]: !profileData.isClickable,
            })}
            mb={!profileData.isClickable ? 'xs' : 0}
          >
            <AvatarImage size={36} src={profileData?.image} alt={profileData.title} />
            <Flex
              ml="sm"
              direction="column"
              justify="center"
              w={isNavbarCollapsed ? 0 : '100%'}
              style={{ marginLeft: 0 }}
              className={executeNavbarAnimation ? userInfoToggleAnim : ''}
            >
              <Text fw={600} ml={theme.spacing.md} truncate mb={2} lh="normal">
                {profileData.title}
              </Text>
              <Text size="xs" ml={theme.spacing.md} truncate color="light.8">
                {profileData.text}
              </Text>
            </Flex>
          </Flex>
        </Menu.Target>
      </Flex>

      <Menu.Dropdown style={{ transform: isMobile ? 'translateX(0%)' : 'translateX(20%)' }}>
        <Menu.Item {...goToSettings} onClick={onItemClick}>
          <Group className={classes.avatar}>
            <AvatarImage alt={profileData.title} size={31} src={profileData.image} />
            <div>
              <Text size="sm" weight={600} mb={2} maw={160} truncate lh="normal">
                {profileData.title}
              </Text>

              <Text color="dimmed" size="xs">
                {profileData.text}
              </Text>
            </div>
          </Group>
        </Menu.Item>

        {role !== UserRoleEnum.OWNER && (
          <Menu.Item icon={<IconSettings />} {...goToSettings} onClick={onItemClick}>
            {t('options.accountSettings')}
          </Menu.Item>
        )}

        <Divider my="sm" color="dark.1" />

        <Menu.Item mb={-8} onClick={logout} icon={<IconLogout />}>
          {t('options.signOut')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default memo(NavbarUserInfo);

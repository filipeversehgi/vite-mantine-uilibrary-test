import { Menu, Tooltip } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import { LoadingButton } from '@/components/core/LoadingButton';

import { ButtonDropdownProps } from './ButtonDropdown.types';

function ButtonDropdown({
  label,
  dropdownItems = [],
  isLoading = false,
  position = 'bottom-end',
  tooltip,
  ...props
}: ButtonDropdownProps) {
  const menuTargetChildren = (
    <div>
      <LoadingButton
        leftSection={isLoading ? <></> : <IconChevronDown size="1.05rem" stroke={1.5} />}
        pr={12}
        isLoading={isLoading}
        {...props}
      >
        {label}
      </LoadingButton>
    </div>
  );

  return (
    <Menu
      withinPortal
      transitionProps={{ transition: 'pop-top-right' }}
      position={position}
      disabled={props.disabled}
    >
      <Menu.Target>
        {tooltip ? (
          <Tooltip
            label={tooltip?.text}
            withArrow
            arrowSize={6}
            multiline
            position={tooltip?.position}
          >
            {menuTargetChildren}
          </Tooltip>
        ) : (
          menuTargetChildren
        )}
      </Menu.Target>
      <Menu.Dropdown style={{ padding: '8px !important' }}>
        {dropdownItems.map((item) => (
          <Menu.Item px="sm" key={item.label} leftSection={item.icon} onClick={item.onClick}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default ButtonDropdown;

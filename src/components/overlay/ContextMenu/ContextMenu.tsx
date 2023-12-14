import { MouseEvent, ReactNode, useState } from 'react';

import { Menu, Overlay, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

import { MENU_HEIGHT } from './constants';

export default function useContextMenu() {
  const theme = useMantineTheme();
  const { height } = useViewportSize();
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const [contextMenuPosition, setContenxtMenuPosition] = useState({ x: 0, y: 0 });

  const openContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    setContextMenuOpened(true);
    const menuYPosition =
      height - MENU_HEIGHT > event.clientY ? event.clientY : event.clientY - MENU_HEIGHT;
    setContenxtMenuPosition({ x: event.clientX, y: menuYPosition });
  };

  const ContextMenu = ({ children }: { children: ReactNode }) => (
    <>
      <Menu width={200} opened={contextMenuOpened} onChange={setContextMenuOpened}>
        <Menu.Dropdown
          style={{
            paddingBlock: `${theme.spacing.md} !important`,
            transform: `translateX(${contextMenuPosition.x}px) translateY(${contextMenuPosition.y}px)`,
          }}
        >
          {children}
        </Menu.Dropdown>
      </Menu>
      {contextMenuOpened && (
        <Overlay
          style={{ opacity: 0 }}
          zIndex={90}
          fixed
          onClick={() => setContextMenuOpened(false)}
        />
      )}
    </>
  );

  return {
    contextMenuOpened,
    openContextMenu,
    ContextMenu,
  };
}

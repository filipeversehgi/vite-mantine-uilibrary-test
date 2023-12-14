import { UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export function ColorSchemaToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <UnstyledButton darkHidden style={{ height: 24 }} onClick={() => setColorScheme('dark')}>
        <IconSun className="light" size={24} />
      </UnstyledButton>

      <UnstyledButton lightHidden style={{ height: 24 }} onClick={() => setColorScheme('light')}>
        <IconMoonStars className="dark" size={24} />
      </UnstyledButton>
    </>
  );
}

export default ColorSchemaToggle;

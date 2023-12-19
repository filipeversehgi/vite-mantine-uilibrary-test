import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addons } from '@storybook/preview-api';
import { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { TranslationProvider } from '../src/components/core/TranslationContext/TranslationContext';
import '../src/global.css';
import { theme } from '../src/theme';

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
  (renderStory: any) => <TranslationProvider>{renderStory()}</TranslationProvider>,
  (renderStory: any) => <BrowserRouter>{renderStory()}</BrowserRouter>,
];

const preview: Preview = {
  parameters: {
    viewport: { viewports: INITIAL_VIEWPORTS },
  },
};

export default preview;

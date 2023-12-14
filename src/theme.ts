import { createTheme } from '@mantine/core';
import { customComponents } from './them-components';

export const theme = createTheme({
  white: "#ffffff",
  black: "#000000",
  colors: {
    brand: ["#EBECFA", "#EEEEFF", "#D8DAFA", "#AFB0EC", "#8385E0", "#5F60D6", "#3A3DCE", "#2C30B7", "#1A2392", "#171852"],
    gray: ["#FCFCFD", "#F2F4F7", "#EAECF0", "#D0D5DD", "#98A2B3", "#667085", "#344054", "#182230", "#101828", "#0C111D"]
  },
  primaryColor: 'brand',
  spacing: { // 3.Spacing
    none: '0px',
    xxs: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xl2: '20px',
    xl3: '24px',
    xl4: '32px',
    xl5: '40px',
    xl6: '48px',
    xl7: '64px',
    xl8: '80px',
    xl9: '96px',
    xl10: '128px',
    xl11: '160px',
  },
  radius: { // 2.Radius
    none: '0px',
    xxs: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    xl2: '16px',
    xl3: '20px',
    xl4: '24px',
    full: '999px'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  defaultRadius: 'xs',
  respectReducedMotion: true,
  components: customComponents
});

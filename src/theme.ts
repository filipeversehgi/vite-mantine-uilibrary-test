
import { MantineThemeOverride, defaultVariantColorsResolver } from '@mantine/core';
import { customComponents } from './theme-components';

export const theme: MantineThemeOverride = {
  // white: findColor('Base', 'white'),
  // black: findColor('Base', 'black'),
  colors: {
  "brand": [
    "#EEEEFF",
    "#D8DAFA",
    "#AFB0EC",
    "#8385E0",
    "#5F60D6",
    "#4749D0",
    "#3A3DCE",
    "#2C30B7",
    "#2529A4",
    "#1A2392"
  ],
  "gray": [
    "#F9FAFB",
    "#F2F4F7",
    "#EAECF0",
    "#D0D5DD",
    "#98A2B3",
    "#667085",
    "#475467",
    "#344054",
    "#182230",
    "#101828"
  ],
  "error": [
    "#FEF3F2",
    "#FEE4E2",
    "#FECDCA",
    "#FDA29B",
    "#F97066",
    "#F04438",
    "#D92D20",
    "#B42318",
    "#912018",
    "#7A271A"
  ],
  "warning": [
    "#FFFAEB",
    "#FEF0C7",
    "#FEDF89",
    "#FEC84B",
    "#FDB022",
    "#F79009",
    "#DC6803",
    "#B54708",
    "#93370D",
    "#7A2E0E"
  ],
  "success": [
    "#ECFDF3",
    "#DCFAE6",
    "#ABEFC6",
    "#75E0A7",
    "#47CD89",
    "#17B26A",
    "#079455",
    "#067647",
    "#085D3A",
    "#074D31"
  ]
},
  primaryColor: 'brand',
  spacing: { // 3.Spacing
    none: "0px",
    xxs: "2px",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    xl2: "20px",
    xl3: "24px",
    xl4: "32px",
    xl5: "40px",
    xl6: "48px",
    xl7: "64px",
    xl8: "80px",
    xl9: "96px",
    xl10: "128px",
    xl11: "160px",
  },
  radius: { // 2.Radius
    none: "0px",
    xxs: "2px",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "10px",
    xl: "12px",
    xl2: "16px",
    xl3: "20px",
    xl4: "24px",
    full: "9999px",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  shadows: {
    xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
    md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
    lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
    xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
    xl2: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
    xl3: "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
  },
  headings: {
    sizes: {
      h1: {"fontSize":"72px","fontWeight":"Regular","lineHeight":"90px"},
      h2: {"fontSize":"60px","fontWeight":"Regular","lineHeight":"72px"},
      h3: {"fontSize":"48px","fontWeight":"Regular","lineHeight":"60px"},
      h4: {"fontSize":"36px","fontWeight":"Regular","lineHeight":"44px"},
      h5: {"fontSize":"30px","fontWeight":"Regular","lineHeight":"38px"},
      h6: {"fontSize":"24px","fontWeight":"Regular","lineHeight":"32px"},
    }
  },
  defaultRadius: 'md',
  respectReducedMotion: true,
  components: customComponents,
  variantColorResolver: (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);

    if (['brand', 'gray', 'error'].includes(input.color as any)) {
      if (input.variant === 'primary') {
        return {
          background: `var(--mantine-color-${input.color}-5)`,
          hover: `var(--mantine-color-${input.color}-6)`,
          border: `1px solid var(--mantine-color-${input.color}-5)`,
          color: `var(--mantine-color-white)`,
        }
      }

      if (input.variant === 'secondary') {
        return {
          background: 'var(--mantine-color-white)',
          hover: `var(--mantine-color-${input.color}-1)`,
          border: `1px solid var(--mantine-color-${input.color}-5)`,
          color: `var(--mantine-color-${input.color}-5)`,
        }
      }

      if (input.variant === 'tertiary') {
        return {
          background: 'var(--mantine-color-white)',
          hover: `var(--mantine-color-${input.color}-1)`,
          border: `0px solid var(--mantine-color-${input.color}-5)`,
          color: `var(--mantine-color-${input.color}-5)`,
        }
      }
    }

    return defaultResolvedColors
  }
}

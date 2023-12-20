import { readFile, writeFile } from 'fs/promises';

export interface Root {
  version: string;
  metadata: Metadata;
  collections: Collection[];
}

export interface Metadata {}

export interface Collection {
  name: string;
  modes: Mode[];
}

export interface Mode {
  name: string;
  variables: Variable[];
}

export interface Variable {
  name: string;
  type: string;
  isAlias: boolean;
  value: any;
}

async function generateTheme(): Promise<void> {
  const variables: Root = await readFile('./scripts/variables.json')
    .then((data) => data.toString())
    .then((data) => JSON.parse(data));

  /**
   * Variable Collections
   */

  const primitivesRaw = variables.collections.find((c) => c.name === '_Primitives');

  const radiusRaw = variables.collections.find((c) => c.name === '2. Radius');

  const typographyRaw = variables.collections.find((c) => c.name === 'Typography');

  const effectsRaw = variables.collections.find((c) => c.name === 'Effects');

  const primitivesData = primitivesRaw?.modes[0].variables.map((m) => {
    const [type, name, variant] = m.name.split('/');
    return {
      type: m.type,
      value: m.value,
      name: name,
      variant: variant,
    };
  });

  /**
   * Helper Functions
   */
  const findColor = (
    name: string,
    variant: string
  ): { type: string; value: any; name: string; variant: string } | null => {
    return (
      primitivesData?.find((p) => p.type === 'color' && p.name === name && p.variant === variant) ??
      null
    );
  };

  const findValue = (collection: any, name: string, append: string) => {
    const value = collection.modes[0].variables.find((f: any) => f.name === name).value;
    return `${value}${append}`;
  };

  const getColorScheme = (name: string) => {
    return [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((variant) => {
      const data = findColor(name, String(variant));
      return data?.value;
    });
  };

  const getHeadingConfig = (name: string) => {
    const data = typographyRaw?.modes[0].variables.find((v) => v.name == name) as any;
    return {
      fontSize: data?.value.fontSize + 'px',
      fontWeight: data?.value.fontWeight,
      lineHeight: data?.value.lineHeight + 'px',
    };
  };

  const getShadowConfig = (name: string) => {
    const data = effectsRaw?.modes[0].variables.find((v) => v.name == name) as any;
    const shadows = data.value.effects.filter((effect: any) => effect.type == 'DROP_SHADOW');
    const shadowsString = shadows.map(
      (shadow: any) =>
        `${shadow.offset.x}px ${shadow.offset.y}px ${shadow.radius}px ${shadow.spread}px rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a})`
    );

    return shadowsString.join(', ');
  };

  const colors = {
    brand: getColorScheme('Brand'),
    gray: getColorScheme('Gray (light mode)'),
    error: getColorScheme('Error'),
    warning: getColorScheme('Warning'),
    success: getColorScheme('Success'),
  } as any;

  let themeFile = `
import { MantineThemeOverride, defaultVariantColorsResolver } from '@mantine/core';
import { customComponents } from './theme-components';

export const theme: MantineThemeOverride = {
  // white: findColor('Base', 'white'),
  // black: findColor('Base', 'black'),
  colors: ${JSON.stringify(colors, null, 2)},
  primaryColor: 'brand',
  spacing: { // 3.Spacing
    none: "${findValue(primitivesRaw, 'Spacing/0 (0px)', 'px')}",
    xxs: "${findValue(primitivesRaw, 'Spacing/0․5 (2px)', 'px')}",
    xs: "${findValue(primitivesRaw, 'Spacing/1 (4px)', 'px')}",
    sm: "${findValue(primitivesRaw, 'Spacing/1․5 (6px)', 'px')}",
    md: "${findValue(primitivesRaw, 'Spacing/2 (8px)', 'px')}",
    lg: "${findValue(primitivesRaw, 'Spacing/3 (12px)', 'px')}",
    xl: "${findValue(primitivesRaw, 'Spacing/4 (16px)', 'px')}",
    xl2: "${findValue(primitivesRaw, 'Spacing/5 (20px)', 'px')}",
    xl3: "${findValue(primitivesRaw, 'Spacing/6 (24px)', 'px')}",
    xl4: "${findValue(primitivesRaw, 'Spacing/8 (32px)', 'px')}",
    xl5: "${findValue(primitivesRaw, 'Spacing/10 (40px)', 'px')}",
    xl6: "${findValue(primitivesRaw, 'Spacing/12 (48px)', 'px')}",
    xl7: "${findValue(primitivesRaw, 'Spacing/16 (64px)', 'px')}",
    xl8: "${findValue(primitivesRaw, 'Spacing/20 (80px)', 'px')}",
    xl9: "${findValue(primitivesRaw, 'Spacing/24 (96px)', 'px')}",
    xl10: "${findValue(primitivesRaw, 'Spacing/32 (128px)', 'px')}",
    xl11: "${findValue(primitivesRaw, 'Spacing/40 (160px)', 'px')}",
  },
  radius: { // 2.Radius
    none: "${findValue(radiusRaw, 'radius-none', 'px')}",
    xxs: "${findValue(radiusRaw, 'radius-xxs', 'px')}",
    xs: "${findValue(radiusRaw, 'radius-xs', 'px')}",
    sm: "${findValue(radiusRaw, 'radius-sm', 'px')}",
    md: "${findValue(radiusRaw, 'radius-md', 'px')}",
    lg: "${findValue(radiusRaw, 'radius-lg', 'px')}",
    xl: "${findValue(radiusRaw, 'radius-xl', 'px')}",
    xl2: "${findValue(radiusRaw, 'radius-2xl', 'px')}",
    xl3: "${findValue(radiusRaw, 'radius-3xl', 'px')}",
    xl4: "${findValue(radiusRaw, 'radius-4xl', 'px')}",
    full: "${findValue(radiusRaw, 'radius-full', 'px')}",
  },
  fontSizes: {
    xs: ${JSON.stringify(getHeadingConfig('Text xs/Regular').fontSize)},
    sm: ${JSON.stringify(getHeadingConfig('Text sm/Regular').fontSize)},
    md: ${JSON.stringify(getHeadingConfig('Text md/Regular').fontSize)},
    lg: ${JSON.stringify(getHeadingConfig('Text lg/Regular').fontSize)},
    xl: ${JSON.stringify(getHeadingConfig('Text xl/Regular').fontSize)},
  },
  shadows: {
    xs: "${getShadowConfig('Shadows/shadow-xs')}",
    sm: "${getShadowConfig('Shadows/shadow-sm')}",
    md: "${getShadowConfig('Shadows/shadow-md')}",
    lg: "${getShadowConfig('Shadows/shadow-lg')}",
    xl: "${getShadowConfig('Shadows/shadow-xl')}",
    xl2: "${getShadowConfig('Shadows/shadow-2xl')}",
    xl3: "${getShadowConfig('Shadows/shadow-3xl')}",
  },
  headings: {
    sizes: {
      h1: ${JSON.stringify(getHeadingConfig('Display 2xl/Regular'))},
      h2: ${JSON.stringify(getHeadingConfig('Display xl/Regular'))},
      h3: ${JSON.stringify(getHeadingConfig('Display lg/Regular'))},
      h4: ${JSON.stringify(getHeadingConfig('Display md/Regular'))},
      h5: ${JSON.stringify(getHeadingConfig('Display sm/Regular'))},
      h6: ${JSON.stringify(getHeadingConfig('Display xs/Regular'))},
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
          background: \`var(--mantine-color-\${input.color}-5)\`,
          hover: \`var(--mantine-color-\${input.color}-6)\`,
          border: \`1px solid var(--mantine-color-\${input.color}-5)\`,
          color: \`var(--mantine-color-white)\`,
        }
      }

      if (input.variant === 'secondary') {
        return {
          background: 'var(--mantine-color-white)',
          hover: \`var(--mantine-color-\${input.color}-1)\`,
          border: \`1px solid var(--mantine-color-\${input.color}-5)\`,
          color: \`var(--mantine-color-\${input.color}-5)\`,
        }
      }

      if (input.variant === 'tertiary') {
        return {
          background: 'var(--mantine-color-white)',
          hover: \`var(--mantine-color-\${input.color}-1)\`,
          border: \`0px solid var(--mantine-color-\${input.color}-5)\`,
          color: \`var(--mantine-color-\${input.color}-5)\`,
        }
      }
    }

    return defaultResolvedColors
  }
}
`;

  await writeFile('./src/theme.ts', themeFile);
}

generateTheme()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

import { theme, type ThemeConfig } from 'antd';

// Fools Flagon brand colors, matching the GitHub profile.
export const brand = {
  ink: '#120D0A',
  surface: '#1B1510',
  surfaceDeep: '#0B0907',
  line: '#2E2619',
  lineStrong: '#4A3D2A',
  cream: '#F1E6C8',
  creamMuted: '#D9CFB4',
  textMuted: '#BFB49A',
  textFaint: '#9A8F78',
  gold: '#C9A227',
  goldBright: '#E0C25A',
  red: '#9B2D2D',
};

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: brand.gold,
    colorInfo: brand.gold,
    colorBgBase: brand.ink,
    colorBgContainer: brand.surface,
    colorBgElevated: brand.surface,
    colorTextBase: brand.cream,
    colorBorder: brand.lineStrong,
    colorBorderSecondary: brand.line,
    colorLink: brand.gold,
    colorLinkHover: brand.goldBright,
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
    fontFamilyCode: "'IBM Plex Mono', ui-monospace, monospace",
    fontSize: 16,
    borderRadius: 10,
    controlHeight: 44,
  },
  components: {
    Button: { primaryColor: brand.ink, fontWeight: 600, controlHeightLG: 50 },
    Segmented: {
      itemSelectedBg: brand.gold,
      itemSelectedColor: brand.ink,
      trackBg: brand.surface,
      itemColor: brand.cream,
      itemHoverColor: brand.goldBright,
    },
    Tag: { defaultBg: 'transparent', defaultColor: brand.cream },
    Drawer: { colorBgElevated: brand.ink },
  },
};

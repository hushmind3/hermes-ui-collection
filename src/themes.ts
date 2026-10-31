import type { DesktopTheme } from '@hermes/plugin-sdk'

const tideTypography = {
  fontSans: 'Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", sans-serif',
  fontUrl: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '-0.01em'
}

const mintTypography = {
  fontSans: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", sans-serif',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '-0.01em'
}

const frostTypography = {
  fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Apple SD Gothic Neo", sans-serif',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '-0.015em'
}

export const TIDE: DesktopTheme = {
  name: 'tide',
  label: 'Tide',
  description: '밝은 회색 배경과 코발트 블루, 둥근 카드와 부드러운 그림자.',
  colors: {
    background: '#F4F5F8',
    foreground: '#1A1F29',
    card: '#FFFFFF',
    cardForeground: '#191F28',
    muted: '#F4F5F8',
    mutedForeground: '#4E5968',
    popover: '#FFFFFF',
    popoverForeground: '#191F28',
    primary: '#3182F6',
    primaryForeground: '#FFFFFF',
    secondary: '#E8F3FF',
    secondaryForeground: '#1B64DA',
    accent: '#E8F3FF',
    accentForeground: '#1B64DA',
    border: '#E5E8EB',
    input: '#E5E8EB',
    ring: '#3182F6',
    midground: '#2272EB',
    destructive: '#F04452',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#FBFCFD',
    sidebarBorder: '#E5E8EB',
    userBubble: '#E8F3FF',
    userBubbleBorder: '#D6E7FF'
  },
  darkColors: {
    background: '#101114',
    foreground: '#F2F4F6',
    card: '#191A1E',
    cardForeground: '#F2F4F6',
    muted: '#22242A',
    mutedForeground: '#9AA1AC',
    popover: '#191A1E',
    popoverForeground: '#F2F4F6',
    primary: '#4C9BFF',
    primaryForeground: '#0B1220',
    secondary: '#1E2A3A',
    secondaryForeground: '#BBD8FF',
    accent: '#1E2A3A',
    accentForeground: '#BBD8FF',
    border: '#2A2D34',
    input: '#2A2D34',
    ring: '#4C9BFF',
    midground: '#4C9BFF',
    destructive: '#FF6B6B',
    destructiveForeground: '#1A0B0B',
    sidebarBackground: '#141518',
    sidebarBorder: '#2A2D34',
    userBubble: '#1E2A3A',
    userBubbleBorder: '#2E4360'
  },
  typography: tideTypography,
  customCSS: `
:root[data-hermes-theme="tide"] {
  --radius: 16px;
  --ui-bg-chrome: #F4F5F8;
  --ui-bg-sidebar: #FFFFFF;
  --ui-bg-editor: #FFFFFF;
  --ui-bg-elevated: #FFFFFF;
  --ui-bg-card: #FFFFFF;
  --ui-bg-input: #FFFFFF;
  --ui-bg-primary: #FFFFFF;
  --ui-bg-secondary: #F4F5F8;
  --ui-bg-tertiary: #EDEFF2;
  --ui-bg-quaternary: #E8EBEF;
  --ui-bg-quinary: #E1E5EA;
  --ui-text-primary: #1A1F29;
  --ui-text-secondary: #4E5968;
  --ui-text-tertiary: #8B95A1;
  --ui-text-quaternary: #B0B8C1;
  --ui-stroke-primary: #D1D6DB;
  --ui-stroke-secondary: #E5E8EB;
  --ui-stroke-tertiary: #EDEFF2;
  --ui-stroke-quaternary: #F2F4F6;
  --ui-accent: #3182F6;
  --ui-success: #00B96B;
  --ui-control-hover-background: #F2F4F6;
  --chrome-action-hover: #F2F4F6;
}
:root[data-hermes-theme="tide"] [data-slot="button"] {
  border-radius: 12px;
  transition: transform .16s ease, box-shadow .16s ease, filter .16s ease, background-color .16s ease;
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, .22), rgba(255, 255, 255, 0) 58%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .30), 0 2px 6px rgba(49, 130, 246, .24);
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 8px 20px rgba(49, 130, 246, .30);
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="secondary"],
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="outline"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .65), 0 1px 2px rgba(25, 31, 40, .04);
}
:root[data-hermes-theme="tide"] [data-slot="card"] {
  border-radius: 20px;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #FBFCFD 100%);
  box-shadow:
    rgba(255, 255, 255, .96) 0 0 0 .75px inset,
    rgba(7, 25, 76, .04) 0 0 0 .75px,
    rgba(0, 0, 0, .08) 0 0 0 .5px,
    rgba(0, 0, 0, .04) 0 1px 1px;
  transition: transform .18s ease, box-shadow .18s ease;
}
:root[data-hermes-theme="tide"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow:
    rgba(255, 255, 255, .96) 0 0 0 .75px inset,
    rgba(7, 25, 76, .06) 0 0 0 .75px,
    rgba(0, 0, 0, .10) 0 0 0 .5px,
    rgba(0, 29, 58, .12) 0 8px 24px -6px;
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="tide"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="tide"] ::selection {
  background: rgba(49, 130, 246, .22);
}
`
}

export const MINT: DesktopTheme = {
  name: 'mint',
  label: 'Mint',
  description: '화이트와 민트 그린, 정보 중심의 깔끔한 대시보드.',
  colors: {
    background: '#FFFFFF',
    foreground: '#2E2E2E',
    card: '#FFFFFF',
    cardForeground: '#191F28',
    muted: '#F8F9FA',
    mutedForeground: '#555558',
    popover: '#FFFFFF',
    popoverForeground: '#191F28',
    primary: '#03C75A',
    primaryForeground: '#FFFFFF',
    secondary: '#E6F9EE',
    secondaryForeground: '#03A94D',
    accent: '#E6F9EE',
    accentForeground: '#03A94D',
    border: '#E5E8EB',
    input: '#E5E8EB',
    ring: '#03C75A',
    midground: '#03C75A',
    destructive: '#F04452',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#FFFFFF',
    sidebarBorder: '#E5E8EB',
    userBubble: '#E6F9EE',
    userBubbleBorder: '#C9EEDB'
  },
  darkColors: {
    background: '#111312',
    foreground: '#F2F4F6',
    card: '#181B19',
    cardForeground: '#F2F4F6',
    muted: '#202522',
    mutedForeground: '#9AA1AC',
    popover: '#181B19',
    popoverForeground: '#F2F4F6',
    primary: '#03C75A',
    primaryForeground: '#06110B',
    secondary: '#163024',
    secondaryForeground: '#A8EDC7',
    accent: '#163024',
    accentForeground: '#A8EDC7',
    border: '#29312C',
    input: '#29312C',
    ring: '#03C75A',
    midground: '#03C75A',
    destructive: '#FF6B6B',
    destructiveForeground: '#1A0B0B',
    sidebarBackground: '#141715',
    sidebarBorder: '#29312C',
    userBubble: '#163024',
    userBubbleBorder: '#24513A'
  },
  typography: mintTypography,
  customCSS: `
:root[data-hermes-theme="mint"] {
  --radius: 14px;
  --ui-bg-chrome: #FFFFFF;
  --ui-bg-sidebar: #FFFFFF;
  --ui-bg-editor: #FFFFFF;
  --ui-bg-elevated: #FFFFFF;
  --ui-bg-card: #FFFFFF;
  --ui-bg-input: #FFFFFF;
  --ui-bg-primary: #FFFFFF;
  --ui-bg-secondary: #F8F9FA;
  --ui-bg-tertiary: #F2F4F6;
  --ui-bg-quaternary: #EBEEF0;
  --ui-bg-quinary: #E4E8EB;
  --ui-text-primary: #2E2E2E;
  --ui-text-secondary: #555558;
  --ui-text-tertiary: #8A8D91;
  --ui-text-quaternary: #B0B3B8;
  --ui-stroke-primary: #DDE1E5;
  --ui-stroke-secondary: #E5E8EB;
  --ui-stroke-tertiary: #EEF1F3;
  --ui-stroke-quaternary: #F7F8F9;
  --ui-accent: #03C75A;
  --ui-success: #03C75A;
  --ui-control-hover-background: #F2F4F6;
  --chrome-action-hover: #F2F4F6;
}
:root[data-hermes-theme="mint"] [data-slot="button"] {
  border-radius: 12px;
  transition: transform .16s ease, box-shadow .16s ease, filter .16s ease;
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, #16D46B 0%, #03C75A 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .30), 0 6px 20px rgba(3, 199, 90, .24);
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 10px 28px rgba(3, 199, 90, .34);
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="mint"] [data-slot="card"] {
  border-radius: 16px;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #FAFEFB 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .7), 0 1px 2px rgba(25, 31, 40, .03), 0 12px 32px rgba(3, 199, 90, .06);
  transition: transform .18s ease, box-shadow .18s ease;
}
:root[data-hermes-theme="mint"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .8), 0 2px 4px rgba(25, 31, 40, .04), 0 18px 44px rgba(3, 199, 90, .10);
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="mint"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="mint"] ::selection {
  background: rgba(3, 199, 90, .22);
}
`
}

export const FROST: DesktopTheme = {
  name: 'frost',
  label: 'Frost',
  description: '반투명 유리 표면, 부드러운 그림자와 둥근 모서리.',
  colors: {
    background: '#F5F5F7',
    foreground: '#1D1D1F',
    card: '#FFFFFF',
    cardForeground: '#1D1D1F',
    muted: '#F5F5F7',
    mutedForeground: '#6E6E73',
    popover: '#FFFFFF',
    popoverForeground: '#1D1D1F',
    primary: '#0071E3',
    primaryForeground: '#FFFFFF',
    secondary: '#E8E8ED',
    secondaryForeground: '#1D1D1F',
    accent: '#E8E8ED',
    accentForeground: '#1D1D1F',
    border: '#D2D2D7',
    input: '#D2D2D7',
    ring: '#0071E3',
    midground: '#0071E3',
    destructive: '#FF3B30',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#FBFBFD',
    sidebarBorder: '#D2D2D7',
    userBubble: '#E8F0FE',
    userBubbleBorder: '#C7DBFF'
  },
  darkColors: {
    background: '#000000',
    foreground: '#F5F5F7',
    card: '#1C1C1E',
    cardForeground: '#F5F5F7',
    muted: '#2C2C2E',
    mutedForeground: '#A1A1A6',
    popover: '#1C1C1E',
    popoverForeground: '#F5F5F7',
    primary: '#0A84FF',
    primaryForeground: '#FFFFFF',
    secondary: '#2C2C2E',
    secondaryForeground: '#F5F5F7',
    accent: '#2C2C2E',
    accentForeground: '#F5F5F7',
    border: '#38383A',
    input: '#38383A',
    ring: '#0A84FF',
    midground: '#0A84FF',
    destructive: '#FF453A',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#0A0A0A',
    sidebarBorder: '#38383A',
    userBubble: '#0A2540',
    userBubbleBorder: '#1C3D5A'
  },
  typography: frostTypography,
  customCSS: `
:root[data-hermes-theme="frost"] {
  --radius: 22px;
  --ui-bg-chrome: #F5F5F7;
  --ui-bg-sidebar: #FBFBFD;
  --ui-bg-editor: #FFFFFF;
  --ui-bg-elevated: #FFFFFF;
  --ui-bg-card: #FFFFFF;
  --ui-bg-input: #FFFFFF;
  --ui-bg-primary: #FFFFFF;
  --ui-bg-secondary: #F5F5F7;
  --ui-bg-tertiary: #EDEDF0;
  --ui-bg-quaternary: #E8E8ED;
  --ui-bg-quinary: #E1E1E6;
  --ui-text-primary: #1D1D1F;
  --ui-text-secondary: #6E6E73;
  --ui-text-tertiary: #8E8E93;
  --ui-text-quaternary: #B0B0B5;
  --ui-stroke-primary: #D2D2D7;
  --ui-stroke-secondary: #D2D2D7;
  --ui-stroke-tertiary: #E5E5EA;
  --ui-stroke-quaternary: #F2F2F7;
  --ui-accent: #0071E3;
  --ui-success: #34C759;
  --ui-control-hover-background: #F2F2F7;
  --chrome-action-hover: #F2F2F7;
}
:root[data-hermes-theme="frost"] [data-slot="card"] {
  background: color-mix(in srgb, var(--card) 74%, transparent);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  backdrop-filter: blur(24px) saturate(180%);
  border-radius: 22px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, .08), inset 0 1px 0 rgba(255, 255, 255, .55);
  transition: transform .2s ease, box-shadow .2s ease;
}
:root[data-hermes-theme="frost"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, .12), inset 0 1px 0 rgba(255, 255, 255, .65);
}
:root[data-hermes-theme="frost"] [data-slot="button"] {
  border-radius: 999px;
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, #2B9BFF 0%, #0071E3 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35), 0 6px 18px rgba(0, 113, 227, .28);
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .42), 0 10px 28px rgba(0, 113, 227, .38);
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="frost"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="frost"] ::selection {
  background: rgba(0, 113, 227, .22);
}
`
}

export const OUR_THEMES: DesktopTheme[] = [TIDE, MINT, FROST]

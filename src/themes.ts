import type { DesktopTheme } from '@hermes/plugin-sdk'

import { buildChrome } from './chrome'

/* Three typefaces, three personalities. Each theme loads a body face and a
   display face in one stylesheet request. */
const tideTypography = {
  fontSans: '"SUIT Variable", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", sans-serif',
  fontUrl: 'https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '-0.01em'
}

const mintTypography = {
  fontSans: '"IBM Plex Sans KR", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", sans-serif',
  fontUrl:
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '0em'
}

const frostTypography = {
  fontSans: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", sans-serif',
  fontUrl:
    'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter+Tight:wght@200;300;800&display=swap',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  baseSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '0.002em'
}

/* ── Tide ───────────────────────────────────────────────────────────────── */

const tideChrome = buildChrome(
  {
    name: 'tide',
    accent: '#3182F6',
    accentDeep: '#1B64DA',
    accentSoft: '#E8F2FF',
    page: '#F7F8FA',
    side: '#FFFFFF',
    line: '#E7EAEE',
    ink: '#191F28',
    text2: '#4E5968',
    text3: '#8B95A1',
    hover: '#F2F4F6',
    chip: '#EDF2F7',
    activeBg: '#3182F6',
    activeInk: '#FFFFFF',
    activeShadow: '0 4px 14px -3px rgba(49, 130, 246, .55)',
    tabActiveBg: '#FFFFFF',
    tabActiveInk: '#1B64DA',
    tabShadow: '0 1px 2px rgba(20, 50, 90, .14), 0 0 0 1px rgba(20, 50, 90, .04)',
    tabStrip: '#F2F4F6',
    itemRadius: 9,
    cardRadius: 20,
    btnRadius: 12,
    inputRadius: 12,
    composerRadius: 24,
    composerShadow: '0 8px 24px -14px rgba(20, 50, 90, .20), 0 1px 2px rgba(20, 50, 90, .05)',
    glow: 'rgba(49, 130, 246, .04)',
    displayFamily: 'SUIT Variable',
    displayWeight: 800,
    displayTracking: '-0.04em',
    wordmarkGradient: 'linear-gradient(112deg, #1B64DA 0%, #4C9BFF 45%, #0A2A66 100%)',
    wordmarkShadow: '0 14px 34px rgba(49, 130, 246, .28)',
    extra: R => `
${R} [data-slot="pane-tab"] { letter-spacing: -0.01em !important; }
`,
    lightExtra: R => `
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"] {
  border-radius: 999px !important;
  background-image: linear-gradient(180deg, #5AA2FF 0%, #3182F6 58%, #2272EB 100%) !important;
  color: #fff !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 6px 18px -5px rgba(49, 130, 246, .60) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"]:hover {
  background-image: linear-gradient(180deg, #6DAEFF 0%, #3B8CF8 58%, #2A7AEF 100%) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .44), 0 12px 28px -6px rgba(49, 130, 246, .66) !important;
  transform: translateY(-1px);
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"],
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"] {
  background: #fff !important;
  border: 1px solid var(--t-line) !important;
  box-shadow: 0 1px 2px rgba(20, 50, 90, .06) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"]:hover,
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"]:hover {
  border-color: #BFD4F2 !important;
  background: #F7FAFF !important;
}
`,
    darkExtra: R => `
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"] {
  border-radius: 999px !important;
  background-image: linear-gradient(180deg, #5FA9FF 0%, #3182F6 100%) !important;
  color: #06101E !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .28), 0 6px 20px -6px rgba(49, 130, 246, .70) !important;
}
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"]:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 12px 30px -8px rgba(49, 130, 246, .80) !important;
  transform: translateY(-1px);
}
`
  },
  {
    accent: '#4C9BFF',
    accentDeep: '#8CC2FF',
    accentSoft: 'rgba(76, 155, 255, .16)',
    page: '#0F1115',
    side: '#151A22',
    line: '#262E3A',
    ink: '#F2F4F6',
    text2: '#B6BEC9',
    text3: '#8A94A2',
    hover: '#1D2430',
    chip: '#1B2532',
    activeBg: '#2E6FD6',
    activeInk: '#FFFFFF',
    activeShadow: '0 4px 16px -4px rgba(49, 130, 246, .55)',
    tabActiveBg: '#1D2530',
    tabActiveInk: '#7FB4FF',
    tabShadow: 'inset 0 0 0 1px #2A3542',
    tabStrip: '#12161C',
    composerShadow: '0 18px 50px -16px rgba(0, 0, 0, .75), 0 1px 2px rgba(0, 0, 0, .5)',
    glow: 'rgba(49, 130, 246, .12)'
  }
)

export const TIDE: DesktopTheme = {
  name: 'tide',
  label: 'Tide',
  description: '깨끗한 화이트와 코발트 블루. 사이드바·탭·카드가 또렷한 기본 테마.',
  colors: {
    background: '#F7F8FA',
    foreground: '#191F28',
    card: '#FFFFFF',
    cardForeground: '#191F28',
    muted: '#F2F4F6',
    mutedForeground: '#4E5968',
    popover: '#FFFFFF',
    popoverForeground: '#191F28',
    primary: '#3182F6',
    primaryForeground: '#FFFFFF',
    secondary: '#E8F3FF',
    secondaryForeground: '#1B64DA',
    accent: '#E8F3FF',
    accentForeground: '#1B64DA',
    border: '#E7EAEE',
    input: '#E7EAEE',
    ring: '#3182F6',
    midground: '#2272EB',
    destructive: '#F04452',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#FFFFFF',
    sidebarBorder: '#E7EAEE',
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
    sidebarBackground: '#151A22',
    sidebarBorder: '#262E3A',
    userBubble: '#1E2A3A',
    userBubbleBorder: '#2E4360'
  },
  typography: tideTypography,
  customCSS: tideChrome
}

/* ── Mint ───────────────────────────────────────────────────────────────── */

const mintChrome = buildChrome(
  {
    name: 'mint',
    accent: '#03C75A',
    accentDeep: '#04783B',
    accentSoft: '#E4F8ED',
    page: '#FBFDFC',
    side: '#F3FAF6',
    line: '#DCEFE3',
    ink: '#15231A',
    text2: '#4B5A50',
    text3: '#85938A',
    hover: '#EAF7EF',
    chip: '#E3F5EA',
    activeBg: '#FFFFFF',
    activeInk: '#04783B',
    activeShadow: 'inset 3px 0 0 #03C75A, 0 1px 3px rgba(4, 80, 32, .12)',
    tabActiveBg: 'transparent',
    tabActiveInk: '#03A94D',
    tabShadow: 'inset 0 -2px 0 #03C75A',
    tabStrip: 'transparent',
    itemRadius: 6,
    cardRadius: 12,
    btnRadius: 7,
    inputRadius: 6,
    composerRadius: 10,
    composerShadow: '0 1px 0 rgba(255, 255, 255, .6) inset, 0 8px 24px -14px rgba(4, 100, 50, .35)',
    glow: 'rgba(3, 199, 90, .05)',
    displayFamily: 'Manrope',
    displayWeight: 800,
    displayTracking: '-0.03em',
    wordmarkGradient: 'linear-gradient(112deg, #04783B 0%, #03C75A 50%, #0A5C34 100%)',
    wordmarkShadow: '0 14px 34px rgba(3, 199, 90, .24)',
    extra: R => `
${R} [data-slot="pane-tab"] {
  height: 28px !important;
  margin: 0 2px !important;
  padding-inline: 8px !important;
  border-radius: 0 !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  letter-spacing: .12em !important;
  text-transform: uppercase !important;
}
${R} [data-slot="pane-tab"][data-active="true"] {
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: inset 0 -2px 0 var(--t-accent) !important;
}
${R} [data-slot="pane-tab"][data-active="false"] { color: var(--t-text-3) !important; }
${R} [data-slot="sidebar-menu-item"] > button > .codicon { border-radius: 4px !important; }
`,
    lightExtra: R => `
${R}[data-hermes-mode="light"] [data-tree-group]:not(:has([data-slot="sidebar"])) {
  background-image: radial-gradient(90% 55% at 50% 0%, rgba(3, 199, 90, .06), transparent 62%) !important;
  background-repeat: no-repeat !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"] {
  background-image: none !important;
  background-color: #03C75A !important;
  color: #fff !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .26), 0 2px 0 #039F48 !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"]:hover {
  background-color: #05B553 !important;
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .3), 0 3px 0 #039F48, 0 8px 18px -6px rgba(3, 199, 90, .45) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(1px);
  box-shadow: inset 0 1px 2px rgba(0, 60, 25, .25) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"],
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"] {
  background: #F3FBF6 !important;
  border: 1px solid #BCE6CC !important;
  color: #04783B !important;
  box-shadow: none !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"]:hover,
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"]:hover {
  background: #E4F8ED !important;
  border-color: #8EDBAE !important;
}
${R}[data-hermes-mode="light"] [data-slot="composer-surface"] {
  box-shadow: 0 0 0 1px rgba(3, 199, 90, .10), 0 10px 30px -18px rgba(4, 100, 50, .45) !important;
}
`,
    darkExtra: R => `
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"] {
  background-image: none !important;
  background-color: #03C75A !important;
  color: #04140B !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .24), 0 2px 0 #029B46 !important;
}
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"]:hover {
  background-color: #0BD468 !important;
  transform: translateY(-1px);
}
`
  },
  {
    accent: '#2BD97A',
    accentDeep: '#7BE8AC',
    accentSoft: 'rgba(3, 199, 90, .16)',
    page: '#0E1411',
    side: '#141C17',
    line: '#26352C',
    ink: '#EDF7F0',
    text2: '#AFC2B5',
    text3: '#7F9387',
    hover: '#1B2820',
    chip: '#1A2C21',
    activeBg: '#1B2C21',
    activeInk: '#6EE7A8',
    activeShadow: 'inset 3px 0 0 #03C75A, 0 1px 0 rgba(255, 255, 255, .04)',
    tabActiveBg: 'transparent',
    tabActiveInk: '#4ADE80',
    tabShadow: 'inset 0 -2px 0 #03C75A',
    tabStrip: 'transparent',
    composerShadow: '0 1px 0 rgba(255, 255, 255, .04) inset, 0 14px 36px -18px rgba(0, 0, 0, .8)',
    glow: 'rgba(3, 199, 90, .10)'
  }
)

export const MINT: DesktopTheme = {
  name: 'mint',
  label: 'Mint',
  description: '화이트 바탕에 민트 그린 포인트. 차분하고 정보 중심인 테마.',
  colors: {
    background: '#FBFDFC',
    foreground: '#15231A',
    card: '#FFFFFF',
    cardForeground: '#15231A',
    muted: '#F4FAF6',
    mutedForeground: '#4B5A50',
    popover: '#FFFFFF',
    popoverForeground: '#15231A',
    primary: '#03C75A',
    primaryForeground: '#FFFFFF',
    secondary: '#E6F9EE',
    secondaryForeground: '#04783B',
    accent: '#E6F9EE',
    accentForeground: '#04783B',
    border: '#DCEFE3',
    input: '#DCEFE3',
    ring: '#03C75A',
    midground: '#03C75A',
    destructive: '#F04452',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#F3FAF6',
    sidebarBorder: '#DCEFE3',
    userBubble: '#E4F8ED',
    userBubbleBorder: '#BFE9CF'
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
    sidebarBackground: '#141C17',
    sidebarBorder: '#26352C',
    userBubble: '#163024',
    userBubbleBorder: '#24513A'
  },
  typography: mintTypography,
  customCSS: mintChrome
}

/* ── Frost ──────────────────────────────────────────────────────────────── */

const frostChrome = buildChrome(
  {
    name: 'frost',
    accent: '#0071E3',
    accentDeep: '#0058B3',
    accentSoft: '#E6F0FF',
    page: '#F5F6F9',
    side: '#F4F6FA',
    line: '#DFE3EA',
    ink: '#1D1D1F',
    text2: '#5F5F66',
    text3: '#8E8E93',
    hover: 'rgba(255, 255, 255, .8)',
    chip: '#E9EDF5',
    activeBg: '#FFFFFF',
    activeInk: '#0071E3',
    activeShadow: '0 2px 10px -2px rgba(20, 40, 80, .16), inset 0 0 0 1px rgba(255, 255, 255, .9)',
    tabActiveBg: 'rgba(255, 255, 255, .92)',
    tabActiveInk: '#1D1D1F',
    tabShadow: '0 1px 4px rgba(20, 40, 80, .14)',
    tabStrip: 'transparent',
    itemRadius: 12,
    cardRadius: 24,
    btnRadius: 12,
    inputRadius: 14,
    composerRadius: 26,
    composerShadow: '0 18px 50px -18px rgba(20, 40, 80, .28), 0 1px 2px rgba(20, 40, 80, .06)',
    glow: 'rgba(0, 113, 227, .06)',
    displayFamily: 'Inter Tight',
    displayWeight: 200,
    displayTracking: '0.035em',
    wordmarkGradient: 'linear-gradient(104deg, #0A84FF 0%, #74B9FF 42%, #1D1D1F 100%)',
    wordmarkShadow: '0 16px 40px rgba(0, 113, 227, .22)',
    extra: R => `
${R} [data-slot="pane-tab"] { border-radius: 999px !important; }
${R} [data-slot="pane-tab"][data-active="true"] { border-radius: 999px !important; }
${R} [data-slot="sidebar"] { backdrop-filter: blur(26px) saturate(1.25); }
${R} [data-slot="composer-surface"] { backdrop-filter: blur(26px) saturate(1.35); }
`,
    lightExtra: R => `
${R}[data-hermes-mode="light"] [data-slot="composer-root"] {
  --composer-fill: rgba(255, 255, 255, .72) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"] {
  border-radius: 999px !important;
  background-image: linear-gradient(180deg, #3395FF 0%, #0071E3 100%) !important;
  color: #fff !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .40), 0 8px 24px -8px rgba(0, 113, 227, .60) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="default"]:hover {
  background-image: linear-gradient(180deg, #4AA4FF 0%, #0A7DF0 100%) !important;
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .5), 0 14px 32px -8px rgba(0, 113, 227, .66) !important;
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"],
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"] {
  background: rgba(255, 255, 255, .66) !important;
  border: 1px solid rgba(255, 255, 255, .92) !important;
  box-shadow: 0 1px 3px rgba(20, 40, 80, .08) !important;
  backdrop-filter: blur(10px);
}
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="outline"]:hover,
${R}[data-hermes-mode="light"] [data-slot="button"][data-variant="secondary"]:hover {
  background: rgba(255, 255, 255, .92) !important;
}
`,
    darkExtra: R => `
${R}[data-hermes-mode="dark"] [data-slot="composer-root"] {
  --composer-fill: rgba(26, 30, 39, .72) !important;
}
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"] {
  border-radius: 999px !important;
  background-image: linear-gradient(180deg, #3395FF 0%, #0071E3 100%) !important;
  color: #fff !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .30), 0 8px 26px -8px rgba(0, 113, 227, .70) !important;
}
${R}[data-hermes-mode="dark"] [data-slot="button"][data-variant="default"]:hover {
  transform: translateY(-1px);
}
`
  },
  {
    accent: '#4DA3FF',
    accentDeep: '#9CCBFF',
    accentSoft: 'rgba(10, 132, 255, .18)',
    page: '#0D0F14',
    side: '#14171D',
    line: '#272B34',
    ink: '#F5F5F7',
    text2: '#B9BEC8',
    text3: '#8B919C',
    hover: '#1B1F27',
    chip: '#1D222B',
    activeBg: '#232936',
    activeInk: '#7DB8FF',
    activeShadow: '0 2px 12px rgba(0, 0, 0, .40), inset 0 1px 0 rgba(255, 255, 255, .08)',
    tabActiveBg: '#232936',
    tabActiveInk: '#F5F5F7',
    tabShadow: '0 2px 8px rgba(0, 0, 0, .35)',
    tabStrip: 'transparent',
    composerShadow: '0 24px 70px -20px rgba(0, 0, 0, .85), 0 1px 2px rgba(0, 0, 0, .6)',
    glow: 'rgba(0, 113, 227, .14)'
  }
)

export const FROST: DesktopTheme = {
  name: 'frost',
  label: 'Frost',
  description: '반투명 유리 표면과 가벼운 서체. 부드럽고 조용한 테마.',
  colors: {
    background: '#F5F6F9',
    foreground: '#1D1D1F',
    card: '#FFFFFF',
    cardForeground: '#1D1D1F',
    muted: '#F5F6F9',
    mutedForeground: '#6E6E73',
    popover: '#FFFFFF',
    popoverForeground: '#1D1D1F',
    primary: '#0071E3',
    primaryForeground: '#FFFFFF',
    secondary: '#E8E8ED',
    secondaryForeground: '#1D1D1F',
    accent: '#E8E8ED',
    accentForeground: '#1D1D1F',
    border: '#DFE3EA',
    input: '#DFE3EA',
    ring: '#0071E3',
    midground: '#0071E3',
    destructive: '#FF3B30',
    destructiveForeground: '#FFFFFF',
    sidebarBackground: '#F4F6FA',
    sidebarBorder: '#DFE3EA',
    userBubble: '#E6F0FF',
    userBubbleBorder: '#CFE1FF'
  },
  darkColors: {
    background: '#101114',
    foreground: '#F5F5F7',
    card: '#1A1D24',
    cardForeground: '#F5F5F7',
    muted: '#1D2027',
    mutedForeground: '#A1A6B0',
    popover: '#1A1D24',
    popoverForeground: '#F5F5F7',
    primary: '#0A84FF',
    primaryForeground: '#FFFFFF',
    secondary: '#232833',
    secondaryForeground: '#CFE1FF',
    accent: '#232833',
    accentForeground: '#CFE1FF',
    border: '#2A2F3A',
    input: '#2A2F3A',
    ring: '#0A84FF',
    midground: '#0A84FF',
    destructive: '#FF453A',
    destructiveForeground: '#1A0B0B',
    sidebarBackground: '#14171D',
    sidebarBorder: '#272B34',
    userBubble: '#17263F',
    userBubbleBorder: '#24406B'
  },
  typography: frostTypography,
  customCSS: frostChrome
}

export const OUR_THEMES: DesktopTheme[] = [TIDE, MINT, FROST]

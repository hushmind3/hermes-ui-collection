/**
 * Whole-window chrome for the three themes.
 *
 * Every rule here targets an app-owned hook — `data-slot`, `data-tree-*`,
 * `data-sidebar`, `data-role` — or a theme token. Tailwind classes are never
 * matched, so an app update that rearranges utility classes does not take the
 * skin with it. Colours come from `--t-*` variables set per light/dark mode.
 */

export interface ChromeTheme {
  name: string
  /** Solid accent used for active rows, focus rings and selection. */
  accent: string
  accentDeep: string
  accentSoft: string
  /** Page + editor surface. */
  page: string
  /** Sidebar fill, one step off the page. */
  side: string
  line: string
  ink: string
  text2: string
  text3: string
  hover: string
  chip: string
  /** Active sidebar row. */
  activeBg: string
  activeInk: string
  activeShadow: string
  /** Pane tab. */
  tabActiveBg: string
  tabActiveInk: string
  tabShadow: string
  tabStrip: string
  itemRadius: number
  cardRadius: number
  btnRadius: number
  inputRadius: number
  composerRadius: number
  composerShadow: string
  /** Soft wash behind the workspace. */
  glow: string
  /** Wordmark type + paint. */
  displayFamily: string
  displayWeight: number
  displayTracking: string
  wordmarkGradient: string
  wordmarkShadow: string
  /** Shape rules that apply in both modes (tab geometry, lettering, …). */
  extra: (R: string) => string
  /** Mode-specific colour extras (button gradients, …). */
  lightExtra: (R: string) => string
  darkExtra: (R: string) => string
}

export interface ChromeDark {
  accent: string
  accentDeep: string
  accentSoft: string
  page: string
  side: string
  line: string
  ink: string
  text2: string
  text3: string
  hover: string
  chip: string
  activeBg: string
  activeInk: string
  activeShadow: string
  tabActiveBg: string
  tabActiveInk: string
  tabShadow: string
  tabStrip: string
  composerShadow: string
  glow: string
}

const lightTokens = (t: ChromeTheme) => `
  --t-accent: ${t.accent};
  --t-accent-deep: ${t.accentDeep};
  --t-accent-soft: ${t.accentSoft};
  --t-page: ${t.page};
  --t-side: ${t.side};
  --t-line: ${t.line};
  --t-ink: ${t.ink};
  --t-text-2: ${t.text2};
  --t-text-3: ${t.text3};
  --t-hover: ${t.hover};
  --t-chip: ${t.chip};
  --t-active-bg: ${t.activeBg};
  --t-active-ink: ${t.activeInk};
  --t-active-shadow: ${t.activeShadow};
  --t-tab-bg: ${t.tabActiveBg};
  --t-tab-ink: ${t.tabActiveInk};
  --t-tab-shadow: ${t.tabShadow};
  --t-tabstrip: ${t.tabStrip};
  --t-item-radius: ${t.itemRadius}px;
  --t-card-radius: ${t.cardRadius}px;
  --t-btn-radius: ${t.btnRadius}px;
  --t-input-radius: ${t.inputRadius}px;
  --t-composer-radius: ${t.composerRadius}px;
  --t-composer-shadow: ${t.composerShadow};
  --t-glow: ${t.glow};
  --radius: ${t.cardRadius}px;`

const darkTokens = (d: ChromeDark) => `
  --t-accent: ${d.accent};
  --t-accent-deep: ${d.accentDeep};
  --t-accent-soft: ${d.accentSoft};
  --t-page: ${d.page};
  --t-side: ${d.side};
  --t-line: ${d.line};
  --t-ink: ${d.ink};
  --t-text-2: ${d.text2};
  --t-text-3: ${d.text3};
  --t-hover: ${d.hover};
  --t-chip: ${d.chip};
  --t-active-bg: ${d.activeBg};
  --t-active-ink: ${d.activeInk};
  --t-active-shadow: ${d.activeShadow};
  --t-tab-bg: ${d.tabActiveBg};
  --t-tab-ink: ${d.tabActiveInk};
  --t-tab-shadow: ${d.tabShadow};
  --t-tabstrip: ${d.tabStrip};
  --t-composer-shadow: ${d.composerShadow};
  --t-glow: ${d.glow};`

const uiLight = (t: ChromeTheme) => `
  --ui-bg-chrome: ${t.page};
  --ui-bg-sidebar: ${t.side};
  --ui-bg-editor: ${t.page};
  --ui-bg-elevated: #FFFFFF;
  --ui-bg-card: #FFFFFF;
  --ui-bg-input: #FFFFFF;
  --ui-bg-primary: #FFFFFF;
  --ui-bg-secondary: ${t.hover};
  --ui-bg-tertiary: color-mix(in srgb, ${t.hover} 78%, ${t.line});
  --ui-bg-quaternary: color-mix(in srgb, ${t.hover} 60%, ${t.line});
  --ui-bg-quinary: color-mix(in srgb, ${t.hover} 46%, ${t.line});
  --ui-text-primary: ${t.ink};
  --ui-text-secondary: ${t.text2};
  --ui-text-tertiary: ${t.text3};
  --ui-text-quaternary: color-mix(in srgb, ${t.text3} 68%, transparent);
  --ui-stroke-primary: ${t.line};
  --ui-stroke-secondary: color-mix(in srgb, ${t.line} 78%, transparent);
  --ui-stroke-tertiary: color-mix(in srgb, ${t.line} 58%, transparent);
  --ui-stroke-quaternary: color-mix(in srgb, ${t.line} 40%, transparent);
  --ui-accent: ${t.accent};
  --ui-success: ${t.accent};
  --ui-row-hover-background: ${t.hover};
  --ui-control-hover-background: ${t.hover};
  --ui-control-active-background: color-mix(in srgb, ${t.accent} 14%, ${t.hover});
  --chrome-action-hover: ${t.hover};
  --sidebar-edge-border: ${t.line};`

/** Build the full stylesheet for one theme. */
export function buildChrome(t: ChromeTheme, d: ChromeDark): string {
  const R = `:root[data-hermes-theme^="${t.name}"]`

  return `${R} {${lightTokens(t)} }
${R}[data-hermes-mode="light"] {${uiLight(t)} }
${R}[data-hermes-mode="dark"] {${darkTokens(d)} }

/* ── Window chrome ─────────────────────────────────────────────────────── */

${R} [data-panel-header] {
  background: var(--t-side) !important;
  border-bottom: 1px solid var(--t-line) !important;
}
${R} [data-window-drag-handle] { background: transparent !important; }
${R} [data-titlebar-cluster] button { border-radius: 8px !important; }
${R} [data-titlebar-cluster] button:hover { background: var(--t-hover) !important; }
${R} [data-titlebar-cluster] .codicon { color: var(--t-text-2) !important; }
${R} [data-titlebar-cluster] button:hover .codicon { color: var(--t-ink) !important; }
${R} [data-tree-group]:not(:has([data-slot="sidebar"])) {
  background-color: var(--t-page) !important;
  background-image: radial-gradient(110% 70% at 50% 0%, var(--t-glow) 0%, transparent 62%) !important;
  background-repeat: no-repeat !important;
}

/* ── Sidebar ───────────────────────────────────────────────────────────── */

${R} [data-slot="sidebar"] {
  background: var(--t-side) !important;
  border-right: 1px solid var(--t-line) !important;
}
${R} [data-slot="sidebar"] [data-slot="sidebar-content"] { background: transparent !important; }
${R} [data-slot="sidebar-menu-item"] > button {
  height: 30px !important;
  border-radius: var(--t-item-radius) !important;
  font-weight: 600 !important;
  color: var(--t-text-2) !important;
}
${R} [data-slot="sidebar-menu-item"] > button:hover {
  background: var(--t-hover) !important;
  color: var(--t-ink) !important;
}
/* The current page is painted with a Tailwind utility that swaps the class
   name (no data attribute), so both that marker and data-active are honoured. */
${R} [data-slot="sidebar-menu-item"] > button[data-active="true"],
${R} [data-slot="sidebar-menu-item"] > button[class*="bg-(--ui-control-active-background)"] {
  background: var(--t-active-bg) !important;
  color: var(--t-active-ink) !important;
  border-color: transparent !important;
  box-shadow: var(--t-active-shadow) !important;
}
${R} [data-slot="sidebar-menu-item"] > button[data-active="true"]:hover,
${R} [data-slot="sidebar-menu-item"] > button[class*="bg-(--ui-control-active-background)"]:hover {
  background: var(--t-active-bg) !important;
  color: var(--t-active-ink) !important;
}

/* Icons get a tinted tile, so the rail reads as a designed icon set rather
   than a row of bare glyphs. The tile is the size of the row, not the glyph. */
${R} [data-slot="sidebar-menu-item"] > button > .codicon {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: none !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: calc(var(--t-item-radius) * 0.7) !important;
  background: var(--t-chip) !important;
  color: var(--t-accent) !important;
  font-size: 14px !important;
}
${R} [data-slot="sidebar-menu-item"] > button[data-active="true"] > .codicon,
${R} [data-slot="sidebar-menu-item"] > button[class*="bg-(--ui-control-active-background)"] > .codicon {
  background: color-mix(in srgb, var(--t-active-ink) 20%, transparent) !important;
  color: var(--t-active-ink) !important;
}

${R} [data-slot="sidebar-input"],
${R} [data-slot="sidebar"] input[type="search"] {
  border-radius: calc(var(--t-item-radius) + 2px) !important;
  background: color-mix(in srgb, var(--t-hover) 70%, transparent) !important;
  border: 1px solid transparent !important;
  box-shadow: none !important;
}
${R} [data-slot="sidebar-input"]:focus-within,
${R} [data-slot="sidebar"] input[type="search"]:focus {
  border-color: var(--t-accent) !important;
  background: var(--t-side) !important;
}

/* ── Tabs ──────────────────────────────────────────────────────────────── */

${R} [data-zone-tabstrip] {
  background: var(--t-tabstrip) !important;
  border-bottom: 0 !important;
}
${R} [data-slot="pane-tab"] {
  height: 22px !important;
  margin: 3px 1px !important;
  padding-inline: 9px !important;
  border: 0 !important;
  border-radius: 7px !important;
  background: transparent !important;
  box-shadow: none !important;
  color: var(--t-text-3) !important;
  font-weight: 600 !important;
}
${R} [data-slot="pane-tab"]::after { display: none !important; }
${R} [data-slot="pane-tab"][data-active="true"] {
  background: var(--t-tab-bg) !important;
  color: var(--t-tab-ink) !important;
  box-shadow: var(--t-tab-shadow) !important;
}

/* ── Buttons, chips, fields ────────────────────────────────────────────── */

${R} [data-slot="button"] {
  border-radius: var(--t-btn-radius) !important;
  font-weight: 600 !important;
  transition: transform .16s ease, box-shadow .16s ease, filter .16s ease, background-color .16s ease !important;
}
${R} [data-slot="button"]:active { transform: translateY(1px) scale(.995); }
${R} [data-slot="kbd"] {
  border-radius: calc(var(--t-btn-radius) * .55) !important;
  border: 1px solid var(--t-line) !important;
  background: var(--t-side) !important;
  color: var(--t-text-2) !important;
  box-shadow: 0 1px 0 var(--t-line);
}
${R} [data-slot="badge"] {
  border-radius: 999px !important;
  border-color: transparent !important;
  background: var(--t-accent-soft) !important;
  color: var(--t-accent-deep) !important;
}
${R} input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),
${R} textarea,
${R} select {
  border-radius: var(--t-input-radius) !important;
}
${R} input:focus,
${R} textarea:focus {
  outline-color: var(--t-accent) !important;
}

/* ── Composer ──────────────────────────────────────────────────────────── */

${R} [data-slot="composer-root"] {
  --composer-fill: ${t.page};
}
${R} [data-slot="composer-surface"] {
  border-radius: var(--t-composer-radius) !important;
  border: 1px solid var(--t-line) !important;
  background: transparent !important;
  box-shadow: var(--t-composer-shadow) !important;
  transition: border-color .18s ease, box-shadow .18s ease !important;
}
${R} [data-slot="composer-root"]:focus-within [data-slot="composer-surface"] {
  border-color: var(--t-accent) !important;
  box-shadow: 0 0 0 4px var(--t-accent-soft), var(--t-composer-shadow) !important;
}
${R} [data-slot="composer-surface"] button {
  border-radius: calc(var(--t-composer-radius) * .55) !important;
}

/* ── Transcript ────────────────────────────────────────────────────────── */

${R} [data-role="user"] [class*="composer-human-message"] {
  border-radius: calc(var(--t-card-radius) * .8) !important;
  border-color: color-mix(in srgb, var(--t-accent) 24%, var(--t-line)) !important;
  background: color-mix(in srgb, var(--t-accent) 9%, var(--t-page)) !important;
  box-shadow: 0 1px 2px rgba(16, 30, 50, .05) !important;
}
${R} [data-role="assistant"] a {
  color: var(--t-accent-deep) !important;
  text-underline-offset: 2px;
  text-decoration-color: color-mix(in srgb, var(--t-accent) 45%, transparent) !important;
}
${R} [data-role="assistant"] :not(pre) > code {
  border-radius: 5px !important;
  background: var(--t-accent-soft) !important;
  color: var(--t-accent-deep) !important;
  padding: 1px 4px !important;
}
${R} [data-role="assistant"] pre {
  border-radius: calc(var(--t-card-radius) * .6) !important;
  border: 1px solid var(--t-line) !important;
  background: color-mix(in srgb, var(--t-page) 72%, var(--t-ink) 3%) !important;
}

/* ── Empty chat: the wordmark is the loudest thing on screen ───────────── */

${R} [data-slot="aui_intro"] .wordmark {
  font-family: '${t.displayFamily}', var(--font-sans) !important;
  font-weight: ${t.displayWeight} !important;
  letter-spacing: ${t.displayTracking} !important;
  mix-blend-mode: normal !important;
  filter: drop-shadow(${t.wordmarkShadow});
}
/* The app's fit-text trick sizes the visible span from a container query. A
   different display face changes the advance widths it was tuned for, which
   clipped the last letter; size the line from the container instead. */
${R} [data-slot="aui_intro"] .wordmark > span:not([aria-hidden]) > span {
  display: inline-block !important;
  inline-size: auto !important;
  font-size: clamp(var(--fit-min), 9.6cqi, 220px) !important;
  line-height: .92 !important;
  color: transparent !important;
  background: ${t.wordmarkGradient} !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}
${R} [data-slot="aui_intro"] p:not(.wordmark) {
  font-family: var(--font-sans) !important;
  font-size: .8125rem !important;
  line-height: 1.7 !important;
  letter-spacing: .005em !important;
  color: var(--t-text-2) !important;
  max-width: 46ch !important;
  margin-inline: auto !important;
}

/* ── Status bar, scrollbars, selection ─────────────────────────────────── */

${R} [data-slot="statusbar"] {
  background: var(--t-side) !important;
  border-top: 1px solid var(--t-line) !important;
  color: var(--t-text-3) !important;
  font-size: 10px !important;
  letter-spacing: .03em !important;
}
${R} [data-slot="statusbar"] button:hover {
  background: var(--t-hover) !important;
  color: var(--t-ink) !important;
}
${R} ::-webkit-scrollbar { width: 8px; height: 8px; }
${R} ::-webkit-scrollbar-track { background: transparent; }
${R} ::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--t-accent) 26%, var(--t-line));
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 999px;
}
${R} ::-webkit-scrollbar-thumb:hover { background-color: var(--t-accent); }
${R} ::selection { background: color-mix(in srgb, var(--t-accent) 24%, transparent); }

/* ── Per-theme shape language ──────────────────────────────────────────── */

${t.extra(R)}
${t.lightExtra(R)}
${t.darkExtra(R)}
`
}

/** Shared icon set: Lucide masks replace the codicon glyphs for both themes. */
export const ICON_SCOPE = ':root:is([data-hermes-theme^="tide"],[data-hermes-theme^="mint"],[data-hermes-theme^="frost"])'

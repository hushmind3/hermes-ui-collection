// src/plugin.tsx
import { ROUTES_AREA, SIDEBAR_NAV_AREA, THEMES_AREA } from "@hermes/plugin-sdk";

// src/theme-gallery.tsx
import { Button, useTheme } from "@hermes/plugin-sdk";

// src/themes.ts
var tossTypography = {
  fontSans: 'Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", sans-serif',
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.01em"
};
var naverTypography = {
  fontSans: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", sans-serif',
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.01em"
};
var appleTypography = {
  fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Apple SD Gothic Neo", sans-serif',
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.015em"
};
var TOSS = {
  name: "toss",
  label: "Toss",
  description: "\uD1A0\uC2A4\uC99D\uAD8C\uCC98\uB7FC \uBC1D\uC740 \uD68C\uC0C9 \uBC30\uACBD, \uD30C\uB780 \uD3EC\uC778\uD2B8, \uD070 \uC22B\uC790\uC640 \uB465\uADFC \uCE74\uB4DC.",
  colors: {
    background: "#F4F5F8",
    foreground: "#1A1F29",
    card: "#FFFFFF",
    cardForeground: "#191F28",
    muted: "#F4F5F8",
    mutedForeground: "#4E5968",
    popover: "#FFFFFF",
    popoverForeground: "#191F28",
    primary: "#3182F6",
    primaryForeground: "#FFFFFF",
    secondary: "#E8F3FF",
    secondaryForeground: "#1B64DA",
    accent: "#E8F3FF",
    accentForeground: "#1B64DA",
    border: "#E5E8EB",
    input: "#E5E8EB",
    ring: "#3182F6",
    midground: "#2272EB",
    destructive: "#F04452",
    destructiveForeground: "#FFFFFF",
    sidebarBackground: "#FBFCFD",
    sidebarBorder: "#E5E8EB",
    userBubble: "#E8F3FF",
    userBubbleBorder: "#D6E7FF"
  },
  darkColors: {
    background: "#101114",
    foreground: "#F2F4F6",
    card: "#191A1E",
    cardForeground: "#F2F4F6",
    muted: "#22242A",
    mutedForeground: "#9AA1AC",
    popover: "#191A1E",
    popoverForeground: "#F2F4F6",
    primary: "#4C9BFF",
    primaryForeground: "#0B1220",
    secondary: "#1E2A3A",
    secondaryForeground: "#BBD8FF",
    accent: "#1E2A3A",
    accentForeground: "#BBD8FF",
    border: "#2A2D34",
    input: "#2A2D34",
    ring: "#4C9BFF",
    midground: "#4C9BFF",
    destructive: "#FF6B6B",
    destructiveForeground: "#1A0B0B",
    sidebarBackground: "#141518",
    sidebarBorder: "#2A2D34",
    userBubble: "#1E2A3A",
    userBubbleBorder: "#2E4360"
  },
  typography: tossTypography,
  customCSS: `
:root[data-hermes-theme="toss"] {
  --radius: 16px;
}
:root[data-hermes-theme="toss"] [data-slot="button"] {
  border-radius: 12px;
  transition: transform .16s ease, box-shadow .16s ease, filter .16s ease, background-color .16s ease;
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, .22), rgba(255, 255, 255, 0) 58%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .30), 0 2px 6px rgba(49, 130, 246, .24);
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 8px 20px rgba(49, 130, 246, .30);
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="secondary"],
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="outline"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .65), 0 1px 2px rgba(25, 31, 40, .04);
}
:root[data-hermes-theme="toss"] [data-slot="card"] {
  border-radius: 20px;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #FBFCFD 100%);
  box-shadow:
    rgba(255, 255, 255, .96) 0 0 0 .75px inset,
    rgba(7, 25, 76, .04) 0 0 0 .75px,
    rgba(0, 0, 0, .08) 0 0 0 .5px,
    rgba(0, 0, 0, .04) 0 1px 1px;
  transition: transform .18s ease, box-shadow .18s ease;
}
:root[data-hermes-theme="toss"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow:
    rgba(255, 255, 255, .96) 0 0 0 .75px inset,
    rgba(7, 25, 76, .06) 0 0 0 .75px,
    rgba(0, 0, 0, .10) 0 0 0 .5px,
    rgba(0, 29, 58, .12) 0 8px 24px -6px;
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="toss"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="toss"] ::selection {
  background: rgba(49, 130, 246, .22);
}
`
};
var NAVER = {
  name: "naver",
  label: "Naver",
  description: "\uD770 \uBC30\uACBD\uACFC \uB124\uC774\uBC84 \uADF8\uB9B0 \uD3EC\uC778\uD2B8, \uC815\uBCF4 \uBC00\uB3C4 \uC788\uB294 \uB300\uC2DC\uBCF4\uB4DC.",
  colors: {
    background: "#FFFFFF",
    foreground: "#2E2E2E",
    card: "#FFFFFF",
    cardForeground: "#191F28",
    muted: "#F8F9FA",
    mutedForeground: "#555558",
    popover: "#FFFFFF",
    popoverForeground: "#191F28",
    primary: "#03C75A",
    primaryForeground: "#FFFFFF",
    secondary: "#E6F9EE",
    secondaryForeground: "#03A94D",
    accent: "#E6F9EE",
    accentForeground: "#03A94D",
    border: "#E5E8EB",
    input: "#E5E8EB",
    ring: "#03C75A",
    midground: "#03C75A",
    destructive: "#F04452",
    destructiveForeground: "#FFFFFF",
    sidebarBackground: "#FFFFFF",
    sidebarBorder: "#E5E8EB",
    userBubble: "#E6F9EE",
    userBubbleBorder: "#C9EEDB"
  },
  darkColors: {
    background: "#111312",
    foreground: "#F2F4F6",
    card: "#181B19",
    cardForeground: "#F2F4F6",
    muted: "#202522",
    mutedForeground: "#9AA1AC",
    popover: "#181B19",
    popoverForeground: "#F2F4F6",
    primary: "#03C75A",
    primaryForeground: "#06110B",
    secondary: "#163024",
    secondaryForeground: "#A8EDC7",
    accent: "#163024",
    accentForeground: "#A8EDC7",
    border: "#29312C",
    input: "#29312C",
    ring: "#03C75A",
    midground: "#03C75A",
    destructive: "#FF6B6B",
    destructiveForeground: "#1A0B0B",
    sidebarBackground: "#141715",
    sidebarBorder: "#29312C",
    userBubble: "#163024",
    userBubbleBorder: "#24513A"
  },
  typography: naverTypography,
  customCSS: `
:root[data-hermes-theme="naver"] [data-slot="button"] {
  border-radius: 12px;
  transition: transform .16s ease, box-shadow .16s ease, filter .16s ease;
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, #16D46B 0%, #03C75A 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .30), 0 6px 20px rgba(3, 199, 90, .24);
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .36), 0 10px 28px rgba(3, 199, 90, .34);
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="naver"] [data-slot="card"] {
  border-radius: 16px;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #FAFEFB 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .7), 0 1px 2px rgba(25, 31, 40, .03), 0 12px 32px rgba(3, 199, 90, .06);
  transition: transform .18s ease, box-shadow .18s ease;
}
:root[data-hermes-theme="naver"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .8), 0 2px 4px rgba(25, 31, 40, .04), 0 18px 44px rgba(3, 199, 90, .10);
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="naver"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="naver"] ::selection {
  background: rgba(3, 199, 90, .22);
}
`
};
var APPLE = {
  name: "apple",
  label: "Apple",
  description: "\uC544\uC774\uD3F0\uCC98\uB7FC \uBC18\uC9C8\uBC18\uC9C8\uD55C \uC720\uB9AC \uD45C\uBA74, \uBD80\uB4DC\uB7EC\uC6B4 \uADF8\uB9BC\uC790\uC640 \uB465\uADFC \uBAA8\uC11C\uB9AC.",
  colors: {
    background: "#F5F5F7",
    foreground: "#1D1D1F",
    card: "#FFFFFF",
    cardForeground: "#1D1D1F",
    muted: "#F5F5F7",
    mutedForeground: "#6E6E73",
    popover: "#FFFFFF",
    popoverForeground: "#1D1D1F",
    primary: "#0071E3",
    primaryForeground: "#FFFFFF",
    secondary: "#E8E8ED",
    secondaryForeground: "#1D1D1F",
    accent: "#E8E8ED",
    accentForeground: "#1D1D1F",
    border: "#D2D2D7",
    input: "#D2D2D7",
    ring: "#0071E3",
    midground: "#0071E3",
    destructive: "#FF3B30",
    destructiveForeground: "#FFFFFF",
    sidebarBackground: "#FBFBFD",
    sidebarBorder: "#D2D2D7",
    userBubble: "#E8F0FE",
    userBubbleBorder: "#C7DBFF"
  },
  darkColors: {
    background: "#000000",
    foreground: "#F5F5F7",
    card: "#1C1C1E",
    cardForeground: "#F5F5F7",
    muted: "#2C2C2E",
    mutedForeground: "#A1A1A6",
    popover: "#1C1C1E",
    popoverForeground: "#F5F5F7",
    primary: "#0A84FF",
    primaryForeground: "#FFFFFF",
    secondary: "#2C2C2E",
    secondaryForeground: "#F5F5F7",
    accent: "#2C2C2E",
    accentForeground: "#F5F5F7",
    border: "#38383A",
    input: "#38383A",
    ring: "#0A84FF",
    midground: "#0A84FF",
    destructive: "#FF453A",
    destructiveForeground: "#FFFFFF",
    sidebarBackground: "#0A0A0A",
    sidebarBorder: "#38383A",
    userBubble: "#0A2540",
    userBubbleBorder: "#1C3D5A"
  },
  typography: appleTypography,
  customCSS: `
:root[data-hermes-theme="apple"] [data-slot="card"] {
  background: color-mix(in srgb, var(--card) 74%, transparent);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  backdrop-filter: blur(24px) saturate(180%);
  border-radius: 22px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, .08), inset 0 1px 0 rgba(255, 255, 255, .55);
  transition: transform .2s ease, box-shadow .2s ease;
}
:root[data-hermes-theme="apple"] [data-slot="card"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, .12), inset 0 1px 0 rgba(255, 255, 255, .65);
}
:root[data-hermes-theme="apple"] [data-slot="button"] {
  border-radius: 999px;
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"] {
  background-image: linear-gradient(180deg, #2B9BFF 0%, #0071E3 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35), 0 6px 18px rgba(0, 113, 227, .28);
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"]:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .42), 0 10px 28px rgba(0, 113, 227, .38);
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"]:active {
  transform: translateY(0);
  filter: brightness(.98);
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"] {
  position: relative;
  overflow: hidden;
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"]::after {
  content: "";
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, .30) 50%, transparent 58%);
  transform: translateX(-70%) rotate(8deg);
  opacity: 0;
  transition: transform .55s ease, opacity .2s ease;
  pointer-events: none;
}
:root[data-hermes-theme="apple"] [data-slot="button"][data-variant="default"]:hover::after {
  transform: translateX(70%) rotate(8deg);
  opacity: 1;
}
:root[data-hermes-theme="apple"] ::selection {
  background: rgba(0, 113, 227, .22);
}
`
};
var OUR_THEMES = [TOSS, NAVER, APPLE];

// src/theme-gallery.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var SWATCH_KEYS = ["background", "primary", "card", "foreground"];
function Swatches({ theme }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: SWATCH_KEYS.map((key) => /* @__PURE__ */ jsx(
    "span",
    {
      title: key,
      className: "inline-block h-7 w-7 rounded-[9px] border border-black/10 shadow-sm",
      style: { background: theme.colors[key] }
    },
    key
  )) });
}
function ThemeGallery() {
  const { availableThemes, themeName, setTheme } = useTheme();
  const themes = OUR_THEMES.map((theme) => availableThemes.find((item) => item.name === theme.name) ?? theme);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full max-w-5xl gap-6 p-8", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "UI \uD14C\uB9C8" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "\uBC31\uC5D4\uB4DC\uB294 \uADF8\uB300\uB85C \uB450\uACE0 \uD654\uBA74 \uC2A4\uD0C0\uC77C\uB9CC \uBC14\uAFC9\uB2C8\uB2E4. \uC124\uC815 \u2192 \uBAA8\uC591\uC5D0\uC11C\uB3C4 \uACE0\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: themes.map((theme) => /* @__PURE__ */ jsxs("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
      /* @__PURE__ */ jsx(Swatches, { theme }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-base font-semibold", children: theme.label }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 min-h-10 text-sm text-muted-foreground", children: theme.description }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "mt-4 w-full",
          disabled: themeName === theme.name,
          onClick: () => setTheme(theme.name),
          children: themeName === theme.name ? "\uC0AC\uC6A9 \uC911" : "\uC774 \uD14C\uB9C8 \uC801\uC6A9"
        }
      )
    ] }, theme.name)) }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "\uD14C\uB9C8\uB97C \uCD94\uAC00\uD558\uB824\uBA74 ",
      /* @__PURE__ */ jsx("code", { className: "font-mono", children: "src/themes.ts" }),
      "\uC758",
      " ",
      /* @__PURE__ */ jsx("code", { className: "font-mono", children: "OUR_THEMES" }),
      "\uC5D0 ",
      /* @__PURE__ */ jsx("code", { className: "font-mono", children: "DesktopTheme" }),
      " \uAC1D\uCCB4\uB97C \uD558\uB098 \uB354 \uB4F1\uB85D\uD558\uBA74 \uB429\uB2C8\uB2E4."
    ] })
  ] });
}

// src/plugin.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ID = "hermes-ui-collection";
var PATH = "/hermes-ui-collection";
var plugin_default = {
  id: ID,
  name: "Hermes UI Collection",
  description: "Toss / Naver / Apple \uD14C\uB9C8\uB97C \uC81C\uACF5\uD558\uB294 \uB370\uC2A4\uD06C\uD1B1 UI \uD50C\uB7EC\uADF8\uC778.",
  defaultEnabled: true,
  register(ctx) {
    return ctx.registerMany([
      ...OUR_THEMES.map((theme) => ({
        id: `theme-${theme.name}`,
        area: THEMES_AREA,
        data: theme
      })),
      {
        id: "gallery",
        area: ROUTES_AREA,
        data: { path: PATH },
        render: () => /* @__PURE__ */ jsx2(ThemeGallery, {})
      },
      {
        id: "nav",
        area: SIDEBAR_NAV_AREA,
        order: 64,
        data: { path: PATH, label: "UI \uD14C\uB9C8", codicon: "symbol-color" }
      }
    ]);
  }
};
export {
  plugin_default as default
};

// src/plugin.tsx
import { ROUTES_AREA, SIDEBAR_NAV_AREA, THEMES_AREA } from "@hermes/plugin-sdk";

// src/dashboard.tsx
import { Button, host, useValue } from "@hermes/plugin-sdk";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var AVATAR_COLORS = ["#5B6BFF", "#7C4DFF", "#00A86B", "#2ED3A1", "#FF6B6B", "#FF9F43", "#8E5CF7", "#00A6D6"];
function shortModel(value) {
  if (!value) {
    return "\uBAA8\uB378 \uBBF8\uC124\uC815";
  }
  const tail = value.split("/").pop() || value;
  return tail.replace(/:free$/, "").replace(/:.*$/, "").slice(0, 24);
}
function Dashboard() {
  const profile = useValue(host.state.profile) || "default";
  const [profiles, setProfiles] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      setLoading(true);
      setError("");
      try {
        const [profileResult, roomResult, modelResult] = await Promise.all([
          host.profiles.list(),
          host.request("groups.list", { profile, limit: 100 }).catch(() => ({ rooms: [] })),
          host.request("model.options", { refresh: false, explicit_only: true }).catch(() => null)
        ]);
        if (cancelled) {
          return;
        }
        setProfiles(profileResult?.profiles || []);
        setRooms(roomResult?.rooms || []);
        setModel({ model: modelResult?.model, provider: modelResult?.provider });
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [profile]);
  const stats = [
    { label: "\uBD07 \uD504\uB85C\uD544", value: profiles.length, hint: "\uC5F0\uACB0\uB41C \uBD07" },
    { label: "\uADF8\uB8F9 \uB300\uD654", value: rooms.length, hint: "\uD65C\uC131 \uBC29" },
    { label: "\uD604\uC7AC \uBAA8\uB378", value: shortModel(model.model), hint: model.provider || "\uAE30\uBCF8\uAC12" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full max-w-6xl gap-5 p-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Nazarick cockpit" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 text-2xl font-bold tracking-tight", children: "\uB300\uC2DC\uBCF4\uB4DC" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          "\uBC31\uC5D4\uB4DC\uB294 \uADF8\uB300\uB85C, \uD654\uBA74\uB9CC \uB0B4 \uCDE8\uD5A5\uC73C\uB85C. \uD604\uC7AC \uD504\uB85C\uD544: ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: profile })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => host.navigate("/hermes-ui-collection"), children: "UI \uD14C\uB9C8" }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: () => host.navigate("/all-bots-model"), children: "\uBAA8\uB4E0 \uBD07 \uBAA8\uB378" })
      ] })
    ] }),
    error ? /* @__PURE__ */ jsx("p", { className: "rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive", children: error }) : null,
    /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-3", children: stats.map((stat) => /* @__PURE__ */ jsxs("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground", children: stat.label }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 truncate text-2xl font-extrabold tracking-tight", children: stat.value }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: stat.hint })
    ] }, stat.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-5 lg:grid-cols-[1.15fr_.85fr]", children: [
      /* @__PURE__ */ jsxs("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold", children: "\uBD07" }),
            /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "\uD504\uB85C\uD544\uBCC4 \uD604\uC7AC \uBAA8\uB378" })
          ] }),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: () => host.navigate("/all-bots-model"), children: "\uC804\uCCB4 \uBCF4\uAE30" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-1", children: [
          loading ? /* @__PURE__ */ jsx("p", { className: "py-6 text-center text-sm text-muted-foreground", children: "\uBD88\uB7EC\uC624\uB294 \uC911\u2026" }) : null,
          profiles.slice(0, 8).map((row, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-muted/60", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "grid h-8 w-8 place-items-center rounded-[10px] text-[11px] font-extrabold text-white",
                style: { background: AVATAR_COLORS[index % AVATAR_COLORS.length] },
                children: (row.display_name || row.name || "?").trim().charAt(0)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold", children: row.display_name || row.name }),
              /* @__PURE__ */ jsx("p", { className: "truncate text-[11px] text-muted-foreground", children: row.name })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "ml-auto shrink-0 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground", children: [
              shortModel(row.model),
              row.provider ? ` \xB7 ${row.provider}` : ""
            ] })
          ] }, row.name))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5", children: [
        /* @__PURE__ */ jsxs("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold", children: "\uADF8\uB8F9 \uB300\uD654" }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "\uD638\uC2A4\uD2F0\uB4DC \uB8F8" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground", children: rooms.length })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-1", children: [
            rooms.slice(0, 5).map((room) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-muted/60", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
              /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate text-sm font-medium", children: room.name }),
              /* @__PURE__ */ jsxs("span", { className: "ml-auto text-[11px] text-muted-foreground", children: [
                room.members?.length || 0,
                "\uBA85"
              ] })
            ] }, room.room_id)),
            !loading && rooms.length === 0 ? /* @__PURE__ */ jsx("p", { className: "py-4 text-sm text-muted-foreground", children: "\uADF8\uB8F9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold", children: "\uBE60\uB978 \uC791\uC5C5" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-2", children: [
            /* @__PURE__ */ jsx(Button, { className: "justify-start", variant: "ghost", onClick: () => host.navigate("/hermes-ui-collection"), children: "\uD14C\uB9C8 \uBC14\uAFB8\uAE30" }),
            /* @__PURE__ */ jsx(Button, { className: "justify-start", variant: "ghost", onClick: () => host.navigate("/all-bots-model"), children: "\uBAA8\uB4E0 \uBD07 \uBAA8\uB378 \uBCC0\uACBD" }),
            /* @__PURE__ */ jsx(Button, { className: "justify-start", variant: "ghost", onClick: () => host.navigate("/kanban"), children: "\uCE78\uBC18 \uC5F4\uAE30" })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// src/theme-gallery.tsx
import { Button as Button2, useTheme } from "@hermes/plugin-sdk";

// src/themes.ts
var tideTypography = {
  fontSans: 'Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", sans-serif',
  fontUrl: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css",
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.01em"
};
var mintTypography = {
  fontSans: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", sans-serif',
  fontUrl: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap",
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.01em"
};
var frostTypography = {
  fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Apple SD Gothic Neo", sans-serif',
  fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace",
  baseSize: "14px",
  lineHeight: "1.5",
  letterSpacing: "-0.015em"
};
var TIDE = {
  name: "tide",
  label: "Tide",
  description: "\uBC1D\uC740 \uD68C\uC0C9 \uBC30\uACBD\uACFC \uCF54\uBC1C\uD2B8 \uBE14\uB8E8, \uB465\uADFC \uCE74\uB4DC\uC640 \uBD80\uB4DC\uB7EC\uC6B4 \uADF8\uB9BC\uC790.",
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
};
var MINT = {
  name: "mint",
  label: "Mint",
  description: "\uD654\uC774\uD2B8\uC640 \uBBFC\uD2B8 \uADF8\uB9B0, \uC815\uBCF4 \uC911\uC2EC\uC758 \uAE54\uB054\uD55C \uB300\uC2DC\uBCF4\uB4DC.",
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
};
var FROST = {
  name: "frost",
  label: "Frost",
  description: "\uBC18\uD22C\uBA85 \uC720\uB9AC \uD45C\uBA74, \uBD80\uB4DC\uB7EC\uC6B4 \uADF8\uB9BC\uC790\uC640 \uB465\uADFC \uBAA8\uC11C\uB9AC.",
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
};
var OUR_THEMES = [TIDE, MINT, FROST];

// src/theme-gallery.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SWATCH_KEYS = ["background", "primary", "card", "foreground"];
function Swatches({ theme }) {
  return /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-2", children: SWATCH_KEYS.map((key) => /* @__PURE__ */ jsx2(
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
  const { themeName, setTheme } = useTheme();
  const themes = OUR_THEMES;
  return /* @__PURE__ */ jsxs2("div", { className: "mx-auto grid w-full max-w-5xl gap-6 p-8", children: [
    /* @__PURE__ */ jsxs2("header", { children: [
      /* @__PURE__ */ jsx2("h1", { className: "text-2xl font-bold tracking-tight", children: "UI \uD14C\uB9C8" }),
      /* @__PURE__ */ jsx2("p", { className: "mt-1 text-sm text-muted-foreground", children: "\uBC31\uC5D4\uB4DC\uB294 \uADF8\uB300\uB85C \uB450\uACE0 \uD654\uBA74 \uC2A4\uD0C0\uC77C\uB9CC \uBC14\uAFC9\uB2C8\uB2E4. \uC124\uC815 \u2192 \uBAA8\uC591\uC5D0\uC11C\uB3C4 \uACE0\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4." })
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: themes.map((theme) => /* @__PURE__ */ jsxs2("section", { "data-slot": "card", className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: [
      /* @__PURE__ */ jsx2(Swatches, { theme }),
      /* @__PURE__ */ jsx2("h2", { className: "mt-4 text-base font-semibold", children: theme.label }),
      /* @__PURE__ */ jsx2("p", { className: "mt-1 min-h-10 text-sm text-muted-foreground", children: theme.description }),
      /* @__PURE__ */ jsx2(
        Button2,
        {
          className: "mt-4 w-full",
          disabled: themeName === theme.name,
          onClick: () => setTheme(theme.name),
          children: themeName === theme.name ? "\uC0AC\uC6A9 \uC911" : "\uC774 \uD14C\uB9C8 \uC801\uC6A9"
        }
      )
    ] }, theme.name)) }),
    /* @__PURE__ */ jsxs2("p", { className: "text-xs text-muted-foreground", children: [
      "\uD14C\uB9C8\uB97C \uCD94\uAC00\uD558\uB824\uBA74 ",
      /* @__PURE__ */ jsx2("code", { className: "font-mono", children: "src/themes.ts" }),
      "\uC758",
      " ",
      /* @__PURE__ */ jsx2("code", { className: "font-mono", children: "OUR_THEMES" }),
      "\uC5D0 ",
      /* @__PURE__ */ jsx2("code", { className: "font-mono", children: "DesktopTheme" }),
      " \uAC1D\uCCB4\uB97C \uD558\uB098 \uB354 \uB4F1\uB85D\uD558\uBA74 \uB429\uB2C8\uB2E4."
    ] })
  ] });
}

// src/plugin.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var ID = "hermes-ui-collection";
var PATH = "/hermes-ui-collection";
var DASHBOARD_PATH = "/hermes-ui-dashboard";
var plugin_default = {
  id: ID,
  name: "Hermes UI Collection",
  description: "Tide / Mint / Frost \uD14C\uB9C8\uB97C \uC81C\uACF5\uD558\uB294 \uB370\uC2A4\uD06C\uD1B1 UI \uD50C\uB7EC\uADF8\uC778.",
  defaultEnabled: true,
  register(ctx) {
    return ctx.registerMany([
      ...OUR_THEMES.map((theme) => ({
        id: `theme-${theme.name}`,
        area: THEMES_AREA,
        data: theme
      })),
      {
        id: "dashboard",
        area: ROUTES_AREA,
        data: { path: DASHBOARD_PATH },
        render: () => /* @__PURE__ */ jsx3(Dashboard, {})
      },
      {
        id: "gallery",
        area: ROUTES_AREA,
        data: { path: PATH },
        render: () => /* @__PURE__ */ jsx3(ThemeGallery, {})
      },
      {
        id: "dashboard-nav",
        area: SIDEBAR_NAV_AREA,
        order: 63,
        data: { path: DASHBOARD_PATH, label: "\uB300\uC2DC\uBCF4\uB4DC", codicon: "dashboard" }
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

import { Button, useTheme } from '@hermes/plugin-sdk'

import { OUR_THEMES } from './themes'

const SWATCH_KEYS = ['background', 'primary', 'card', 'foreground'] as const

function Swatches({ theme }: { theme: (typeof OUR_THEMES)[number] }) {
  return (
    <div className="flex items-center gap-2">
      {SWATCH_KEYS.map(key => (
        <span
          key={key}
          title={key}
          className="inline-block h-7 w-7 rounded-[9px] border border-black/10 shadow-sm"
          style={{ background: theme.colors[key] }}
        />
      ))}
    </div>
  )
}

export function ThemeGallery() {
  const { availableThemes, themeName, setTheme } = useTheme()
  const themes = OUR_THEMES.map(theme => availableThemes.find(item => item.name === theme.name) ?? theme)

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 p-8">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">UI 테마</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          백엔드는 그대로 두고 화면 스타일만 바꿉니다. 설정 → 모양에서도 고를 수 있습니다.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map(theme => (
          <section key={theme.name} data-slot="card" className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <Swatches theme={theme} />
            <h2 className="mt-4 text-base font-semibold">{theme.label}</h2>
            <p className="mt-1 min-h-10 text-sm text-muted-foreground">{theme.description}</p>
            <Button
              className="mt-4 w-full"
              disabled={themeName === theme.name}
              onClick={() => setTheme(theme.name)}
            >
              {themeName === theme.name ? '사용 중' : '이 테마 적용'}
            </Button>
          </section>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        테마를 추가하려면 <code className="font-mono">src/themes.ts</code>의{' '}
        <code className="font-mono">OUR_THEMES</code>에 <code className="font-mono">DesktopTheme</code> 객체를 하나 더
        등록하면 됩니다.
      </p>
    </div>
  )
}

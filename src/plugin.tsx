import { ROUTES_AREA, SIDEBAR_NAV_AREA, THEMES_AREA, TITLEBAR_AREAS } from '@hermes/plugin-sdk'
import { useEffect } from 'react'

import { Dashboard } from './dashboard'
import { ICON_CSS } from './icons'
import { ThemeGallery } from './theme-gallery'
import { OUR_THEMES } from './themes'

const ID = 'hermes-ui-collection'
const PATH = '/hermes-ui-collection'
const DASHBOARD_PATH = '/hermes-ui-dashboard'

/**
 * A permanently mounted title-bar slot is the documented seat for global side
 * effects. The icon sheet goes in once and is removed when the plugin unloads,
 * so switching themes does not re-inject 100 KB per theme.
 */
function GlobalSkin() {
  useEffect(() => {
    const style = document.createElement('style')
    style.dataset.hermesUiIcons = ''
    style.textContent = ICON_CSS
    document.head.appendChild(style)

    return () => style.remove()
  }, [])

  return null
}

export default {
  id: ID,
  name: 'Hermes UI Collection',
  description: 'Tide / Mint / Frost 테마로 앱 전체 UI를 바꾸는 데스크톱 플러그인.',
  defaultEnabled: true,

  register(ctx: any) {
    return ctx.registerMany([
      ...OUR_THEMES.map(theme => ({
        id: `theme-${theme.name}`,
        area: THEMES_AREA,
        data: theme
      })),
      {
        id: 'icons',
        area: TITLEBAR_AREAS.right,
        order: -100,
        render: () => <GlobalSkin />
      },
      {
        id: 'dashboard',
        area: ROUTES_AREA,
        data: { path: DASHBOARD_PATH },
        render: () => <Dashboard />
      },
      {
        id: 'gallery',
        area: ROUTES_AREA,
        data: { path: PATH },
        render: () => <ThemeGallery />
      },
      {
        id: 'dashboard-nav',
        area: SIDEBAR_NAV_AREA,
        order: 63,
        data: { path: DASHBOARD_PATH, label: '대시보드', codicon: 'dashboard' }
      },
      {
        id: 'nav',
        area: SIDEBAR_NAV_AREA,
        order: 64,
        data: { path: PATH, label: 'UI 테마', codicon: 'symbol-color' }
      }
    ])
  }
}

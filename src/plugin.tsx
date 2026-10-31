import { ROUTES_AREA, SIDEBAR_NAV_AREA, THEMES_AREA } from '@hermes/plugin-sdk'

import { Dashboard } from './dashboard'
import { ThemeGallery } from './theme-gallery'
import { OUR_THEMES } from './themes'

const ID = 'hermes-ui-collection'
const PATH = '/hermes-ui-collection'
const DASHBOARD_PATH = '/hermes-ui-dashboard'

export default {
  id: ID,
  name: 'Hermes UI Collection',
  description: 'Tide / Mint / Frost 테마를 제공하는 데스크톱 UI 플러그인.',
  defaultEnabled: true,

  register(ctx: any) {
    return ctx.registerMany([
      ...OUR_THEMES.map(theme => ({
        id: `theme-${theme.name}`,
        area: THEMES_AREA,
        data: theme
      })),
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

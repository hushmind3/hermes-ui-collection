/**
 * Minimal type surface for the Hermes Desktop SDK.
 *
 * The runtime module is supplied by the app as `@hermes/plugin-sdk`; this shim
 * only covers the pieces this project imports, so `tsc --noEmit` works outside
 * the Hermes checkout.
 */
declare module '@hermes/plugin-sdk' {
  import type { ComponentType, ReactNode } from 'react'

  export const ROUTES_AREA: string
  export const SIDEBAR_NAV_AREA: string
  export const THEMES_AREA: string

  export const host: {
    state: { profile: { get(): string } }
    profiles: { list(): Promise<{ profiles?: unknown[] }> }
    request(method: string, params?: Record<string, unknown>): Promise<any>
    navigate(path: string): void
  }

  export function useValue<T>(atom: { get(): T }): T

  export const Button: ComponentType<{
    children?: ReactNode
    className?: string
    disabled?: boolean
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: string
    size?: string
  }>

  export function useTheme(): {
    themeName: string
    availableThemes: DesktopTheme[]
    setTheme: (name: string) => void
  }

  export interface DesktopThemeColors {
    background: string
    foreground: string
    card: string
    cardForeground: string
    muted: string
    mutedForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    accent: string
    accentForeground: string
    border: string
    input: string
    ring: string
    midground?: string
    midgroundForeground?: string
    composerRing?: string
    destructive: string
    destructiveForeground: string
    sidebarBackground?: string
    sidebarBorder?: string
    userBubble?: string
    userBubbleBorder?: string
  }

  export interface DesktopThemeTypography {
    fontSans: string
    fontMono: string
    fontUrl?: string
    baseSize?: string
    lineHeight?: string
    letterSpacing?: string
  }

  export interface DesktopTheme {
    name: string
    label: string
    description: string
    colors: DesktopThemeColors
    darkColors?: DesktopThemeColors
    typography?: Partial<DesktopThemeTypography>
    terminal?: Record<string, string | undefined>
    darkTerminal?: Record<string, string | undefined>
    customCSS?: string
  }
}

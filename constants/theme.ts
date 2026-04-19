export const colors = {
  background: '#f3faf8',
  foreground: '#0b1426',
  card: '#ffffff',
  muted: '#dbece8',
  mutedForeground: '#5c6f7a',
  primary: '#0f766e',
  accent: '#7c3aed',
  border: 'rgba(15, 118, 110, 0.18)',
  success: '#16a34a',
  destructive: '#dc2626',
  subscription: '#14b8a6',
} as const

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  30: 120,
} as const

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    radius: spacing[8],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
  },
} as const

export const theme = {
  colors,
  spacing,
  components,
} as const

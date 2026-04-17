export const colors = {
  background: '#f3fbf6',
  foreground: '#052e16',
  card: '#ffffff',
  muted: '#dcfce7',
  mutedForeground: '#4b5563',
  primary: '#16a34a',
  accent: '#10b981',
  border: 'rgba(22, 163, 74, 0.22)',
  success: '#22c55e',
  destructive: '#ef4444',
  subscription: '#059669',
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

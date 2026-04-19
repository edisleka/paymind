import dayjs from 'dayjs'

const USD = 'USD'

/**
 * Formats a number as standard US-locale currency (e.g. $1,234.56).
 * Always shows exactly two decimal places. Defaults to USD.
 * Falls back to a simple fixed-decimal string if Intl is unavailable.
 */
export function formatCurrency(value: number, currency: string = USD): string {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return formatCurrencyFallback(0, currency)
  }

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  } catch {
    return formatCurrencyFallback(value, currency)
  }
}

function formatCurrencyFallback(value: number, currency: string): string {
  const sign = value < 0 ? '-' : ''
  const abs = Math.abs(value)
  const fixed = abs.toFixed(2)
  const parts = fixed.split('.')
  const intPart = parts[0] ?? '0'
  const decPart = parts[1] ?? '00'

  const intDigits = intPart.replace(/^-/, '')
  const withCommas = intDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  if (currency === USD) {
    return sign === '-'
      ? `-$${withCommas}.${decPart}`
      : `$${withCommas}.${decPart}`
  }

  return `${sign}${currency} ${withCommas}.${decPart}`
}

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return 'Not provided'
  const parsedDate = dayjs(value)
  return parsedDate.isValid() ? parsedDate.format('MM/DD/YYYY') : 'Not provided'
}

export const formatStatusLabel = (value?: string): string => {
  if (!value) return 'Unknown'
  return value.charAt(0).toUpperCase() + value.slice(1)
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatCurrency(
  value: number | bigint | undefined,
  options?: Intl.NumberFormatOptions,
  locales?: string | string[]
) {
  if (!value && value !== 0) return
  const defaultOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: import.meta.env.VITE_APP_CURRENCY ?? "USD",
    minimumFractionDigits: 0,
  }
  return new Intl.NumberFormat(locales, {
    ...defaultOptions,
    ...(options ?? {}),
  }).format(value)
}

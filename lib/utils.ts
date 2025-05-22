import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number | string): string {
  if (typeof value === 'string') {
    value = parseFloat(value.replace(/[^\d.-]/g, ''));
  }
  
  return new Intl.NumberFormat('pt-BR').format(value);
}

export function getChangeColor(change: number): string {
  return change >= 0 ? 'text-green-500' : 'text-red-500';
}

export function getChangeIcon(change: number): string {
  return change >= 0 ? 'trending-up' : 'trending-down';
}
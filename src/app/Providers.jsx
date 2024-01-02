/* eslint-disable import/prefer-default-export */

'use client'

import { ThemeProvider } from 'next-themes'


export function Providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
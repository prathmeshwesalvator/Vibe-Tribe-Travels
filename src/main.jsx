import React, { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.jsx'

function getMuiTheme(themeName) {
  if (themeName === 'forest') {
    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2e7d32',
          light: '#66bb6a',
          dark: '#1b5e20',
        },
        secondary: {
          main: '#66bb6a',
          light: '#81c784',
          dark: '#43a047',
        },
        background: {
          default: '#f3fbf6',
          paper: '#e8f3ec',
        },
        text: {
          primary: '#0b2618',
          secondary: '#406a52',
        },
        divider: 'rgba(64, 106, 82, 0.2)',
      },
      typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        button: { textTransform: 'none', fontWeight: 500 },
      },
      shape: { borderRadius: 12 },
      components: {
        MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none' } } },
        MuiButton: { styleOverrides: { root: { borderRadius: 25, textTransform: 'none', fontWeight: 500 } } },
        MuiDrawer: { styleOverrides: { paper: { backgroundImage: 'none' } } },
      },
    })
  }

  // Default light theme
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3b82f6',
        light: '#60a5fa',
        dark: '#2563eb',
      },
      secondary: {
        main: '#8b5cf6',
        light: '#a78bfa',
        dark: '#7c3aed',
      },
      background: {
        default: '#ffffff',
        paper: '#f8fafc',
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
      },
      divider: 'rgba(100, 116, 139, 0.2)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiButton: { styleOverrides: { root: { borderRadius: 25, textTransform: 'none', fontWeight: 500 } } },
      MuiDrawer: { styleOverrides: { paper: { backgroundImage: 'none' } } },
    },
  })
}

const ThemeRoot = () => {
  const [themeName, setThemeName] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('appTheme') : null
    return saved === 'forest' ? 'forest' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeName)
    window.localStorage.setItem('appTheme', themeName)
  }, [themeName])

  useEffect(() => {
    const handler = (e) => {
      if (e && e.detail && (e.detail === 'forest' || e.detail === 'light')) {
        setThemeName(e.detail)
      }
    }
    window.addEventListener('app-theme-change', handler)
    return () => window.removeEventListener('app-theme-change', handler)
  }, [])

  const theme = useMemo(() => getMuiTheme(themeName), [themeName])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeRoot />
  </StrictMode>,
)

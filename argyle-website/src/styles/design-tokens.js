// Argyle Middle School Design System Tokens
// Centralized design values for consistency across all components

export const designTokens = {
  // Color Palette - Argyle Purple/Blue Theme
  colors: {
    // Primary Brand Colors
    primary: '#6B46C1',      // Argyle purple
    secondary: '#38BDF8',    // Bright blue
    accent: '#F59E0B',       // Golden yellow

    // Semantic Colors
    success: '#10B981',      // Green
    warning: '#F59E0B',      // Orange
    error: '#EF4444',        // Red
    info: '#3B82F6',         // Blue

    // Neutral Colors
    background: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      dark: '#1E293B'
    },

    // Text Colors
    text: {
      primary: '#1F2937',    // Dark gray
      secondary: '#6B7280',  // Medium gray
      tertiary: '#9CA3AF',   // Light gray
      inverse: '#FFFFFF'     // White
    },

    // Border Colors
    border: {
      light: '#E5E7EB',
      medium: '#D1D5DB',
      dark: '#9CA3AF'
    }
  },

  // Spacing Scale - Consistent spacing throughout
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
    xxxl: '4rem'      // 64px
  },

  // Typography System
  typography: {
    fontFamily: {
      heading: 'Inter, system-ui, -apple-system, sans-serif',
      body: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'JetBrains Mono, monospace'
    },

    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem'   // 60px
    },

    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },

    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2
    }
  },

  // Border Radius Scale
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    xxl: '1rem',      // 16px
    full: '9999px'
  },

  // Shadow System
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },

  // Animation/Transition Values
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },

  // Breakpoints for Responsive Design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070
  }
};

// Theme Variants
export const themes = {
  light: {
    ...designTokens,
    name: 'Light Theme'
  },

  dark: {
    ...designTokens,
    colors: {
      ...designTokens.colors,
      background: {
        primary: '#1E293B',
        secondary: '#334155',
        dark: '#0F172A'
      },
      text: {
        primary: '#F8FAFC',
        secondary: '#CBD5E1',
        tertiary: '#64748B',
        inverse: '#1E293B'
      },
      border: {
        light: '#334155',
        medium: '#475569',
        dark: '#64748B'
      }
    },
    name: 'Dark Theme'
  }
};

// Export default light theme
export default designTokens;







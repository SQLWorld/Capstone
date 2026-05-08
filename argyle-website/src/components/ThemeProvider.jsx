import React, { createContext, useContext, useState, useEffect } from 'react';
import { designTokens, themes } from '../styles/design-tokens';

// Create Theme Context
const ThemeContext = createContext({
  theme: designTokens,
  currentTheme: 'light',
  setTheme: () => {},
  toggleTheme: () => {}
});

// Theme Provider Component
export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey = 'argyle-theme'
}) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      return stored || defaultTheme;
    }
    return defaultTheme;
  });

  const [theme, setThemeState] = useState(themes[currentTheme] || designTokens);

  // Update theme when currentTheme changes
  useEffect(() => {
    const newTheme = themes[currentTheme] || designTokens;
    setThemeState(newTheme);

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, currentTheme);
    }

    // Apply theme to document root for CSS custom properties
    applyThemeToDocument(newTheme);
  }, [currentTheme, storageKey]);

  // Set theme function
  const setTheme = (newTheme) => {
    if (themes[newTheme]) {
      setCurrentTheme(newTheme);
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    setCurrentTheme(current => current === 'light' ? 'dark' : 'light');
  };

  // Apply theme as CSS custom properties
  const applyThemeToDocument = (themeData) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // Colors
    Object.entries(themeData.colors).forEach(([category, values]) => {
      if (typeof values === 'string') {
        root.style.setProperty(`--color-${category}`, values);
      } else if (typeof values === 'object') {
        Object.entries(values).forEach(([key, value]) => {
          root.style.setProperty(`--color-${category}-${key}`, value);
        });
      }
    });

    // Spacing
    Object.entries(themeData.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Typography
    Object.entries(themeData.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    Object.entries(themeData.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value.toString());
    });

    // Border radius
    Object.entries(themeData.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // Shadows
    Object.entries(themeData.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Transitions
    Object.entries(themeData.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });
  };

  const value = {
    theme,
    currentTheme,
    setTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Higher-order component for theme access
export const withTheme = (Component) => {
  return (props) => {
    const theme = useTheme();
    return <Component {...props} theme={theme} />;
  };
};

export default ThemeProvider;







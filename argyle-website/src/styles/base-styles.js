// Base Styles for Argyle Design System
// Consistent styling foundation for all components

import { designTokens } from './design-tokens';

export const baseStyles = {
  // Button Base Styles
  button: `
    font-family: ${designTokens.typography.fontFamily.body};
    font-weight: ${designTokens.typography.fontWeight.medium};
    border-radius: ${designTokens.borderRadius.md};
    transition: all ${designTokens.transitions.fast};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${designTokens.spacing.sm};
    border: 2px solid transparent;
    outline: none;
    position: relative;
    overflow: hidden;
  `,

  // Input Base Styles
  input: `
    font-family: ${designTokens.typography.fontFamily.body};
    font-size: ${designTokens.typography.fontSize.base};
    border: 1px solid ${designTokens.colors.border.medium};
    border-radius: ${designTokens.borderRadius.md};
    padding: ${designTokens.spacing.sm} ${designTokens.spacing.md};
    transition: all ${designTokens.transitions.fast};
    background: ${designTokens.colors.background.primary};
    color: ${designTokens.colors.text.primary};
    outline: none;
  `,

  // Card Base Styles
  card: `
    background: ${designTokens.colors.background.primary};
    border-radius: ${designTokens.borderRadius.lg};
    box-shadow: ${designTokens.shadows.md};
    border: 1px solid ${designTokens.colors.border.light};
    overflow: hidden;
    transition: all ${designTokens.transitions.normal};
  `,

  // Modal/Dialog Base Styles
  modal: `
    background: ${designTokens.colors.background.primary};
    border-radius: ${designTokens.borderRadius.xl};
    box-shadow: ${designTokens.shadows.xl};
    border: 1px solid ${designTokens.colors.border.light};
    max-width: 90vw;
    max-height: 90vh;
    overflow: hidden;
  `,

  // Form Group Base Styles
  formGroup: `
    display: flex;
    flex-direction: column;
    gap: ${designTokens.spacing.sm};
  `,

  // Label Base Styles
  label: `
    font-family: ${designTokens.typography.fontFamily.body};
    font-size: ${designTokens.typography.fontSize.sm};
    font-weight: ${designTokens.typography.fontWeight.medium};
    color: ${designTokens.colors.text.primary};
    display: block;
  `,

  // Helper Text Base Styles
  helperText: `
    font-family: ${designTokens.typography.fontFamily.body};
    font-size: ${designTokens.typography.fontSize.xs};
    color: ${designTokens.colors.text.tertiary};
    margin-top: ${designTokens.spacing.xs};
  `,

  // Error Text Base Styles
  errorText: `
    font-family: ${designTokens.typography.fontFamily.body};
    font-size: ${designTokens.typography.fontSize.sm};
    color: ${designTokens.colors.error};
    margin-top: ${designTokens.spacing.xs};
  `,

  // Focus Ring Styles (for accessibility)
  focusRing: `
    outline: 2px solid ${designTokens.colors.secondary};
    outline-offset: 2px;
  `,

  // Container Styles
  container: `
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: ${designTokens.spacing.md};
    padding-right: ${designTokens.spacing.md};
  `,

  // Grid System
  grid: {
    container: `
      display: grid;
      gap: ${designTokens.spacing.md};
    `,
    cols: {
      1: 'grid-template-columns: repeat(1, minmax(0, 1fr))',
      2: 'grid-template-columns: repeat(2, minmax(0, 1fr))',
      3: 'grid-template-columns: repeat(3, minmax(0, 1fr))',
      4: 'grid-template-columns: repeat(4, minmax(0, 1fr))',
      6: 'grid-template-columns: repeat(6, minmax(0, 1fr))',
      12: 'grid-template-columns: repeat(12, minmax(0, 1fr))'
    }
  },

  // Flex Utilities
  flex: {
    center: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    between: `
      display: flex;
      align-items: space-between;
      justify-content: center;
    `,
    start: `
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    column: `
      display: flex;
      flex-direction: column;
    `
  }
};

// Component Size Variants
export const componentSizes = {
  button: {
    sm: `
      padding: ${designTokens.spacing.xs} ${designTokens.spacing.sm};
      font-size: ${designTokens.typography.fontSize.sm};
      min-height: 32px;
    `,
    md: `
      padding: ${designTokens.spacing.sm} ${designTokens.spacing.md};
      font-size: ${designTokens.typography.fontSize.base};
      min-height: 40px;
    `,
    lg: `
      padding: ${designTokens.spacing.md} ${designTokens.spacing.lg};
      font-size: ${designTokens.typography.fontSize.lg};
      min-height: 48px;
    `
  },

  input: {
    sm: `
      padding: ${designTokens.spacing.xs} ${designTokens.spacing.sm};
      font-size: ${designTokens.typography.fontSize.sm};
    `,
    md: `
      padding: ${designTokens.spacing.sm} ${designTokens.spacing.md};
      font-size: ${designTokens.typography.fontSize.base};
    `,
    lg: `
      padding: ${designTokens.spacing.md} ${designTokens.spacing.lg};
      font-size: ${designTokens.typography.fontSize.lg};
    `
  },

  card: {
    sm: `padding: ${designTokens.spacing.md};`,
    md: `padding: ${designTokens.spacing.lg};`,
    lg: `padding: ${designTokens.spacing.xl};`
  }
};

// Accessibility Helpers
export const a11yHelpers = {
  // Screen reader only text
  srOnly: `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,

  // Focus visible (keyboard navigation)
  focusVisible: `
    &:focus-visible {
      outline: 2px solid ${designTokens.colors.secondary};
      outline-offset: 2px;
    }
  `,

  // High contrast mode support
  highContrast: `
    @media (prefers-contrast: high) {
      border: 2px solid currentColor;
    }
  `,

  // Reduced motion support
  reducedMotion: `
    @media (prefers-reduced-motion: reduce) {
      transition: none;
      animation: none;
    }
  `
};







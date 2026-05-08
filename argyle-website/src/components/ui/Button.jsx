import React from 'react';
import { baseStyles, componentSizes } from '../../styles/base-styles';
import { designTokens } from '../../styles/design-tokens';
import { useTheme } from '../ThemeProvider';

// Enhanced Button Component with Design System
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  // Build CSS classes based on props
  const baseClasses = [
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'border-2',
    'border-transparent',
    'outline-none',
    'relative',
    'overflow-hidden'
  ];

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-1.5', 'text-sm', 'min-h-[32px]'],
    md: ['px-4', 'py-2', 'text-base', 'min-h-[40px]'],
    lg: ['px-6', 'py-3', 'text-lg', 'min-h-[48px]']
  };

  // Variant classes with theme colors
  const variantClasses = {
    primary: [
      'bg-purple-600',
      'text-white',
      'border-purple-600',
      'hover:bg-purple-700',
      'hover:border-purple-700',
      'hover:-translate-y-0.5',
      'hover:shadow-md',
      'active:translate-y-0'
    ],
    secondary: [
      'bg-blue-500',
      'text-white',
      'border-blue-500',
      'hover:bg-blue-600',
      'hover:border-blue-600',
      'hover:-translate-y-0.5',
      'hover:shadow-md',
      'active:translate-y-0'
    ],
    outline: [
      'bg-transparent',
      'text-purple-600',
      'border-purple-600',
      'hover:bg-purple-600',
      'hover:text-white',
      'hover:-translate-y-0.5',
      'hover:shadow-md',
      'active:translate-y-0'
    ],
    ghost: [
      'bg-transparent',
      'text-gray-700',
      'border-transparent',
      'hover:bg-gray-50'
    ],
    success: [
      'bg-green-500',
      'text-white',
      'border-green-500',
      'hover:bg-green-600'
    ],
    error: [
      'bg-red-500',
      'text-white',
      'border-red-500',
      'hover:bg-red-600'
    ]
  };

  // State classes
  const stateClasses = [];
  if (disabled || loading) {
    stateClasses.push('opacity-60', 'cursor-not-allowed', 'pointer-events-none');
  } else {
    stateClasses.push('focus-visible:outline-2', 'focus-visible:outline-blue-500', 'focus-visible:outline-offset-2');
  }

  if (fullWidth) {
    stateClasses.push('w-full');
  }

  // Combine all classes
  const allClasses = [
    ...baseClasses,
    ...(sizeClasses[size] || sizeClasses.md),
    ...(variantClasses[variant] || variantClasses.primary),
    ...stateClasses,
    className
  ].join(' ');

  return (
    <button
      className={allClasses}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div
          className="animate-spin rounded-full border-2 border-current border-t-transparent mr-2"
          style={{
            width: size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px',
            height: size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px'
          }}
          aria-hidden="true"
        />
      )}

      {/* Icon (left) */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      )}

      {/* Button content */}
      <span>{children}</span>

      {/* Icon (right) */}
      {icon && iconPosition === 'right' && (
        <span className="ml-2" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};


// Predefined button variants for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;

export default Button;

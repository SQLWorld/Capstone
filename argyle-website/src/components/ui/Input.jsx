import React, { useState } from 'react';
import { baseStyles, componentSizes } from '../../styles/base-styles';
import { useTheme } from '../ThemeProvider';

// Enhanced Input Component with Design System & Accessibility
export const Input = ({
  label,
  type = 'text',
  size = 'md',
  variant = 'default',
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  // Base input classes
  const baseClasses = [
    'font-normal',
    'text-gray-900',
    'placeholder-gray-500',
    'border',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'outline-none',
    'bg-white'
  ];

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-2', 'text-sm'],
    md: ['px-4', 'py-3', 'text-base'],
    lg: ['px-4', 'py-4', 'text-lg']
  };

  // Variant classes
  const variantClasses = {
    default: ['border-gray-300', 'focus:border-blue-500', 'focus:ring-2', 'focus:ring-blue-500/20'],
    error: ['border-red-500', 'focus:border-red-500', 'focus:ring-2', 'focus:ring-red-500/20'],
    success: ['border-green-500', 'focus:border-green-500', 'focus:ring-2', 'focus:ring-green-500/20']
  };

  // State classes
  const stateClasses = [];
  if (disabled) {
    stateClasses.push('opacity-60', 'cursor-not-allowed', 'bg-gray-50');
  }

  if (error) {
    // Override variant to error if there's an error
    stateClasses.push(...variantClasses.error);
  } else {
    stateClasses.push(...(variantClasses[variant] || variantClasses.default));
  }

  // Icon spacing
  const iconSpacing = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

  // Full width
  const widthClass = fullWidth ? 'w-full' : '';

  // Combine all classes
  const inputClasses = [
    ...baseClasses,
    ...(sizeClasses[size] || sizeClasses.md),
    ...stateClasses,
    iconSpacing,
    widthClass,
    className
  ].join(' ');

  return (
    <div className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input wrapper with icons */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        {/* Input element */}
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          className={inputClasses}
          aria-describedby={
            error ? `${inputId}-error` :
            helperText ? `${inputId}-help` :
            undefined
          }
          aria-invalid={error ? 'true' : 'false'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Right icon */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-600 flex items-center"
          role="alert"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}

      {/* Helper text */}
      {helperText && !error && (
        <p
          id={`${inputId}-help`}
          className="mt-1 text-sm text-gray-500"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

// Specialized input variants
export const EmailInput = (props) => <Input type="email" {...props} />;
export const PasswordInput = (props) => <Input type="password" {...props} />;
export const SearchInput = ({ leftIcon, ...props }) => (
  <Input
    leftIcon={leftIcon || (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )}
    {...props}
  />
);

export default Input;







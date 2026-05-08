import React from 'react';
import { baseStyles, componentSizes } from '../../styles/base-styles';
import { useTheme } from '../ThemeProvider';

// Enhanced Card Component with Design System
export const Card = ({
  children,
  variant = 'default',
  size = 'md',
  hover = false,
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  // Base card classes
  const baseClasses = [
    'bg-white',
    'rounded-xl',
    'shadow-md',
    'border',
    'border-gray-100',
    'overflow-hidden',
    'transition-all',
    'duration-200'
  ];

  // Size classes
  const sizeClasses = {
    sm: ['p-4'],
    md: ['p-6'],
    lg: ['p-8']
  };

  // Variant classes
  const variantClasses = {
    default: [],
    elevated: ['shadow-lg', 'border-gray-200'],
    outlined: ['border-2', 'border-gray-200', 'shadow-none'],
    filled: ['bg-gray-50', 'border-gray-200']
  };

  // Hover effect
  const hoverClasses = hover ? [
    'hover:shadow-lg',
    'hover:-translate-y-1',
    'hover:border-gray-200'
  ] : [];

  // Combine all classes
  const allClasses = [
    ...baseClasses,
    ...(sizeClasses[size] || sizeClasses.md),
    ...(variantClasses[variant] || variantClasses.default),
    ...hoverClasses,
    className
  ].join(' ');

  return (
    <div className={allClasses} {...props}>
      {children}
    </div>
  );
};

// Card sub-components for better composition
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-gray-100 pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`border-t border-gray-100 pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

export default Card;







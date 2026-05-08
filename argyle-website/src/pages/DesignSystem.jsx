import React from 'react';
import { Button, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Input, EmailInput, SearchInput } from '../components/ui';
import { designTokens } from '../styles/design-tokens';
import { useTheme } from '../components/ThemeProvider';

const DesignSystem = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Argyle Design System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive design system ensuring consistency and quality across all components
          </p>
          <Button onClick={toggleTheme} variant="outline">
            Switch to {theme.name === 'Light Theme' ? 'Dark' : 'Light'} Theme
          </Button>
        </div>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(designTokens.colors).map(([category, values]) => {
              if (typeof values === 'string') {
                return (
                  <div key={category} className="text-center">
                    <div
                      className="w-20 h-20 rounded-lg mx-auto mb-3 shadow-md"
                      style={{ backgroundColor: values }}
                    />
                    <h3 className="font-semibold text-gray-900 capitalize">{category}</h3>
                    <p className="text-sm text-gray-500">{values}</p>
                  </div>
                );
              }

              if (typeof values === 'object' && category === 'text') {
                return Object.entries(values).map(([key, color]) => (
                  <div key={`${category}-${key}`} className="text-center">
                    <div
                      className="w-20 h-20 rounded-lg mx-auto mb-3 shadow-md border-2 border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <h3 className="font-semibold text-gray-900 capitalize">{key}</h3>
                    <p className="text-sm text-gray-500">{color}</p>
                  </div>
                ));
              }

              return null;
            })}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="space-y-6">
            {Object.entries(designTokens.typography.fontSize).slice(0, 6).map(([size, value]) => (
              <div key={size} className="border-b border-gray-200 pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-mono text-gray-500 w-16">{size}</span>
                  <span className="text-sm text-gray-500 w-16">{value}</span>
                  <p style={{ fontSize: value }} className="text-gray-900">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Components</h2>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="success">Success Button</Button>
              <Button variant="error">Error Button</Button>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>

            <div className="flex gap-4 mt-4">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>A basic card component with default styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">This is the content area of the card.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated" hover>
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>A card with enhanced shadow and hover effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">This card has hover animations and elevated shadows.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Form Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <Input
                label="Default Input"
                placeholder="Enter some text"
                helperText="This is a helpful hint"
              />

              <EmailInput
                label="Email Input"
                placeholder="Enter your email"
                required
              />

              <SearchInput
                label="Search Input"
                placeholder="Search for something"
              />

              <Input
                label="Input with Error"
                placeholder="This has an error"
                error="This field is required"
              />
            </div>
          </div>

          {/* Spacing Scale */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spacing Scale</h3>
            <div className="space-y-2">
              {Object.entries(designTokens.spacing).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="text-sm font-mono text-gray-500 w-12">{key}</span>
                  <span className="text-sm text-gray-500 w-16">{value}</span>
                  <div
                    className="bg-blue-500 rounded"
                    style={{ width: value, height: '20px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Guide</h2>
          <div className="prose max-w-none">
            <h3>How to Use the Design System</h3>
            <ol>
              <li><strong>Import components:</strong> Import from <code>../components/ui</code></li>
              <li><strong>Use design tokens:</strong> Import from <code>../styles/design-tokens</code></li>
              <li><strong>Access theme:</strong> Use <code>useTheme()</code> hook for dynamic theming</li>
              <li><strong>Consistent styling:</strong> All components follow the same design language</li>
            </ol>

            <h3>Benefits</h3>
            <ul>
              <li>✅ Consistent user experience across all pages</li>
              <li>✅ Faster development with reusable components</li>
              <li>✅ Easier maintenance and updates</li>
              <li>✅ Built-in accessibility features</li>
              <li>✅ Professional, enterprise-grade appearance</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;

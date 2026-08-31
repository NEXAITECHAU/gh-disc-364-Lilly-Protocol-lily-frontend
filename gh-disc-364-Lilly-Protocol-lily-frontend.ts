// src/tokens/colors.ts
export const colors = {
  // Semantic tokens
  primary: '#6366f1',
  primaryHover: '#4f46e5',
  secondary: '#10b981',
  background: '#ffffff',
  surface: '#f9fafb',
  textMain: '#111827',
  textMuted: '#6b7280',
  border: '#e5e7eb',
  error: '#ef4444',
  warning: '#f59e0b',
  success: '#10b981',
  
  // Dark mode variants (optional, can be extended via theme context)
  dark: {
    background: '#111827',
    surface: '#1f2937',
    textMain: '#f9fafb',
    textMuted: '#9ca3af',
    border: '#374151',
  },
} as const;

// Example usage in a scaffold component
// src/components/Button.tsx
import { colors } from '@/tokens/colors';

export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
  };

  const variants = {
    primary: {
      backgroundColor: colors.primary,
      color: '#ffffff',
      '&:hover': { backgroundColor: colors.primaryHover },
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${colors.border}`,
      color: colors.textMain,
    },
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  );
};
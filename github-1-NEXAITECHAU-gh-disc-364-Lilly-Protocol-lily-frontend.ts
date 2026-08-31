// src/lib/colors.ts
export const colors = {
  primary: '#1976d2',
  primaryDark: '#1565c0',
  secondary: '#9c27b0',
  background: '#ffffff',
  surface: '#f5f5f5',
  textPrimary: '#212121',
  textSecondary: '#757575',
  error: '#d32f2f',
  success: '#388e3c',
  warning: '#fbc02d',
  info: '#0288d1',
};

// Example usage in a scaffold component (e.g., src/components/Button.tsx)
import { colors } from '@/lib/colors';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const backgroundColor = variant === 'primary' ? colors.primary : colors.secondary;
  const textColor = colors.textPrimary;

  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
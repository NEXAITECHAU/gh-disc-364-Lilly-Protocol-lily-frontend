// src/lib/colors.ts
export const colors = {
  primary: '#0070f3',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  background: '#ffffff',
  text: '#212529',
  textMuted: '#6c757d',
  border: '#dee2e6',
};

export type ColorKey = keyof typeof colors;

// Example usage in a scaffold component (e.g., src/components/Button.tsx)
import { colors, ColorKey } from '@/lib/colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  colorKey?: ColorKey;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  colorKey,
  style,
  children,
  ...props
}) => {
  const backgroundColor = colorKey ? colors[colorKey] : colors[variant];
  
  return (
    <button
      style={{
        backgroundColor,
        color: backgroundColor === colors.light ? colors.dark : colors.light,
        border: `1px solid ${colors.border}`,
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
// src/lib/theme.ts
export const theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#9c27b0',
    background: '#ffffff',
    surface: '#f5f5f5',
    error: '#d32f2f',
    textPrimary: '#212121',
    textSecondary: '#757575',
    divider: '#e0e0e0',
  },
};

// Example scaffold component using the theme
// src/components/ScaffoldLayout.tsx
import { theme } from '@/lib/theme';
import React from 'react';

interface ScaffoldLayoutProps {
  children: React.ReactNode;
}

const ScaffoldLayout: React.FC<ScaffoldLayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.textPrimary }}>
      <header style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}>
        <h1>Header</h1>
      </header>
      <main style={{ padding: '1rem', backgroundColor: theme.colors.surface }}>
        {children}
      </main>
      <footer style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}>
        Footer
      </footer>
    </div>
  );
};

export default ScaffoldLayout;
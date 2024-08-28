import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/context/Themecontext';

const DummyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeContext', () => {
  it('toggles theme correctly', () => {
    render(
      <ThemeProvider>
        <DummyComponent />
      </ThemeProvider>
    );

    expect(screen.getByText('Current Theme: light')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle Theme'));

    expect(screen.getByText('Current Theme: dark')).toBeInTheDocument();
  });
});

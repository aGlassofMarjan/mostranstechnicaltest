import { render, screen, fireEvent } from '@testing-library/react';
import CharacterByLocation from '@/app/character-by-location/page';
import { ThemeProvider } from '@/context/Themecontext';

describe('CharacterByLocation Page', () => {
  beforeEach(() => {
    localStorage.setItem(
      'locations',
      JSON.stringify([
        {
          name: 'Earth',
          characters: [{ id: '1', name: 'Rick Sanchez' }],
        },
        {
          name: 'Mars',
          characters: [{ id: '2', name: 'Morty Smith' }],
        },
      ])
    );
  });

  it('renders list of locations', () => {
    render(
      <ThemeProvider>
        <CharacterByLocation />
      </ThemeProvider>
    );

    expect(screen.getByText('Earth')).toBeInTheDocument();
    expect(screen.getByText('Mars')).toBeInTheDocument();
  });

  it('displays characters when a location is selected', () => {
    render(
      <ThemeProvider>
        <CharacterByLocation />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Earth'));

    expect(screen.getByText('Characters in Earth')).toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import CharactersListPage from '@/app/character-list/page';
import { ThemeProvider } from '@/context/Themecontext';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS } from '@/app/character-list/page';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              status: 'Alive',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
            {
              id: '2',
              name: 'Morty Smith',
              status: 'Alive',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            },
          ],
        },
      },
    },
  },
];

describe('CharactersListPage', () => {
  it('renders character list correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider>
          <CharactersListPage />
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByAltText('Loading...')).toBeInTheDocument();

    const characterName = await screen.findByText('Rick Sanchez');
    expect(characterName).toBeInTheDocument();

    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });
});

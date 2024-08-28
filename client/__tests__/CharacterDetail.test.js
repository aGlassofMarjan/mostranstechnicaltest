import { render, screen, fireEvent } from '@testing-library/react';
import CharacterDetail from '@/app/character-detail/[id]/page';
import { ThemeProvider } from '@/context/Themecontext';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTER_DETAILS } from '@/app/character-detail/[id]/page';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_DETAILS,
      variables: { id: '1' },
    },
    result: {
      data: {
        character: {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          location: {
            name: 'Earth',
          },
        },
      },
    },
  },
];

describe('CharacterDetail Page', () => {
  it('renders character details correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider>
          <CharacterDetail params={{ id: '1' }} />
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByAltText('Loading...')).toBeInTheDocument();

    const characterName = await screen.findByText('Rick Sanchez');
    expect(characterName).toBeInTheDocument();

    expect(screen.getByText('Status: Alive')).toBeInTheDocument();
    expect(screen.getByText('Species: Human')).toBeInTheDocument();
  });

  it('assigns character to location', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider>
          <CharacterDetail params={{ id: '1' }} />
        </ThemeProvider>
      </MockedProvider>
    );

    await screen.findByText('Rick Sanchez');

    fireEvent.click(screen.getByText('Assign to Location'));

    expect(
      window.alert
    ).toHaveBeenCalledWith('Rick Sanchez has been assigned to Earth!');
  });
});

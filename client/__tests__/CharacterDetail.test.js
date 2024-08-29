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
          __typename: 'Character',
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          location: {
            __typename: 'Location',
            name: 'Citadel of Ricks',
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

    const loadingImage = screen.getByAltText('Loading');
    expect(loadingImage).toBeInTheDocument();
    expect(loadingImage).toHaveAttribute('src', '/loading.svg');
    expect(loadingImage).toHaveAttribute('width', '180');
    expect(loadingImage).toHaveAttribute('height', '37');

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

    // jest.spyOn(window, 'alert').mockImplementation(() => { });

    await screen.findByText('Rick Sanchez');

    fireEvent.click(screen.getByText('Assign to Location'));

    window.alert = jest.fn();

    expect(
      window.alert
    ).toHaveBeenCalledWith('Rick Sanchez has been assigned to Citadel of Ricks!');
  });
});

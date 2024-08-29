"use client"

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  console.log(data)

  if (loading)
    return (
      <span className="loading loading-spinner loading-lg"></span>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="container mx-auto p-4 pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.characters.results.map((character) => (
            <div key={character.id} className="card bg-base-100 rounded-md border border-primary">
              <figure>
                <img
                  src={character.image}
                  alt={character.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p>Status: {character.status}</p>
                <div className="card-actions justify-end">
                  <Link href={`/character-detail/${character.id}`}>
                    <button className="btn btn-primary">Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default CharacterList
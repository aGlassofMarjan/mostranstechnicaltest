"use client";

import Link from "next/link";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@/context/Themecontext";

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

const CharactersListPage = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { theme } = useTheme();

  if (loading)
    return (
      <Image src="/loading.svg" alt="Loading" width={180} height={37} />
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`container pt-4 ${theme === "light" ? "bg-light text-dark" : "bg-[##33383D] text-light"}`}>
      <h1>Characters List</h1>
      <div className="row">
        {data.characters.results.map((character) => (
          <div key={character.id} className="col-sm-6 col-md-4 mb-4">
            <div className={`card ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`}>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                loading="lazy" // lazy loading
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.status}</p>
                <Link href={`/character-detail/${character.id}`}>
                  <span className="btn btn-primary">View Details</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersListPage;

"use client";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        name
      }
    }
  }
`;

const CharacterDetail = ({ params }) => {
  const { id } = params; // get id from param
  const [locationName, setLocationName] = useState("");

  // fetch location name
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
    onCompleted: (data) => {
      setLocationName(data.character.location.name || "");
    },
  });

  if (loading) return (
    <>
      <Image src="/loading.svg" alt="Loading" width={180} height={37} />
    </>
  )
  if (error) return <p>Error: {error.message}</p>;

  const { name, status, species, gender, image } = data.character;

  const handleAssignLocation = () => {
    if (!locationName) return alert("Location name is missing.");

    const existingLocations = JSON.parse(localStorage.getItem("locations")) || [];

    const locationIndex = existingLocations.findIndex(
      (loc) => loc.name === locationName
    );

    if (locationIndex === -1) {
      const newLocation = {
        name: locationName,
        characters: [{ id, name }],
      };
      existingLocations.push(newLocation);
    } else {
      const location = existingLocations[locationIndex];
      if (!location.characters.some((char) => char.id === id)) {
        location.characters.push({ id, name });
      }
    }

    localStorage.setItem("locations", JSON.stringify(existingLocations));
    alert(`${name} has been assigned to ${locationName}!`);
  };

  return (
    <div className="container mt-4 character-detail">
      <h1>{name}</h1>
      <div className="character-info">
        <div className="character-image">
          <img src={image} alt={name} width={300} height={300} />
        </div>
        <div className="character-details">
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <div className="mt-4">
            <p>Current Location: {locationName || "None"}</p>
            <button className="btn btn-primary mt-3" onClick={handleAssignLocation}>
              Assign to Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;

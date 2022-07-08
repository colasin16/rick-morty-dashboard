import { useEffect, useState } from "react";
import { CharacterFetcher } from "../../application/CharacterFetcher";
import { Character } from "../../domain/Character";
import { HttpCharacterService } from "../../infrastructure/http/HttpCharacterService";

const CharactersPage = () => {
  const charactersFetcher = new CharacterFetcher(new HttpCharacterService());
  const [characters, setCharacters] = useState<Array<Character>>([]);

  const fetchAllCharacters = async () => {
    const characterList = await charactersFetcher.fetch();
    setCharacters(characterList);
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div>
            <div className="card">
              <img src={character.image} alt="Slick Morty" />
            </div>
            <div className="wrapper">
              <div className="section">
                <span>
                  <h2>{character.name}</h2>
                </span>
                <span className="status">
                  <span className="status__icon"></span> {character.status}
                </span>
              </div>
              <div className="section">
                <span className="text-gray">Last known location:</span>
                <span>{character.location}</span>
              </div>
              <div className="section">
                <span className="text-gray">First seen in:</span>
                <span>{character.origin}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersPage;

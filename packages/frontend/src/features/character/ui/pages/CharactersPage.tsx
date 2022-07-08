import "./CharactersPage.css";
import { useEffect, useState } from "react";
import { Card } from "../../../../_shared/ui/components/card/Card";
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
    <div className="character-list-container">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  );
};

export default CharactersPage;

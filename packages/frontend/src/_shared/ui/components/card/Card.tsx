import { Character } from "../../../../features/character/domain/Character";
import "./Card.css";
interface Props {
  character: Character;
}
export const Card = ({ character }: Props) => {
  return (
    <div className="card">
      <div className="card-image-contianer">
        <img src={character.image} alt="Slick Morty" />
      </div>
      <div className="card-content-container">
        <div className="section">
          <span>
            <h2>{character.name}</h2>
          </span>
          <span className="status">
            <span className={"status__icon " + character.status.toLowerCase()}></span>{" "}
            {character.status}
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
};

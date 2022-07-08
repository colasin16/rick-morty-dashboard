import { HttpCharacterStatus } from "./HttpCharacterStatus";

export interface HttpCharacter {
  id: number;
  name: string;
  status: HttpCharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

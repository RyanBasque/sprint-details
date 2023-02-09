import { CardType } from "./card";

export type SprintType = {
  name: string;
  dateCreated: Date | string;
  dateInit: Date | string;
  dateEnd: Date | string;
  id?: string;
  cards?: CardType[];
};

export type CardType = {
  name: string;
  dateCreated: string;
  timeEstimate?: string;
  number: string;
  conclusionDate?: string;
  id?: string;
  description?: string;
  subtasks?: CardType[] | null;
};

import { ref, set } from "firebase/database";

import { database } from "./firebase";

export const setData = (
  path: string,
  values: Record<string, unknown>
): void => {
  const databaseRef = ref(database, path);
  set(databaseRef, values);
};

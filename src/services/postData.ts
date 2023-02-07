import { push, ref, set } from "firebase/database";

import { database } from "./firebase";

export const postData = (
  values: Record<string, unknown>,
  path: string
): void => {
  const createNewRef = ref(database, path);
  const newRefPost = push(createNewRef);

  set(newRefPost, values);
};

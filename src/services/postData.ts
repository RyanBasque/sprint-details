import { push, ref, set } from "firebase/database";

import { database } from "./firebase";

export const postData = (
  path: string,
  values: Record<string, unknown>
): void => {
  const createNewRef = ref(database, path);
  const newRefPost = push(createNewRef);

  set(newRefPost, values);
};

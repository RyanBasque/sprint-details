import { ref, set } from "firebase/database";

import { database } from "services/firebase";

import { useAuth } from "context/AuthContext";

type UseGetDataReturn = {
  setData: (
    path: string,
    values: Record<string, unknown> | null,
    useFullPath?: boolean
  ) => void;
};

export const useSetData = (): UseGetDataReturn => {
  const { user } = useAuth();

  const setData = (
    path: string,
    values: Record<string, unknown> | null,
    useFullPath?: boolean
  ): void => {
    const databaseRef = ref(
      database,
      useFullPath ? path : `users/${user?.email}/${path}`
    );
    set(databaseRef, values);
  };

  return { setData };
};

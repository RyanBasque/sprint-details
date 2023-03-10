import { ref, set } from "firebase/database";

import { database } from "services/firebase";

import { useAuth } from "context/AuthContext";

import { useToast } from "hooks/useToast";

type UseGetDataReturn = {
  setData: (
    path: string,
    values: Record<string, unknown> | null,
    useFullPath?: boolean
  ) => void;
};

export const useSetData = (): UseGetDataReturn => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const setData = (
    path: string,
    values: Record<string, unknown> | null,
    useFullPath?: boolean
  ): void => {
    const databaseRef = ref(
      database,
      useFullPath ? path : `users/${user?.id}/${path}`
    );
    set(databaseRef, values).catch((err) => {
      const error = err as Error;

      showToast({
        type: "error",
        message: error.message,
      });
    });
  };

  return { setData };
};

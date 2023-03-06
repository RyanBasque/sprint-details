import { DataSnapshot, onValue, ref } from "firebase/database";

import { database } from "services/firebase";

import { useAuth } from "context/AuthContext";

type UseGetDataReturn = {
  getData: (
    path: string,
    callback: (snapshot: DataSnapshot) => void,
    useFullPath?: boolean,
    onlyOnce?: boolean
  ) => void;
};

export const useGetData = (): UseGetDataReturn => {
  const { user } = useAuth();

  const getData = (
    path: string,
    callback: (snapshot: DataSnapshot) => void,
    useFullPath = false,
    onlyOnce = false
  ): void => {
    let getDbRef = ref(database, `users/${user?.id}/${path}`);

    if (useFullPath) {
      getDbRef = ref(database, path);
    }

    onValue(
      getDbRef,
      (snapshot) => {
        callback(snapshot);
      },
      {
        onlyOnce,
      }
    );
  };

  return { getData };
};

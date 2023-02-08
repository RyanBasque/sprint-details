import { DataSnapshot, onValue, ref } from "firebase/database";

import { database } from "services/firebase";

type UseGetDataReturn = {
  getData: (path: string, callback: (snapshot: DataSnapshot) => void) => void;
};

export const useGetData = (): UseGetDataReturn => {
  const getData = (
    path: string,
    callback: (snapshot: DataSnapshot) => void
  ): void => {
    const getDbRef = ref(database, path);

    onValue(getDbRef, (snapshot) => {
      callback(snapshot);
    });
  };

  return { getData };
};

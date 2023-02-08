import { createContext, ReactNode, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "services/firebase";
import { setData } from "services/setData";

import { useToast } from "hooks/useToast";
import { useGetData } from "hooks/useGetData";

const provider = new GoogleAuthProvider();

type User = {
  id: string;
  name: string | null;
  avatar: string | null;
  email: string | null;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const { showToast } = useToast();
  const { getData } = useGetData();

  const [user, setUser] = useState<User>();

  const hasUserInDatabase = (filteredUser: User): void => {
    getData(`users/${filteredUser.id}`, (snapshot) => {
      const userExists = snapshot.exists();

      if (!userExists) {
        createUser(filteredUser);
        return;
      }
    });
  };

  const createUser = (filteredUser: User): void => {
    setData(`users/${filteredUser.id}`, filteredUser);
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const { user: userData } = await signInWithPopup(auth, provider);

      if (userData) {
        const filteredUser = {
          avatar: userData.photoURL,
          id: userData.uid,
          name: userData.displayName,
          email: userData.email,
        };

        hasUserInDatabase(filteredUser);
        setUser(filteredUser);

        return;
      }

      showToast({ message: "Login missing data", type: "error" });
    } catch (err) {
      const error = err as Error;
      showToast({ message: error.message, type: "error" });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = (): AuthContextType => useContext(AuthContext);

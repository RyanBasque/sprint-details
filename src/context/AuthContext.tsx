import { createContext, ReactNode, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../services/firebase";

const provider = new GoogleAuthProvider();

type User = {
  id: string;
  name: string | null;
  avatar: string | null;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  const signInWithGoogle = async () => {
    try {
      const { user: userData } = await signInWithPopup(auth, provider);

      if (userData) {
        setUser({
          avatar: userData.photoURL,
          id: userData.uid,
          name: userData.displayName,
        });

        return;
      }

      throw new Error("Login missing data");
    } catch (error) {
      console.error(error);
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

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const payload = useMemo(() => {
    return {
      isUserLoggedIn,
      setIsUserLoggedIn,
    };
  }, [isUserLoggedIn]);

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

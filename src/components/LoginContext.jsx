import {createContext, useState} from "react";

const LoginContext = createContext();

function LoginProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt-token'));

  return <LoginContext.Provider value={{isLoggedIn, onSetIsLoggedIn: setIsLoggedIn}}>
    {children}
  </LoginContext.Provider>;
}

export {LoginProvider, LoginContext};

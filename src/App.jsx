import './App.css'
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Careers from "./components/Careers.jsx";
import Homepage from "./components/Homepage.jsx";
import Login from "./components/Login.jsx";
import SignIn from "./components/SignIn.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {LoginProvider} from "./components/LoginContext.jsx";

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt-token'));

  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage isLoggedIn={isLoggedIn} onSetIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="login" element={<Login isLoggedIn={isLoggedIn} onSetIsLoggedIn={setIsLoggedIn} />} />
            <Route path="signin" element={<SignIn isLoggedIn={isLoggedIn} onSetIsLoggedIn={setIsLoggedIn} />} />
            <Route path="careers" element={<Careers isLoggedIn={isLoggedIn} onSetIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </QueryClientProvider>
  );
}

export default App

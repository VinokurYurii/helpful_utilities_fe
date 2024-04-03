import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Careers from "./components/Careers.jsx";
import Homepage from "./components/Homepage.jsx";
import Login from "./components/Login.jsx";
import SignIn from "./components/SignIn.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      axios.get('http://localhost:3000/api/users').then(function (response) {
        setUsers(response.data);
      })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }

    getUsers();
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
    // <>
    //
    //   <Grid container spacing={2}>
    //
    //     {/*<Grid item xs={8}>*/}
    //     {/*  <div>*/}
    //     {/*    <label>*/}
    //     {/*      Material 3*/}
    //     {/*      <input type="checkbox" className="md-checkbox" checked={true}/>*/}
    //     {/*      <md-checkbox checked={true}/>*/}
    //     {/*    </label>*/}
    //     {/*    <md-outlined-button>Back</md-outlined-button>*/}
    //     {/*    <md-filled-button>Next</md-filled-button>*/}
    //     {/*    <ul>*/}
    //     {/*      {users.map((user) => (*/}
    //     {/*        <li key={user.id}>*/}
    //     {/*          {user.first_name}*/}
    //     {/*        </li>))}*/}
    //     {/*    </ul>*/}
    //     {/*    Vite App*/}
    //     {/*  </div>*/}
    //     {/*</Grid>*/}
    //   </Grid>
    // </>
  )
  ;
}

export default App

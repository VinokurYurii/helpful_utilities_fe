import './App.css'
import {useEffect, useState} from "react";
import Main from "./components/sidebar/Main.jsx";
import axios from "axios";

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
    <div>
      <Main/>
      <label>
        Material 3
        <input type="checkbox" className="md-checkbox" checked={true}/>
        <md-checkbox checked={true}/>
      </label>
      <md-outlined-button>Back</md-outlined-button>
      <md-filled-button>Next</md-filled-button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name}
          </li>))}
      </ul>
      Vite App
    </div>
  );
}

export default App

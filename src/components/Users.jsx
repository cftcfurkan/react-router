import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
  
  function Users() {
    const { isLoading, setIsLoding } = useState(true);
    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data)
    .finally(() => setIsLoding(false))
    );
  },[])

    return (
    <div>
      <h1> Users </h1>
      {isLoading && <div>Loading...</div>}
      <ul>
        {
          users.map( (user) => (
            <button key={user.id} className="user-button">
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </button>
          ))
        }
      </ul>  
    </div>
    );
  }
  
  export default Users
  
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
        axios('/api/users').then(value => value.data).then(value => setUsers(value))
  }, [])

    return (
        <div>
            <h1>Docker!!!!</h1>
            {users.map(user=><div key={user._id}>{user.name}</div> )}
        </div>
    );
};

export {App};

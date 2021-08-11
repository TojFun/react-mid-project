import { useEffect, useState } from "react";
import getData from "../services/jph";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="search-bar">
        <label htmlFor="search-input">Search: </label>

        <input
          value={search}
          type="text"
          id="search-input"
          onChange={({ target: { value } }) => setSearch(value)}
        />

        <button onClick={() => {}}>Add</button>
      </div>

      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

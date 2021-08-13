import { useEffect, useState } from "react";
import getData from "../services/jph";
import User from "./User";

import { Grid, Button } from "@material-ui/core";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <label htmlFor="search-input">Search: </label>
        </Grid>
        <Grid item xs={8}>
          <input
            value={search}
            type="text"
            id="search-input"
            onChange={({ target: { value } }) => setSearch(value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button color="primary" variant="contained" onClick={() => {}}>
            Add
          </Button>
        </Grid>

        {users.map((user) => (
          <Grid item key={user.id} xs={6}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;

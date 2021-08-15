import { useEffect, useState } from "react";
import getData from "../services/jph";
import User from "./User";

import { Grid, Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const classes = useStyles();

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  return (
    <Grid container>
      <Grid item xs={9}>
        <TextField
          label="Search"
          value={search}
          type="text"
          id="search-input"
          onChange={({ target: { value } }) => setSearch(value)}
          variant="filled"
          fullWidth
        />
      </Grid>

      <Grid item xs={1} />

      <Grid item xs={2} className={classes.alignCenter}>
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
  );
};

export default Users;

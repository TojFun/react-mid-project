import { useEffect, useState } from "react";
import getData from "../services/jph";
import User from "./User";

import { Grid, Button, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  addButtonWrapper: { display: "flex" },
  addButton: { minWidth: "50%", marginLeft: "auto", marginRight: "auto" },
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const classes = useStyles();

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item md={10} xs={9}>
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

      <Grid item md={2} xs={3} className={classes.addButtonWrapper}>
        <Button
          className={classes.addButton}
          color="primary"
          variant="contained"
          onClick={() => {}}
        >
          Add
        </Button>
      </Grid>

      {users.map((user) => (
        <Grid item key={user.id} lg={3} md={4} sm={6}>
          <User user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;

import { useEffect, useState } from "react";
import getData from "../services/jph";

import User from "./User";
import SearchBar from "./SearchBar";

import Grid from "@material-ui/core/Grid";
import TodosAndPosts from "./TodosAndPosts";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  relative: { position: "relative" },

  stickToTop: {
    position: "fixed",
  },
  nav: {
    position: "fixed",
    top: 0,
    width: "96vw",
    backgroundColor: "white",
  },
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    getData().then((data) => setUsers(data));
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <SearchBar search={search} setSearch={setSearch} />
      </Grid>

      <Grid item xs={selectedUser == null ? 12 : 6}>
        <Grid container>
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <Grid
                item
                key={user.id}
                lg={selectedUser == null ? 3 : 6}
                md={selectedUser == null ? 4 : 6}
                sm={selectedUser == null ? 6 : 12}
              >
                <User
                  user={user}
                  setUser={(newData) =>
                    setUsers(
                      users.map((currentUser) =>
                        currentUser.id === user.id
                          ? {
                              ...currentUser,
                              name: newData.name,
                              email: newData.email,
                              address: {
                                ...currentUser.address,
                                ...newData.address,
                              },
                            }
                          : currentUser
                      )
                    )
                  }
                  deleteUser={() =>
                    setUsers(
                      users.filter((currentUser) => currentUser.id !== user.id)
                    )
                  }
                  selectUser={() =>
                    setSelectedUser(selectedUser === user.id ? null : user.id)
                  }
                  isSelected={selectedUser === user.id}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>

      {selectedUser != null && (
        <Grid item xs={6}>
          <TodosAndPosts />
        </Grid>
      )}
    </Grid>
  );
};

export default Users;

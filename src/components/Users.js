import { useEffect, useState } from "react";
import getData from "../services/jph";

import User from "./User";
import SearchBar from "./SearchBar";

import Grid from "@material-ui/core/Grid";
import TodosAndPosts from "./TodosAndPosts";
import { Box, Typography } from "@material-ui/core";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [error, setError] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getData().then(({ ok, data, error }) => {
      if (ok) return setUsers(data);

      setError(error);
    });
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <SearchBar search={search} setSearch={setSearch} />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <Box
            justifyContent="center"
            width="100vw"
            display="flex"
            marginTop="5%"
          >
            <Typography variant="h2">{error.message}</Typography>
          </Box>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sm={selectedUser == null ? 12 : 6}
          order={{ sm: 1, xs: 2 }}
        >
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
                        users.filter(
                          (currentUser) => currentUser.id !== user.id
                        )
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
      )}

      {selectedUser != null && (
        <Grid item xs={12} order={{ sm: 2, xs: 1 }} sm={6}>
          <TodosAndPosts
            user={users.find(({ id }) => id === selectedUser)}
            setUser={(user) => {
              const newUsers = [...users];

              newUsers.splice(
                users.findIndex(({ id }) => id === selectedUser),
                1,
                user
              );

              setUsers(newUsers);
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Users;

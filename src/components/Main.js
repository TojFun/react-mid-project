import { useEffect, useState } from "react";
import getData from "../services/jph";

import Users from "./Users/Users";
import SearchBar from "./SearchBar";

import Grid from "@material-ui/core/Grid";
import TodosAndPosts from "./UserLists/TodosAndPosts";

import ErrorBox from "./ErrorBox";
import AddUser from "./Users/AddUser";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [addUserMode, setAddUserMode] = useState(false);

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
        <SearchBar
          search={search}
          setSearch={setSearch}
          addMode={() => {
            setAddUserMode(true);
            setSelectedUser(null);
          }}
        />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <ErrorBox>{error.message}</ErrorBox>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sm={selectedUser == null && !addUserMode ? 12 : 6}
          order={{ sm: 1, xs: 2 }}
        >
          <Users
            users={users}
            setUsers={setUsers}
            selectedUser={selectedUser}
            selectUser={(user) => {
              setSelectedUser(selectedUser === user.id ? null : user.id);
              setAddUserMode(false);
            }}
            search={(user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase())
            }
            addMode={addUserMode}
          />
        </Grid>
      )}

      {selectedUser != null ? (
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
      ) : (
        addUserMode && (
          <Grid item xs={12} sm={6} order={{ sm: 2, xs: 1 }}>
            <AddUser
              cancel={() => setAddUserMode(false)}
              addUser={(name, email) => {
                setUsers([
                  ...users,
                  {
                    id: users[users.length - 1].id + 1,
                    name,
                    username: "",
                    email,
                    address: {
                      street: "",
                      suite: "",
                      city: "",
                      zipcode: "",
                      geo: { lat: "", lng: "" },
                    },

                    phone: "",
                    website: "",

                    company: {
                      name: "",
                      catchPhrase: "",
                      bs: "",
                    },

                    todos: [],
                    posts: [],
                  },
                ]);

                setAddUserMode(false);
              }}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Main;

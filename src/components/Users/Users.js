import { Grid } from "@material-ui/core";
import User from "./User";

const Users = ({ users, setUsers, search, selectedUser, selectUser }) => (
  <Grid container>
    {users.filter(search).map((user) => (
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
            setUsers(users.filter((currentUser) => currentUser.id !== user.id))
          }
          selectUser={() =>
            selectUser(selectedUser === user.id ? null : user.id)
          }
          isSelected={selectedUser === user.id}
        />
      </Grid>
    ))}
  </Grid>
);
export default Users;

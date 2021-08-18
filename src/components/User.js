import { useState } from "react";

import UserMoreData from "./UserMoreData";

import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  user: { padding: "2%" },

  mb: {
    marginBottom: "1vh",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const User = ({ user, setUser, deleteUser }) => {
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  });

  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();

    setUser(userData);
  };

  return (
    <Box
      border={2}
      borderColor={user.todos.find((todo) => !todo.completed) ? "red" : "green"}
    >
      <Card className={classes.user}>
        <form onSubmit={submit}>
          <CardContent>
            <Typography variant="h5" className={classes.mb}>
              User ID: {user.id}
            </Typography>

            <TextField
              variant="outlined"
              className={classes.mb}
              label="Name"
              type="text"
              value={userData.name}
              onChange={({ target: { value } }) =>
                setUserData({ ...userData, name: value })
              }
              fullWidth
            />

            <TextField
              variant="outlined"
              className={classes.mb}
              label="Email"
              type="email"
              value={userData.email}
              onChange={({ target: { value } }) =>
                setUserData({ ...userData, email: value })
              }
              fullWidth
            />
          </CardContent>

          <CardActions>
            <Grid container>
              <Grid item xs={12} className={classes.actions}>
                <Button type="submit">Update</Button>
                <Button onClick={deleteUser}>Delete</Button>
              </Grid>
              <Grid item xs={12}>
                <UserMoreData
                  address={userData.address}
                  setAddress={(data) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, ...data },
                    })
                  }
                />
              </Grid>
            </Grid>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
};

export default User;

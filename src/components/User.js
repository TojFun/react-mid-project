import { useState } from "react";

import UserMoreData from "./UserMoreData";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  user: { padding: "2%", margin: "2%" },

  mb: {
    marginBottom: "1vh",
  },

  onHover: { cursor: "pointer" },

  actions: {
    display: "flex",
    justifyContent: "space-between",
  },

  selected: {
    backgroundColor: "#ed9a6d",
  },
});

const User = ({ user, setUser, deleteUser, selectUser, isSelected }) => {
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  });

  const [isHovered, setIsHovered] = useState(false);

  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();

    setUser(userData);
  };

  return (
    <Card className={`${isSelected && classes.selected} ${classes.user}`}>
      <form onSubmit={submit}>
        <CardContent>
          {user.todos.find((todo) => !todo.completed) ? (
            <Typography color="error">
              You have uncompleted tasks left.
            </Typography>
          ) : (
            <Typography color="textPrimary">
              You have completed all you tasks.
            </Typography>
          )}

          <Typography variant="h5" className={classes.mb}>
            <span
              className={isHovered ? classes.onHover : undefined}
              onClick={selectUser}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              User ID: {user.id}
            </span>
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
                isUserSelected={isSelected}
              />
            </Grid>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default User;

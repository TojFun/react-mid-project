import { useState } from "react";

import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  user: { padding: "2%" },

  mb: {
    marginBottom: "1vh",
  },

  actions: {
    justifyContent: "space-between",
  },
});

const User = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const classes = useStyles();

  return (
    <Card className={classes.user}>
      <CardContent>
        <Typography>ID: {user.id}</Typography>

        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            className={classes.mb}
            label="Name"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            fullWidth
          />

          <TextField
            className={classes.mb}
            label="Email"
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            fullWidth
          />
        </form>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button>Other Data</Button>
        <Button>Update</Button>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default User;

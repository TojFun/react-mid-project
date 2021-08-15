import { useState } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

const User = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <Grid container style={{ marginTop: "2vh", marginBottom: "2vh" }}>
      <Grid item xs={12}>
        <Typography>ID: {user.id}</Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default User;

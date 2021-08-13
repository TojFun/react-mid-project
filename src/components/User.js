import { useState } from "react";
import { FormLabel, Grid } from "@material-ui/core";

const User = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>ID: {user.id}</div>

      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container>
          <div>
            <Grid item>
              <label>Name: </label>
            </Grid>

            <Grid item>
              <input
                type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
            </Grid>
          </div>
          <div>
            <Grid item>
              <FormLabel>Email: </FormLabel>
            </Grid>
            <Grid item>
              <input
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Grid>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default User;

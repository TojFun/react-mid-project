import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const AddUser = ({ cancel, addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Card sx={{ margin: "1%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser(name, email);
        }}
      >
        <CardContent>
          <Typography variant="h5" mb="1%">
            Add User:
          </Typography>

          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            fullWidth
            sx={{ mb: "1.5%" }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            fullWidth
          />
        </CardContent>

        <CardActions>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add
          </Button>

          <Button variant="contained" color="error" fullWidth onClick={cancel}>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AddUser;

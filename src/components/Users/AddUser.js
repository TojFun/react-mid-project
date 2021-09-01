import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const buttonSpace = "1.6%";

const AddUser = ({ cancel, addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Card sx={{ margin: "1%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={cancel}
            sx={{ mr: buttonSpace, ml: buttonSpace }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => addUser(name, email)}
            sx={{ ml: buttonSpace, mr: buttonSpace }}
          >
            Add
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AddUser;

import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

const AddItem = ({ add, cancel, name }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        add(title, body);

        cancel(false);
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Add a {name}</Typography>
        </Grid>

        <Grid item xs={name === "Post" ? 6 : 12}>
          <TextField
            value={title}
            variant="outlined"
            label="Title"
            fullWidth
            required
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </Grid>

        {name === "Post" && (
          <Grid item xs={6}>
            <TextField
              value={body}
              variant="outlined"
              label="Body"
              fullWidth
              required
              onChange={({ target: { value } }) => setBody(value)}
            />
          </Grid>
        )}

        <Grid
          item
          xs={12}
          justifyContent="space-around"
          display="flex"
          marginTop="1.5%"
        >
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ marginRight: "1%" }}
          >
            Add
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={cancel}
            fullWidth
            sx={{ marginLeft: "1%" }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddItem;

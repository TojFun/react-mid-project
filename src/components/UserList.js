import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { FixedSizeList } from "react-window";

const UserList = ({ list, listSize, name, itemName, children, addItem }) => {
  const [addMode, setAddMode] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <Card>
      <CardContent>
        {addMode ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              addItem(title, body);

              setAddMode(false);
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5">Add a {itemName}</Typography>
              </Grid>

              <Grid item xs={itemName === "Post" ? 6 : 12}>
                <TextField
                  value={title}
                  variant="outlined"
                  label="Title"
                  fullWidth
                  required
                  onChange={({ target: { value } }) => setTitle(value)}
                />
              </Grid>

              {itemName === "Post" && (
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
                  onClick={() => setAddMode(false)}
                  fullWidth
                  sx={{ marginLeft: "1%" }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Grid container>
            <Grid item xs={12} mb="2%">
              <Grid container justifyContent="space-between">
                <Grid item sm={8}>
                  <Typography variant="h5" color="textPrimary">
                    {`${name}'s ${itemName}s`}
                  </Typography>
                </Grid>
                <Grid item sm={4} paddingLeft="2%" paddingRight="2%">
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => setAddMode(true)}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <FixedSizeList
                  height={listSize}
                  width="100%"
                  itemSize={100}
                  itemCount={list.length}
                >
                  {children}
                </FixedSizeList>
              </Card>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default UserList;

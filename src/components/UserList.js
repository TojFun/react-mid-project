import { Button, Grid, Typography } from "@material-ui/core";
import { FixedSizeList } from "react-window";

const UserList = ({ list, listSize, title, children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item sm={8}>
            <Typography variant="h5" color="textPrimary">
              {title}
            </Typography>
          </Grid>
          <Grid item sm={4} paddingLeft="2%" paddingRight="2%">
            <Button variant="contained" color="secondary" fullWidth>
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FixedSizeList
          height={listSize}
          width="100%"
          itemSize={100}
          itemCount={list.length}
        >
          {children}
        </FixedSizeList>
      </Grid>
    </Grid>
  );
};

export default UserList;

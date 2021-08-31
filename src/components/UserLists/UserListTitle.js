import { Button, Grid, Typography } from "@material-ui/core";

const UserListTitle = ({ children, openAddPanel }) => (
  <Grid container justifyContent="space-between">
    <Grid item sm={8}>
      <Typography variant="h5" color="textPrimary">
        {children}
      </Typography>
    </Grid>
    <Grid item sm={4} paddingLeft="2%" paddingRight="2%">
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={openAddPanel}
      >
        Add
      </Button>
    </Grid>
  </Grid>
);
export default UserListTitle;

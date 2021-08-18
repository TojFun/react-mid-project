import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";

function Todos({ todos, setTodos, name }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" color="textPrimary">
              {name}'s To-Dos
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Todos;

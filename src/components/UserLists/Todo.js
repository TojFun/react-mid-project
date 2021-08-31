import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Todo = ({ todo, check }) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item md={8} sm={6} xs={12}>
            <Typography>Title: {todo.title}</Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed}
                  inputProps={{ "aria-label": "primary checkbox" }}
                  onChange={({ target: { checked } }) => check(checked)}
                />
              }
              label="Completed"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Todo;

import { Button, Grid, TextField } from "@material-ui/core";

const styles = {
  addButtonWrapper: { display: "flex" },
  addButton: { minWidth: "50%", marginLeft: "auto", marginRight: "auto" },
};

const SearchBar = ({ search, setSearch, addMode }) => {
  return (
    <Grid container>
      <Grid item md={10} xs={9}>
        <TextField
          label="Search"
          value={search}
          type="text"
          id="search-input"
          onChange={({ target: { value } }) => setSearch(value)}
          variant="filled"
          fullWidth
        />
      </Grid>

      <Grid item md={2} xs={3} sx={{ ...styles.addButtonWrapper }}>
        <Button
          sx={{ ...styles.addButton }}
          color="primary"
          variant="contained"
          onClick={addMode}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;

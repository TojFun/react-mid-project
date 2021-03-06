import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  mb: {
    marginBottom: "1vh",
  },

  selected: {
    backgroundColor: "#ffbd99",
  },
};

function UserMoreData({ address, setAddress, isUserSelected }) {
  return (
    <Accordion sx={isUserSelected ? { ...styles.selected } : undefined}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>More Data</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              sx={{ ...styles.mb }}
              label="Street"
              type="text"
              value={address.street}
              onChange={({ target: { value } }) =>
                setAddress({ street: value })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              sx={{ ...styles.mb }}
              label="City"
              type="text"
              value={address.city}
              onChange={({ target: { value } }) => setAddress({ city: value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              sx={{ ...styles.mb }}
              label="Zip Code"
              type="text"
              value={address.zipcode}
              onChange={({ target: { value } }) =>
                setAddress({ zipcode: value })
              }
              fullWidth
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserMoreData;

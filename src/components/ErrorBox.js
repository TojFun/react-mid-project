import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";

const ErrorBox = ({ children }) => (
  <Box justifyContent="center" width="100vw" display="flex" marginTop="5%">
    <Typography variant="h2">{children}</Typography>
  </Box>
);
export default ErrorBox;

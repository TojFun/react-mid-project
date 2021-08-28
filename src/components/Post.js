import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

import ExpandMore from "@material-ui/icons/ExpandMore";

const Post = ({ post }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={"post" + post.id + "-content"}
        id={"post" + post.id + "header"}
      >
        <Typography variant="body1">{post.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{post.body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Post;

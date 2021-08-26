import { Card, CardContent, Typography } from "@material-ui/core";

const Post = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography>Title: {post.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;

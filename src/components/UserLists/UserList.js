import { Card, CardContent, Grid } from "@material-ui/core";
import { useState } from "react";
import { FixedSizeList } from "react-window";
import AddItem from "./AddItem";
import UserListTitle from "./UserListTitle";

const UserList = ({ list, listSize, name, itemName, children, addItem }) => {
  const [addMode, setAddMode] = useState(false);

  return (
    <Card>
      <CardContent>
        {addMode ? (
          <AddItem
            add={addItem}
            cancel={() => setAddMode(false)}
            name={itemName}
          />
        ) : (
          <Grid container>
            <Grid item xs={12} mb="2%">
              <UserListTitle openAddPanel={() => setAddMode(true)}>
                {`${name}'s ${itemName}s`}
              </UserListTitle>
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

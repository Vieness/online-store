import React from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";

const AdminListType = () => {
  return (
    <Container>
      <Grid>
        <TextField id="outlined-basic" label="Add Type" variant="outlined"/>
        <Grid sx={{mt:2}}>
          <Button sx={{mr:7}} color="success" variant="outlined">Add</Button>
          <Button  color="error" variant="outlined">Cancel</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminListType;
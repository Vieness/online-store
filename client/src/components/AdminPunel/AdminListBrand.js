import React, {useState} from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import {createBrand} from "../../http/brandAPI";

const AdminListBrand = () => {
  const [value, setValue] = useState('')
  const fetchAddBrands = () => {
    createBrand({name: value}).then(data => setValue(''))
  }

  return (
    <Container>
      <Grid>
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          id="outlined-basic"
          label="Add Brand"
          variant="outlined"/>
        <Grid sx={{mt: 2}}>
          <Button onClick={fetchAddBrands} sx={{mr: 7}} color="success" variant="outlined">Add</Button>
          <Button color="error" variant="outlined">Cancel</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminListBrand;
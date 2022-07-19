import React, {useContext, useState} from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import {createType} from "../../http/typeAPI";
import {observer} from "mobx-react-lite";

const AdminListType = observer(({addType}) => {
  const [value, setValue] = useState('')
  console.log(value);
  const fetchAddType = () => {
    createType({name: value}).then(data => setValue(''))
  }

  return (
    <Container>
      <Grid>
        <TextField value={value}
                   id="outlined-basic"
                   label="Add Type"
                   variant="outlined"
                   onChange={e => setValue(e.target.value)}
        />
        <Grid sx={{mt: 2}}>
          <Button onClick={fetchAddType} sx={{mr: 7}} color="success" variant="outlined">Add</Button>
          <Button  color="error" variant="outlined">Cancel</Button>
        </Grid>
      </Grid>
    </Container>
  );
});

export default AdminListType;
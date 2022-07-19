import React, {useContext, useState} from 'react';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {Context} from "../../index";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {observer} from "mobx-react-lite";

const AdminListProduct = observer(() => {
  const {device} = useContext(Context)
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [info, setInfo] = useState([])

  const handleChangeType = (event) => {
    setType(event.target.value);

  };

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);

  };
  const addInfo = () => {
    setInfo([...info, {title: '', desc: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Container>
      <Grid>
        <Box>
          <FormControl required sx={{mr: 1, minWidth: 100}}>
            <InputLabel id="demo-simple-select-required-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={type}
              label="Type *"
              onChange={handleChangeType}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {device.types.map(type =>
                <MenuItem key={type.id} value={type.name}>{type.name}</MenuItem>
              )}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl required sx={{minWidth: 100}}>
            <InputLabel id="demo-simple-select-required-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={brand}
              label="Brand *"
              onChange={handleChangeBrand}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {device.brands.map(brand =>
                <MenuItem key={brand.id} value={brand.name}>{brand.name}</MenuItem>
              )}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </Box>
        <Box
          sx={{mt: 1, mb: 2}}
        >
          <TextField sx={{mt: 1, mr: 1}} id="outlined-basic" label="Name product" variant="outlined"/>
          <TextField sx={{mt: 1, mr: 1}} id="outlined-basic" label="Price" variant="outlined"/>
          <Button
            sx={{mt: 1}}
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file"
              hidden
            />
          </Button>
        </Box>
        <Divider/>
        <Box sx={{mt: 2, mb: 2}}>
          <Button
            variant={"outlined"}
            onClick={addInfo}
          >
            Add Property
          </Button>
          {info.map(info =>
            <Box key={info.number}>
              <TextField sx={{mt: 1, mr: 1}} id="outlined-basic" label="Name Property" variant="outlined"/>
              <TextField sx={{mt: 1, mr: 1}} id="outlined-basic" label="Description" variant="outlined"/>
              <Button
                onClick={() => removeInfo(info.number)}
                sx={{mt: 1, mr: 1}}
                variant={"outlined"}
                color={'error'}
              >
                Delete
              </Button>
            </Box>
          )}
        </Box>
        <Divider/>
        <Box sx={{mt: 2}}>
          <Button sx={{mr: 7}} color="success" variant="outlined">Add</Button>
          <Button color="error" variant="outlined">Cancel</Button>
        </Box>
      </Grid>
    </Container>
  );
});

export default AdminListProduct;
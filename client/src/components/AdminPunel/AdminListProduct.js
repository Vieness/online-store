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
import {useEffect} from "react";
import {fetchTypes} from "../../http/typeAPI";
import {fetchBrand} from "../../http/brandAPI";
import {createDevices, fetchDevices} from "../../http/deviceAPI";

const AdminListProduct = observer(({onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = e => {

    setFile(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedType.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))


    createDevices(formData).then(data=> onHide())
    console.log(formData)
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
              value={device.type}
              label="Type *"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {device.types.map(type =>
                <MenuItem
                  key={type.id}
                  value={type.name}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name}
                </MenuItem>
              )}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl required sx={{minWidth: 100}}>
            <InputLabel id="demo-simple-select-required-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={device.brand}
              label="Brand *"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {device.brands.map(brand =>
                <MenuItem
                  key={brand.id}
                  value={brand.name}
                  onClick={() => device.setSelectedBrand(brand)}

                >
                  {brand.name}
                </MenuItem>
              )}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </Box>
        <Box
          sx={{mt: 1, mb: 2}}
        >
          <TextField
            sx={{mt: 1, mr: 1}}
            id="outlined-basic"
            label="Name product"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            sx={{mt: 1, mr: 1}}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Button
            sx={{mt: 1}}
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={selectFile}
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
              <TextField
                sx={{mt: 1, mr: 1}}
                id="outlined-basic"
                label="Name Property"
                variant="outlined"
                value={info.title}
                onChange={(e) => changeInfo('title', e.target.value, info.number)}
              />
              <TextField
                sx={{mt: 1, mr: 1}}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={info.description}
                onChange={(e) => changeInfo('description', e.target.value, info.number)}
              />
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
          <Button onClick={addDevice} sx={{mr: 7}} color="success" variant="outlined">Add</Button>
          <Button color="error" variant="outlined">Cancel</Button>
        </Box>
      </Grid>
    </Container>
  );
});

export default AdminListProduct;
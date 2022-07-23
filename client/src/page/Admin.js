import React, {useState} from 'react';
import {Container, Grid, ListItemText} from "@mui/material";
import AdminListType from "../components/AdminPunel/AdminListType";
import AdminListProduct from "../components/AdminPunel/AdminListProduct";
import AdminListBrand from "../components/AdminPunel/AdminListBrand";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
  const [addProduct, setAddProduct] = useState(true)
  const [addType, setAddType] = useState(false)
  const [addBrand, setAddBrand] = useState(false)


  const handleClickProduct = (e) => {
    e.preventDefault()
    setAddProduct((current) => !current)
  }
  const handleClickBrand = (e) => {
    e.preventDefault()
    setAddBrand((current) => !current)
  }
  const handleClickType = (e) => {
    e.preventDefault()
    setAddType((current) => !current)
  }

  return (
    <Container>
      <Grid sx={{mt: 3, mb: 2}} container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <nav aria-label="main mailbox folders">
              <ListItem disablePadding>
                <ListItemButton onClick={handleClickProduct}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'Add Product'}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClickBrand}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'Add Brand'}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClickType}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'Add Type'}/>
                </ListItemButton>
              </ListItem>
            </nav>
            <Divider/>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Grid> {addProduct && <AdminListProduct onHide={setAddProduct}/>}</Grid>
          <Grid sx={{mt: 2}}> {addBrand && <AdminListBrand onHide={setAddBrand}/>}</Grid>
          <Grid sx={{mt: 2}}> {addType && <AdminListType onHide={setAddType}/>}</Grid>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Admin;
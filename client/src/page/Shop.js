import React, {useContext, useEffect} from 'react';
import {Container, CssBaseline, Grid} from "@mui/material";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrand} from "../http/brandAPI";
import {fetchTypes} from "../http/typeAPI";
import {fetchDevices} from "../http/deviceAPI";

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDevices().then(data => device.setDevices(data.rows))
  }, [])

  return (
    <Container>
      <CssBaseline/>
      <Grid sx={{mt: 3, mb: 2}} container spacing={2}>
        <Grid item xs={4}>
          <TypeBar/>
        </Grid>
        <Grid item xs={8}>
          <BrandBar/>
          <DeviceList/>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Shop;
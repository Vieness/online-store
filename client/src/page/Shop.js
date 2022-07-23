import React, {useContext, useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrand} from "../http/brandAPI";
import {fetchTypes} from "../http/typeAPI";
import {fetchDevices} from "../http/deviceAPI";
import PaginationCompon from "../components/PaginationCompon";

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 3).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand,])

  return (
    <Container>
      <Grid sx={{mt: 3, mb: 2}} container spacing={2}>
        <Grid item xs={4}>
          <TypeBar/>
        </Grid>
        <Grid item xs={8}>
          <BrandBar/>
          <DeviceList/>
          <PaginationCompon/>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Shop;
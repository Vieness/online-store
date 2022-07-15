import React from 'react';
import {Container, Grid} from "@mui/material";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {


  return (
    <Container>
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
};

export default Shop;
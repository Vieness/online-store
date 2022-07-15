import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Grid} from "@mui/material";

const DeviceList = observer(() => {
  const {device} = useContext(Context)
  return (

    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
      {device.device.map(device =>
        <Grid item xs={2} sm={4} md={4} key={device.id}>
          <DeviceItem key={device.id} device={device}/>
        </Grid>
      )}
    </Grid>
  );
});

export default DeviceList;
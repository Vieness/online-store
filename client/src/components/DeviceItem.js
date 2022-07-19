import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Rating, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/constants";

const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <Card
      sx={{maxWidth: 250, mt: 4, mb: 2, mr: 4, ml: 0}}
    >
      <CardMedia
        component="img"
        height="140"
        alt="green iguana"
        src={process.env.REACT_APP_API_URL + '/' + device.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {device.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description
        </Typography>
        <Rating name="read-only" value={device.rating} readOnly/>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
                sx={{pr: 5}} size="small"
        >
          DETAILS
        </Button>
        <Button startIcon={<ShoppingCartIcon/>} sx={{pl: 3}} size="small">BUY </Button>
      </CardActions>
    </Card>
  );
};

export default DeviceItem;
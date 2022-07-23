import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const TypeBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
        {device.types.map(type =>
          <ListItem
            onClick={() => device.setSelectedType(type)}
            key={type.id}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {type.icon}
              </ListItemIcon>
              <ListItemText primary={type.name}/>
            </ListItemButton>
          </ListItem>
        )}
      </nav>
      <Divider/>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="Shopping cart"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
});

export default TypeBar;
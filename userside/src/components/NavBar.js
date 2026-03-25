import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {Link,useLocation} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';

import {IconButton} from '@mui/material';
const drawerWidth = 240;


export default function  NavBar(props) {
    const {drawerWidth,content} = props
    const location =useLocation()
    const path = location.pathname
    const [open,setOpen] = React.useState(false);

    const changeOpenStatus = () =>{
        setOpen(!open);
    }
    const myDrawer=(
        <div>
             <Toolbar />
        <Box sx={{overflow:'auto'}}>
        <List>
          <ListItem>
            <ListItemButton component={Link} to="" selected={"/ " === path} >
              <ListItemIcon>
                <HouseIcon/>
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
        </ListItem>
                <ListItem>
            <ListItemButton component={Link} to="/create" selected={"/create" === path} >
              <ListItemIcon>
                <HouseIcon/>
              </ListItemIcon>
              <ListItemText primary={"Create"} />
            </ListItemButton>
        </ListItem>
                <ListItem>
            <ListItemButton component={Link} to="/About" selected={"/About" === path} >
              <ListItemIcon>
                <HouseIcon/>
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
        </ListItem>
                        <ListItem>
            <ListItemButton component={Link} to="/Dashboard" selected={"/Dashboard" === path} >
              <ListItemIcon>
                <HouseIcon/>
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
        </ListItem>
        </List>
              </Box>
        </div>
    )
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex:(theme)=> theme.zIndex.drawer+1,
          width:{sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px`}
        }}
      >
        <Toolbar>
            <IconButton 
            color="inherit"
            onClick={changeOpenStatus}
            sx={{mr:2,display:{sm:"none"}}}>
                <MenuIcon/>
                </IconButton>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      variant = "permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display:{xs:"none",sm:"block"},
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {myDrawer}
      </Drawer>
            <Drawer
      variant = "permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display:{xs:"none",sm:"block"},
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {myDrawer}
      </Drawer>
                  <Drawer
      variant = "permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display:{xs:"none",sm:"block"},
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {myDrawer}
      </Drawer>
            <Drawer
      variant = "temporary"
      open={open}
      onClose={changeOpenStatus}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display:{xs:"block",sm:"none"},
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {myDrawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 ,ml:{sm: `${drawerWidth}px`}}}
      >
        <Toolbar />
        {content}
    </Box>
    </Box>
  );
}

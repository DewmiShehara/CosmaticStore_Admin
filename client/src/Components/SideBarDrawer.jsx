import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PeopleIcon from '@mui/icons-material/People';
import ExtensionIcon from '@mui/icons-material/Extension';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

// Define your menu list
const menuItems = [
    { id: 1, menuName: 'Dashboard', path: '/inbox', icon: <DashboardIcon /> },
    { id: 2, menuName: 'Category', path: '/categoryRegistration', icon: <CategoryIcon /> },
    { id: 3, menuName: 'Supplier', path: '/send', icon: <EmojiPeopleIcon /> },
    { id: 4, menuName: 'Item', path: '/drafts', icon: <ExtensionIcon /> },
    { id: 5, menuName: 'GRN', path: '/drafts', icon: <GppGoodIcon /> },
    { id: 6, menuName: 'User', path: '/drafts', icon: <PeopleIcon /> }

];


function SideBarDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: '#F0EAD6',
                height: '100%',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} to={text.path}>
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.menuName} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );

    return (
        <div style={{ background: '#701C1C', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <DensityMediumIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            <h2>DewShe.lk</h2>
            <LogoutIcon />
        </div>
    )
}

export default SideBarDrawer
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CableIcon from '@mui/icons-material/Cable';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material';
import React from 'react';

export default function Sidebar() {
    return (
        <Box flex={1} p={2}>
            <Box position='fixed'>
                <Paper elevation={3}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#home'>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Homepage' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#home'>
                                <ListItemIcon>
                                    <BuildIcon />
                                </ListItemIcon>
                                <ListItemText primary='Settings' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#home'>
                                <ListItemIcon>
                                    <CableIcon />
                                </ListItemIcon>
                                <ListItemText primary='Support' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#home'>
                                <ListItemIcon>
                                    <AlternateEmailIcon />
                                </ListItemIcon>
                                <ListItemText primary='Contact' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#home'>
                                <ListItemIcon>
                                    <MeetingRoomIcon />
                                </ListItemIcon>
                                <ListItemText primary='Exit' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </Box>
    );
}

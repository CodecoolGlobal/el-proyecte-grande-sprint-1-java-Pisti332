import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

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
import { Upload } from '@mui/icons-material';

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
                                    <Upload />
                                </ListItemIcon>
                                <ListItemText primary='Upload image' />
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
                                <ListItemText primary='Logout' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </Box>
    );
}

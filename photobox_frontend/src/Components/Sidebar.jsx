import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Paper,
    Typography,
    styled,
} from '@mui/material';
import React, { useState } from 'react';
import { LinkedCamera, Login, Upload } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default function Sidebar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <Box flex={1} p={2}>
                <Box position='fixed'>
                    <Paper elevation={3}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component='button'
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <ListItemIcon>
                                        <Login />
                                    </ListItemIcon>
                                    <ListItemText primary='Login' />
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
            <StyledModal
                open={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    width={600}
                    height={350}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                    p={3}
                    borderRadius={5}
                    display='flex'
                    flexDirection='column'
                    sx={{alignItems: 'center'}}
                >
                    <LinkedCamera fontSize='large'/>
                    <Divider />
                    <Typography variant='h5' textAlign='center' mt='10px'>Login</Typography>
                </Box>
            </StyledModal>
        </>
    );
}

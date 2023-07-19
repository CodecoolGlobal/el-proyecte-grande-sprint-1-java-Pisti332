import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoginIcon from '@mui/icons-material/Login';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Paper,
    TextField,
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
    const [isRegister, setIsRegister] = useState(false);

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
                    width={400}
                    height={500}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                    p={3}
                    borderRadius={5}
                    display='flex'
                    flexDirection='column'
                    sx={{ alignItems: 'center' }}
                >
                    {!isRegister ? (
                        <>
                            <LinkedCamera fontSize='large' />
                            <Typography
                                variant='h5'
                                textAlign='center'
                                mt='10px'
                                mb='10px'
                            >
                                Login
                            </Typography>
                            <FormControl variant='standard'>
                                <TextField
                                    id='login-username'
                                    label='Username'
                                    variant='outlined'
                                />
                            </FormControl>
                            <FormControl margin='normal'>
                                <TextField
                                    id='login-password'
                                    label='Password'
                                    variant='outlined'
                                    type='password'
                                />
                            </FormControl>
                            <ButtonGroup
                                variant='contained'
                                aria-label='outlined primary button group'
                                sx={{ marginTop: '10px' }}
                            >
                                <Button type='submit' startIcon={<LoginIcon />}>
                                    Login
                                </Button>
                                <Button
                                    endIcon={<DoDisturbIcon />}
                                    onClick={() => setIsLoginOpen(false)}
                                >
                                    Cancel
                                </Button>
                            </ButtonGroup>
                            <Button
                                startIcon={<HowToRegIcon />}
                                variant='outlined'
                                sx={{ marginTop: '30px' }}
                                onClick={() => setIsRegister(true)}
                            >
                                Register
                            </Button>
                        </>
                    ) : (
                        <>
                            <LinkedCamera fontSize='large' />
                            <Typography
                                variant='h5'
                                textAlign='center'
                                mt='10px'
                                mb='10px'
                            >
                                Register
                            </Typography>
                            <FormControl variant='standard' margin='normal'>
                                <TextField
                                    id='register-username'
                                    label='Username'
                                    variant='outlined'
                                />
                            </FormControl>
                            <FormControl variant='standard' margin='normal'>
                                <TextField
                                    id='register-email'
                                    label='Email'
                                    variant='outlined'
                                />
                            </FormControl>
                            <FormControl margin='normal'>
                                <TextField
                                    id='register-password'
                                    label='Password'
                                    variant='outlined'
                                    type='password'
                                />
                            </FormControl>
                            <ButtonGroup
                                variant='contained'
                                aria-label='outlined primary button group'
                                sx={{ marginTop: '10px' }}
                            >
                                <Button type='submit' startIcon={<LoginIcon />}>
                                    Register
                                </Button>
                                <Button
                                    endIcon={<DoDisturbIcon />}
                                    onClick={() => {
                                        setIsLoginOpen(false);
                                        setIsRegister(false);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </ButtonGroup>
                            <Button
                                startIcon={<HowToRegIcon />}
                                variant='outlined'
                                sx={{ marginTop: '30px' }}
                                onClick={() => setIsRegister(false)}
                            >
                                Login
                            </Button>
                        </>
                    )}
                </Box>
            </StyledModal>
        </>
    );
}

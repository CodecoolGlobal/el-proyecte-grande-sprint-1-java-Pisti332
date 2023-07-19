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
import './sidebar.css';
import { LinkedCamera, Login, Upload } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default function Sidebar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    function handleRegisterUser(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        });
    }

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
                                    label='username'
                                    variant='outlined'
                                />
                            </FormControl>
                            <FormControl margin='normal'>
                                <TextField
                                    id='login-password'
                                    label='password'
                                    variant='outlined'
                                    type='password'
                                    autoComplete='true'
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
                            <form
                                id='register-user-form'
                                method='POST'
                                onSubmit={handleRegisterUser}
                            >
                                <FormControl variant='standard' margin='normal'>
                                    <TextField
                                        id='register-username'
                                        label='username'
                                        variant='outlined'
                                        name='username'
                                    />
                                </FormControl>
                                <FormControl variant='standard' margin='normal'>
                                    <TextField
                                        id='register-email'
                                        label='email'
                                        variant='outlined'
                                        name='email'
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <TextField
                                        id='register-password'
                                        label='password'
                                        variant='outlined'
                                        type='password'
                                        name='password'
                                        autoComplete='true'
                                    />
                                </FormControl>
                                <ButtonGroup
                                    variant='contained'
                                    aria-label='outlined primary button group'
                                    sx={{ marginTop: '10px' }}
                                >
                                    <Button
                                        type='submit'
                                        startIcon={<LoginIcon />}
                                    >
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
                            </form>
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

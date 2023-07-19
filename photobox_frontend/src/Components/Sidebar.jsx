import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoginIcon from '@mui/icons-material/Login';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
    Alert,
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
    Snackbar,
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

export default function Sidebar({ setUser, user }) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isSuccesboxOpen, setIsSuccesboxOpen] = useState(false);

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
        setIsLoginOpen(false);
        setIsRegister(false);
    }

    async function handleLoginUser(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const request = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        });
        const response = await request.json();
        if (response) {
            setUser({ ...user, userName: formJson.username });
            setIsLoginOpen(false);
            setIsRegister(false);
            setIsSuccesboxOpen(true);
        } else {
            setIsAlertOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsAlertOpen(false);
        setIsSuccesboxOpen(false);
    };

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
                            <form
                                onSubmit={handleLoginUser}
                                id='login-user-form'
                            >
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
                                        name='username'
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <TextField
                                        id='login-password'
                                        label='Password'
                                        variant='outlined'
                                        type='password'
                                        autoComplete='true'
                                        name='password'
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
                            </form>
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
                                        label='Username'
                                        variant='outlined'
                                        name='username'
                                    />
                                </FormControl>
                                <FormControl variant='standard' margin='normal'>
                                    <TextField
                                        id='register-email'
                                        label='Email'
                                        variant='outlined'
                                        name='email'
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <TextField
                                        id='register-password'
                                        label='Password'
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
            <Snackbar
                open={isAlertOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='error'
                    sx={{ width: '100%' }}
                >
                    Invalid username or password!
                </Alert>
            </Snackbar>
            <Snackbar
                open={isSuccesboxOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='success'
                    sx={{ width: '100%' }}
                >
                    Successful login.
                </Alert>
            </Snackbar>
        </>
    );
}

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
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SpeedDialMenu from './SpeedDialMenu';
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
    const [isLogoutDisabled, setIsLogoutDisabled] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
            setIsLogoutDisabled(false);
        }
    }, [setUser]);

    async function handleRegisterUser(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const request = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        });
        const response = await request.json();
        setIsLoginOpen(false);
        setIsRegister(false);
        setUser(response);
        localStorage.setItem(
            'user',
            JSON.stringify({ name: response.name, id: response.id }),
        );
        setIsSuccesboxOpen(true);
        setIsLogoutDisabled(false);
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
        if (response.name) {
            setUser(response);
            setIsLoginOpen(false);
            setIsRegister(false);
            localStorage.setItem(
                'user',
                JSON.stringify({ name: response.name, id: response.id }),
            );
            setIsSuccesboxOpen(true);
            setIsLogoutDisabled(false);
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

    function handleLogOut() {
        setUser({ name: 'Please log in...' });
        setIsSuccesboxOpen(true);
        setIsLogoutDisabled(true);
        localStorage.clear();
    }

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const sendImage = async (event) => {
        event.preventDefault();
        try {
            const file = event.target.files[0];
            const name = event.target.files[0].name;
            const base64Image = await toBase64(file);
            const base64Split = base64Image.split(',')[1];
            const format = base64Image.substring(
                base64Image.indexOf('/') + 1,
                base64Image.indexOf(';'),
            );
            fetch(`/api/images/${user.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imageName: name,
                    userName: user.name,
                    imageData: base64Split,
                    format: format,
                }),
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Box
                flex={1}
                p={2}
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block',
                        xl: 'block',
                    },
                }}
            >
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
                                <ListItemButton component='label'>
                                    <ListItemIcon>
                                        <Upload />
                                    </ListItemIcon>
                                    <ListItemText primary='Upload image' />
                                    <input
                                        type='file'
                                        hidden
                                        accept='.png,.jpeg,.jpg'
                                        onChange={(event) => sendImage(event)}
                                    />
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
                                <ListItemButton
                                    component='button'
                                    onClick={handleLogOut}
                                    disabled={isLogoutDisabled}
                                >
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
                    Successful action.
                </Alert>
            </Snackbar>
            <SpeedDialMenu
                setIsLoginOpen={setIsLoginOpen}
                handleLogOut={handleLogOut}
                isLogoutDisabled={isLogoutDisabled}
            />
        </>
    );
}

import { DoDisturb, HowToReg, LinkedCamera, Login } from '@mui/icons-material';
import {
    Button,
    ButtonGroup,
    FormControl,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

export default function LoginModal({
    setUser,
    setIsLoginOpen,
    setIsRegister,
    setIsSuccesboxOpen,
    setIsLogoutDisabled,
    setIsUploadDisabled,
    setIsAlertOpen,
}) {
    async function handleLoginUser(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const request = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formJson),
            });
            const response = await request.json();
            setUser({ name: response.username, id: response.userId });
            localStorage.setItem(
                'user',
                JSON.stringify({
                    name: response.username,
                    id: response.userId,
                }),
            );
            setIsLoginOpen(false);
            setIsRegister(false);
            localStorage.setItem(
                'userToken',
                JSON.stringify({ token: response.token }),
            );
            setIsSuccesboxOpen(true);
            setIsLogoutDisabled(false);
            setIsUploadDisabled(false);
        } catch (error) {
            setIsAlertOpen(true);
            console.error(error);
        }
    }

    return (
        <>
            <LinkedCamera fontSize='large' />
            <form onSubmit={handleLoginUser} id='login-user-form'>
                <Typography variant='h5' textAlign='center' mt='10px' mb='10px'>
                    Login
                </Typography>
                <FormControl variant='standard'>
                    <TextField
                        id='login-username'
                        label='Username'
                        variant='outlined'
                        name='username'
                        required
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
                        required
                    />
                </FormControl>
                <ButtonGroup
                    variant='contained'
                    aria-label='outlined primary button group'
                    sx={{ marginTop: '10px' }}
                >
                    <Button type='submit' startIcon={<Login />}>
                        Login
                    </Button>
                    <Button
                        endIcon={<DoDisturb />}
                        onClick={() => setIsLoginOpen(false)}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
                <Button
                    color='secondary'
                    startIcon={<HowToReg />}
                    variant='outlined'
                    sx={{ marginTop: '30px' }}
                    onClick={() => setIsRegister(true)}
                >
                    Register
                </Button>
            </form>
        </>
    );
}

import { DoDisturb, HowToReg, LinkedCamera, Login } from '@mui/icons-material';
import {
    Button,
    ButtonGroup,
    FormControl,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

export default function RegisterModal({
    setIsLoginOpen,
    setIsRegister,
    setUser,
    setIsSuccesboxOpen,
    setIsLogoutDisabled,
    setIsUploadDisabled,
}) {
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
        localStorage.setItem(
            'userToken',
            JSON.stringify({ token: response.token }),
        );
        setIsLoginOpen(false);
        setIsRegister(false);
        setUser({ name: response.username, id: response.userId });
        localStorage.setItem(
            'user',
            JSON.stringify({ name: response.username, id: response.userId }),
        );
        setIsSuccesboxOpen(true);
        setIsLogoutDisabled(false);
        setIsUploadDisabled(false);
    }

    return (
        <>
            <LinkedCamera fontSize='large' />
            <Typography variant='h5' textAlign='center' mt='10px' mb='10px'>
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
                        required
                    />
                </FormControl>
                <FormControl variant='standard' margin='normal'>
                    <TextField
                        id='register-email'
                        label='Email'
                        variant='outlined'
                        name='email'
                        required
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
                        required
                    />
                </FormControl>
                <ButtonGroup
                    variant='contained'
                    aria-label='outlined primary button group'
                    sx={{ marginTop: '10px' }}
                >
                    <Button type='submit' startIcon={<Login />}>
                        Register
                    </Button>
                    <Button
                        endIcon={<DoDisturb />}
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
                startIcon={<HowToReg />}
                variant='outlined'
                sx={{ marginTop: '30px' }}
                onClick={() => setIsRegister(false)}
            >
                Login
            </Button>
        </>
    );
}

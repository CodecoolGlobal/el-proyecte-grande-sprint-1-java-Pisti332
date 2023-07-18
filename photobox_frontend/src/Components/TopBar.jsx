import styled from '@emotion/styled';
import { LinkedCamera, Search } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';

const SearchBar = styled('div')(() => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '2%',
    width: '100%',
}));

export default function TopBar() {
    return (
        <>
            <AppBar position='sticky'>
                <Container maxWidth='xl'>
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <LinkedCamera
                                fontSize='large'
                                sx={{ marginRight: '20px' }}
                            />
                            PHOTOBOX
                        </Typography>
                        <Box
                            maxWidth='xl'
                            display='flex'
                            sx={{ alignItems: 'center' }}
                        >
                            <Search fontSize='large' />
                            <SearchBar>
                                <InputBase placeholder='Search...' />
                            </SearchBar>
                        </Box>
                        <Box display='flex' gap={2} sx={{alignItems: 'center'}}>
                            <Typography variant='b1'>UserName</Typography>
                            <Avatar
                                alt='User avatar'
                                src='https://imageio.forbes.com/specials-images/imageserve/6499ae7d51794529225d4176/2022-Toronto-International-Film-Festival---In-Conversation-With----Taylor-Swift/960x0.jpg?format=jpg&width=960'
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
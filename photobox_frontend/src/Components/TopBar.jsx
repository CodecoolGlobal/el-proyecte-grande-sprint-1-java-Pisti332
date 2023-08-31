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

export default function TopBar({ user }) {
    function filterImages(target) {
        console.log("asd");
        console.log(target.value);
    }
    let isLoggedIn = user.name !== "Please log in...";
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
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                },
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
                            sx={{
                                alignItems: 'center',
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'flex',
                                },
                            }}
                        >
                            <Search fontSize='large' />
                            <SearchBar>
                                <InputBase placeholder='Search...' onChange={(event) => filterImages(event.target)}/>
                            </SearchBar>
                        </Box>
                        <Typography variant='b1'
                            component='a'
                            href="/"
                            sx={{
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                            <LinkedCamera
                                fontSize='large'
                                sx={{
                                    display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'none',
                                    },
                                }}
                            />
                        </Typography>

                        <Box
                            display='flex'
                            gap={2}
                            sx={{ alignItems: 'center' }}
                        >
                            <Typography variant='b1'>{user.name}</Typography>
                            {isLoggedIn ?
                                <Avatar
                                    alt='User avatar'
                                    src={`https://avatars.dicebear.com/api/pixel-art/${user.name}.svg`}
                                /> :
                                <Avatar
                                    alt='User avatar'
                                    src={`https://avatars.dicebear.com/api/identification/.svg`}
                                />
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

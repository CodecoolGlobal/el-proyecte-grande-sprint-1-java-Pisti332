import {
    AlternateEmail,
    Login,
    MeetingRoom,
    Upload,
} from '@mui/icons-material';
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

export default function DesktopViewMenu({
    setIsLoginOpen,
    isUploadDisabled,
    handleLogOut,
    isLogoutDisabled,
    user,
    setImagesData,
    imagesData,
}) {
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const sendImage = async (event) => {
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
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem('userToken')).token
                    }`,
                },
                body: JSON.stringify({
                    imageName: encodeURI(name),
                    userName: user.name,
                    imageData: base64Split,
                    format: format,
                }),
            });
            setImagesData([
                ...imagesData,
                {
                    imageName: name,
                    userName: user.name,
                    imageData: base64Split,
                },
            ]);
        } catch (e) {
            console.error(e);
        }
    };

    return (
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
                            <ListItemButton
                                component='label'
                                disabled={isUploadDisabled}
                            >
                                <ListItemIcon>
                                    <Upload />
                                </ListItemIcon>
                                <ListItemText primary='Upload image' />
                                <input
                                    id='fileInput'
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
                                    <AlternateEmail />
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
                                    <MeetingRoom />
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

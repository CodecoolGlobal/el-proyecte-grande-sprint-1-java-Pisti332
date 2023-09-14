import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SpeedDialMenu from './SpeedDialMenu';
import DesktopViewMenu from './DesktopViewMenu';
import MainPageModal from './MainPageModal';

export default function Sidebar({
    setUser,
    user,
    isUploadDisabled,
    setIsUploadDisabled,
    setImagesData,
    imagesData,
}) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isSuccesboxOpen, setIsSuccesboxOpen] = useState(false);
    const [isLogoutDisabled, setIsLogoutDisabled] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
            setIsLogoutDisabled(false);
            setIsUploadDisabled(false);
        }
    }, [setIsUploadDisabled, setUser]);

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
        setIsUploadDisabled(true);
        localStorage.clear();
    }

    return (
        <>
            <DesktopViewMenu
                setIsLoginOpen={setIsLoginOpen}
                isUploadDisabled={isUploadDisabled}
                handleLogOut={handleLogOut}
                isLogoutDisabled={isLogoutDisabled}
                user={user}
                setImagesData={setImagesData}
                imagesData={imagesData}
            />
            <SpeedDialMenu
                setIsLoginOpen={setIsLoginOpen}
                handleLogOut={handleLogOut}
                isLogoutDisabled={isLogoutDisabled}
                user={user}
                setImagesData={setImagesData}
                imagesData={imagesData}
            />
            <MainPageModal
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                setUser={setUser}
                setIsSuccesboxOpen={setIsSuccesboxOpen}
                setIsLogoutDisabled={setIsLogoutDisabled}
                setIsUploadDisabled={setIsUploadDisabled}
                setIsAlertOpen={setIsAlertOpen}
            />
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
        </>
    );
}

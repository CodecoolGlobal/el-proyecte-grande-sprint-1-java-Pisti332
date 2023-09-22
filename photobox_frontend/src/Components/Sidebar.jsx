import {
    Box,
    Modal,
    styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SpeedDialMenu from './SpeedDialMenu';
import MainPageSnackBars from './MainPageSnackBars';
import DesktopViewMenu from './DesktopViewMenu';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default function Sidebar({
    setUser,
    user,
    isUploadDisabled,
    setIsUploadDisabled,
    setImagesData,
    imagesData,
}) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
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
                        <LoginModal
                            setUser={setUser}
                            setIsLoginOpen={setIsLoginOpen}
                            setIsRegister={setIsRegister}
                            setIsSuccesboxOpen={setIsSuccesboxOpen}
                            setIsLogoutDisabled={setIsLoginOpen}
                            setIsUploadDisabled={setIsUploadDisabled}
                            setIsAlertOpen={setIsAlertOpen}
                        />
                    ) : (
                        <RegisterModal
                            setIsLoginOpen={setIsLoginOpen}
                            setIsRegister={setIsRegister}
                            setUser={setUser}
                            setIsSuccesboxOpen={setIsSuccesboxOpen}
                            setIsLogoutDisabled={setIsLogoutDisabled}
                            setIsUploadDisabled={setIsUploadDisabled}
                        />
                    )}
                </Box>
            </StyledModal>
            <MainPageSnackBars
                setIsAlertOpen={setIsAlertOpen}
                setIsSuccesboxOpen={setIsSuccesboxOpen}
                isAlertOpen={isAlertOpen}
                isSuccesboxOpen={isSuccesboxOpen}
            />
        </>
    );
}

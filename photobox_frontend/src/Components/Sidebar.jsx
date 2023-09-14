import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SpeedDialMenu from './SpeedDialMenu';
import DesktopViewMenu from './DesktopViewMenu';
import MainPageModal from './MainPageModal';
import MainPageSnackBars from './MainPageSnackBars';

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
    const [isRegister, setIsRegister] = useState(false);

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
            <MainPageModal
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                setUser={setUser}
                setIsSuccesboxOpen={setIsSuccesboxOpen}
                setIsLogoutDisabled={setIsLogoutDisabled}
                setIsUploadDisabled={setIsUploadDisabled}
                setIsAlertOpen={setIsAlertOpen}
                isRegister={isRegister}
                setIsRegister={setIsRegister}
            />
            <MainPageSnackBars
                setIsAlertOpen={setIsAlertOpen}
                setIsSuccesboxOpen={setIsSuccesboxOpen}
                isAlertOpen={isAlertOpen}
                isSuccesboxOpen={isSuccesboxOpen}
            />
        </>
    );
}

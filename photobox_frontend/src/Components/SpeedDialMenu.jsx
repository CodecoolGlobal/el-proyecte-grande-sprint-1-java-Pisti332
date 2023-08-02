import {
    AlternateEmail,
    CloudUpload,
    Login,
    MeetingRoom,
} from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React, { useRef } from 'react';

export default function SpeedDialMenu({
    setIsLoginOpen,
    handleLogOut,
    isLogoutDisabled,
    user,
}) {
    const inputRef = useRef();

    const handleFileUploadClick = () => {
        inputRef.current.click();
    };

    const sendImage = async (event) => {
        event.preventDefault();
        try {
            const file = event.target.files[0];
            const name = event.target.files[0].name;
            const base64Image = await toBase64(file);
            console.log(base64Image);
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

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    return (
        <>
            <SpeedDial
                ariaLabel='SpeedDial basic example'
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: 20,
                    display: {
                        xs: 'flex',
                        sm: 'flex',
                        md: 'flex',
                        lg: 'none',
                        xl: 'none',
                    },
                }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction
                    key='Logout'
                    icon={<MeetingRoom />}
                    tooltipTitle='Logout'
                    onClick={() => handleLogOut()}
                />
                <SpeedDialAction
                    key='Contact'
                    icon={<AlternateEmail />}
                    tooltipTitle='Contact'
                />
                <SpeedDialAction
                    key='Upload'
                    icon={<CloudUpload />}
                    tooltipTitle='Upload'
                    onClick={handleFileUploadClick}
                />
                <SpeedDialAction
                    key='Login'
                    icon={<Login />}
                    tooltipTitle='Login'
                    onClick={() => setIsLoginOpen(true)}
                />
            </SpeedDial>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                accept='.png,.jpeg,.jpg'
                id='contained-button-file'
                type='file'
                onChange={(event) => sendImage(event)}
            />
        </>
    );
}

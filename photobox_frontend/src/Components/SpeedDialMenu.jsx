import {
    AlternateEmail,
    Login,
    MeetingRoom,
    Upload,
} from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React from 'react';

export default function SpeedDialMenu({ setIsLoginOpen, sendImage }) {
    const actions = [
        { icon: <Login />, name: 'Login' },
        {
            icon: <Upload />,
            name: 'Upload photo',
        },
        {
            icon: <AlternateEmail />,
            name: 'Contact',
        },
        {
            icon: <MeetingRoom />,
            name: 'Logout',
        },
    ];

    return (
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
                key='Login'
                icon={<Login />}
                tooltipTitle='Login'
                onClick={() => setIsLoginOpen(true)}
            />
            {/* <SpeedDialAction
                key='Login'
                icon={<Login />}
                tooltipTitle='Login'
                onClick={() => setIsLoginOpen(true)}
            />
            <SpeedDialAction
                key='Login'
                icon={<Login />}
                tooltipTitle='Login'
                onClick={() => setIsLoginOpen(true)}
            /> */}
        </SpeedDial>
    );
}

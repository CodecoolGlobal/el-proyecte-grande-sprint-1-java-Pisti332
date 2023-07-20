import {
    AlternateEmail,
    Login,
    MeetingRoom,
    Upload,
} from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React from 'react';

export default function SpeedDialMenu({ setIsLoginOpen, handleLogOut, isLogoutDisabled }) {

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

import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export default function MainPageSnackBars({
    setIsAlertOpen,
    setIsSuccesboxOpen,
    isAlertOpen,
    isSuccesboxOpen,
}) {
    const handleClose = (_e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsAlertOpen(false);
        setIsSuccesboxOpen(false);
    };

    return (
        <>
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

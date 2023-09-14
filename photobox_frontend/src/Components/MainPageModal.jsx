import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function MainPageModal({
    isLoginOpen,
    setIsLoginOpen,
    setUser,
    setIsSuccesboxOpen,
    setIsLogoutDisabled,
    setIsUploadDisabled,
    setIsAlertOpen,
    isRegister,
    setIsRegister
}) {
    

    const StyledModal = styled(Modal)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    return (
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
                        setIsLoginOpen={setIsLoginOpen}
                        setIsRegister={setIsRegister}
                        setUser={setUser}
                        setIsSuccesboxOpen={setIsSuccesboxOpen}
                        setIsLogoutDisabled={setIsLogoutDisabled}
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
    );
}

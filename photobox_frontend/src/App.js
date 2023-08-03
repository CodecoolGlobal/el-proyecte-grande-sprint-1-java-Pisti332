import { useState } from 'react';
import './App.css';
import { Box, Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Comments from './Components/Comments';

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [imageName, setImageName] = useState(null);
    const [isUploadDisabled, setIsUploadDisabled] = useState(true);
    const [user, setUser] = useState({ name: 'Please log in...' });

    const showComments = (event) => {
        setIsFeed(false);
        setImageName(event.currentTarget.id);
    };

    return (
        <>
            {isFeed ? (
                <>
                    <TopBar user={user} />
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='space-between'
                    >
                        <Sidebar
                            user={user}
                            setUser={setUser}
                            isUploadDisabled={isUploadDisabled}
                            setIsUploadDisabled={setIsUploadDisabled}
                        />
                        <Feed showComments={showComments} />
                    </Stack>
                </>
            ) : (
                <>
                    <TopBar user={user} />
                    <Stack direction='row' spacing={2} justifyContent='center'>
                        <Sidebar
                            user={user}
                            setUser={setUser}
                            isUploadDisabled={isUploadDisabled}
                            setIsUploadDisabled={setIsUploadDisabled}
                        />
                        <Box>
                            <Comments imageName={imageName} user={user} isUploadDisabled={isUploadDisabled} />
                        </Box>
                    </Stack>
                </>
            )}
        </>
    );
}

export default App;

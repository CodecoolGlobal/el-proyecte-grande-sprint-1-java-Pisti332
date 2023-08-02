import { useState, useEffect } from 'react';
import './App.css';
import { Box, Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Comments from './Components/Comments';
import Image from './Components/Image';

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [imageName, setImageName] = useState(null);
    
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
                        <Sidebar user={user} setUser={setUser} />
                        <Feed showComments={showComments} />
                    </Stack>
                </>
            ) : (
                <>
                    <TopBar user={user} />
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='center'
                    >
                        <Sidebar user={user} setUser={setUser} />
                        <Box>
                            <Image imageName={imageName} />
                            <Comments
                                imageName={imageName}
                                userId={user.userId}
                            />
                        </Box>
                    </Stack>
                </>
            )}
        </>
    );
}

export default App;
import { useState } from 'react';
import './App.css';
import { Box, Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Comments from './Components/Comments';
import Picture from './Components/Picture';

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [picture, setPicture] = useState(null);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState({ userName: 'Please log in...' });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        setComments(...comments, {
            id: 1,
            imageName: event.target.id,
            user: user.userName,
            comment: formJson.comment,
        });
    };

    const showComments = (event) => {
        setIsFeed(false);
        setPicture(event.currentTarget.id);
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
                            <Picture picture={picture} />
                            <Comments
                                comments={comments}
                                handleSubmit={handleSubmit}
                            />
                        </Box>
                    </Stack>
                </>
            )}
        </>
    );
}

export default App;
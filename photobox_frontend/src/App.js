import { useState } from 'react';
import './App.css';
import { Box, Stack, ThemeProvider } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Comments from './Components/Comments';
import Picture from './Components/Picture';
import { createTheme } from '@mui/material/styles';

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [picture, setPicture] = useState(null);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState({ name: 'Please log in...' });

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
    const theme = createTheme({
        palette: {
            primary: {
                main: '#dbc499'
            },
            secondary: {
                main: '#daa29e'
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {isFeed ? (
                <>
                    <TopBar user={user} />
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='space-between'
                    >
                        <Sidebar color="primary" user={user} setUser={setUser} />
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
        </ThemeProvider>
    );
}

export default App;
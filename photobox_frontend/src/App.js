import { useState } from 'react';
import './App.css';
import { Box, Stack, ThemeProvider } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Comments from './Components/Comments';
import { createTheme } from '@mui/material/styles';

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [imageName, setImageName] = useState(null);
    const [isUploadDisabled, setIsUploadDisabled] = useState(true);
    const [user, setUser] = useState({ name: 'Please log in...' });
    const [imagesData, setImagesData] = useState(null);

    const showComments = (event) => {
        setIsFeed(false);
        setImageName(event.currentTarget.id);
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: '#dbc499',
            },
            secondary: {
                main: '#daa29e',
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
                        <Sidebar
                            color='primary'
                            user={user}
                            setUser={setUser}
                            isUploadDisabled={isUploadDisabled}
                            setIsUploadDisabled={setIsUploadDisabled}
                            setImagesData={setImagesData}
                            imagesData={imagesData}
                        />
                        <Feed
                            showComments={showComments}
                            imagesData={imagesData}
                            setImagesData={setImagesData}
                        />
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
                            <Comments
                                imageName={imageName}
                                user={user}
                                isUploadDisabled={isUploadDisabled}
                            />
                        </Box>
                    </Stack>
                </>
            )}
        </ThemeProvider>
    );
}

export default App;

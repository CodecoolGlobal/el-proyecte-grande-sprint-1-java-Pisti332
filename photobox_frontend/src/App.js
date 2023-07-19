import './App.css';
import { Alert, Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({userName: 'Please log in...'});

    return (
        <>
            <TopBar user={user} />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar setUser={setUser} user={user}/>
                <Feed />
            </Stack>
            <Alert severity="error">This is an error alert — check it out!</Alert>
        </>
    );
}

export default App;

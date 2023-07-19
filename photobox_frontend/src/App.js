import './App.css';
import { Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'

function App() {
    return (
        <>
            <TopBar />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar />
                <Feed />
            </Stack>
        </>
    );
}

export default App;

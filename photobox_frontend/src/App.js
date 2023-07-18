import './App.css';
import { Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';

function App() {
    return (
        <>
            <TopBar />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar />
            </Stack>
        </>
    );
}

export default App;

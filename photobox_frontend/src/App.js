import './App.css';
import { Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'
import Comments from './Components/Comments'

function App() {
    
    const showComments = (event) => {
    console.log(event.target.id);
    }
    
    return (
        <>
            <TopBar />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar />
                <Feed showComments={showComments} />
                <Comments />
            </Stack>
        </>
    );
}

export default App;

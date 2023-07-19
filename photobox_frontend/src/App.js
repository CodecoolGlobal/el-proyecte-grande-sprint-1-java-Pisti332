import { useState } from 'react';
import './App.css';
import { Box, Stack } from '@mui/material';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'
import Comments from './Components/Comments'
import Picture from './Components/Picture'

function App() {
    const [isFeed, setIsFeed] = useState(true);
    const [picture, setPicture] = useState(null);
    const [comments, setComments] = useState([]);

    const showComments = (event) => {
        console.log(event.target.id);
        setIsFeed(false);
        for (const item of itemData) {
            if (item.title === event.target.id) {
                setPicture(item);
            }
        }
        for (const comment of commentExamples) {
            if (comment.imageName === event.target.id) {
                comments.push(comment);
            }
        }
    }

    return (
        <>
            {isFeed ?
                <>
                    <TopBar />
                    <Stack direction='row' spacing={2} justifyContent='space-between'>
                        <Sidebar />
                        <Feed showComments={showComments} />
                    </Stack>
                </>
                :
                <>
                    <TopBar />
                    <Stack direction='row' spacing={2} justifyContent='space-between'>
                        <Sidebar />
                        <Box>
                            <Picture picture={picture} />
                            <Comments comments={comments} />
                        </Box>
                    </Stack>
                </>}
        </>
    );
}

export default App;

const commentExamples = [
    {
        id: 1,
        imageName: 'Breakfast',
        user: 'Palika',
        comment: 'Nagyon cuki!'
    },
    {
        id: 2,
        imageName: 'Basketball',
        user: 'Marika',
        comment: 'Nekem is tetszik!'
    },
    {
        id: 3,
        imageName: 'Burger',
        user: 'Garfield',
        comment: 'Nekem nem!'
    }
]

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];


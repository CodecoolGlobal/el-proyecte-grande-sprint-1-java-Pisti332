import { useState, useEffect } from 'react';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Loading from './Loading/Loading';
import { Box, IconButton, ListSubheader } from '@mui/material';
import { Comment } from '@mui/icons-material';

const IMG_PATH = "\\img\\";

const Feed = ({ showComments }) => {
    const [loading, setLoading] = useState(true);
    const [imagesData, setImagesData] = useState(null);

    useEffect(() => {
        async function startFetching() {
            setImagesData(null);
            const request = await fetch('/api/images/20');
            const result = await request.json();
            if (!ignore) {
                setImagesData(result);
                setLoading(false);
            }
        }

        let ignore = false;
        startFetching();
        return () => {
            ignore = true;
        };
    }, []);


    if (loading) {
        return <Loading />;
    }

    return (
        <Box maxWidth='80vw'>
            <ImageList cols={3} gap={30}>
                <ImageListItem key='Subheader'>
                    <ListSubheader component='div'>December</ListSubheader>
                </ImageListItem>
                {imagesData.map((item) => (
                    <ImageListItem key={item.name}>
                        {console.log(IMG_PATH + item.name)}
                        <img
                            src={IMG_PATH + item.name}
                            alt={item.name}
                            loading='lazy'
                        />
                        <ImageListItemBar
                            title={decodeURI(item.name)}
                            subtitle={decodeURI(item.name)}
                            actionIcon={
                                <IconButton
                                    id={item.name}
                                    onClick={showComments}
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.name}`}
                                >
                                    <Comment id={item.name} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Feed;
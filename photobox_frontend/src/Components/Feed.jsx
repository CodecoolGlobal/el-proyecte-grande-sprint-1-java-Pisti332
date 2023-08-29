import { useState, useEffect } from 'react';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Loading from './Loading/Loading';
import {
    Box,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Comment } from '@mui/icons-material';

const Feed = ({ showComments }) => {
    const [loading, setLoading] = useState(true);
    const [imagesData, setImagesData] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            setImagesData(null);
            const request = await fetch('/api/images/get/20');
            const result = await request.json();
            if (!ignore) {
                setImagesData(convertImagesObject(result));
                setLoading(false);
            }
        }

        let ignore = false;
        fetchImages();
        return () => {
            ignore = true;
        };
    }, []);
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    function convertImagesObject(fetchResult) {
        console.log(fetchResult);
        const result = [];
        for (const key in fetchResult.images) {
            const subResult = { name: key, data: fetchResult.images[key] };
            result.push(subResult);
        }
        console.log(result);
        return result;
    }

    if (loading) {
        return (
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='80vw'
                height='80vh'
            >
                <Loading />
            </Box>
        );
    }

    return (
        <Box maxWidth={matchDownMd ? '93vw' : '80vw'}>
            <ImageList cols={matchDownMd ? 1 : 2} gap={30}>
                {imagesData.map((item) => (
                    <ImageListItem key={item.name}>
                        <img
                            src={`data:image/jpeg;base64,${item.data}`}
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

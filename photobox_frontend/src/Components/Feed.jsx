import { useState, useEffect } from 'react';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Loading from './Loading/Loading';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Comment } from '@mui/icons-material';

const Feed = ({ showComments, imagesData, setImagesData }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            setImagesData(null);
            const request = await fetch('/api/images/get/20');
            const result = await request.json();
            if (!ignore) {
                setImagesData(result.images);
                setLoading(false);
            }
        }

        let ignore = false;
        fetchImages();
        return () => {
            ignore = true;
        };
    }, [setImagesData]);
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

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
                {console.log({ imagesData })}
                {imagesData.map((item) => (
                    <ImageListItem key={item.imageName}>
                        <img
                            src={`data:image/jpeg;base64,${item.imageData}`}
                            alt={item.imageName}
                            loading='lazy'
                        />
                        <ImageListItemBar
                            title={decodeURI(item.imageName)}
                            subtitle={decodeURI(item.userName)}
                            actionIcon={
                                <IconButton
                                    id={item.imageName}
                                    onClick={showComments}
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.imageName}`}
                                >
                                    <Comment id={item.imageName} />
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

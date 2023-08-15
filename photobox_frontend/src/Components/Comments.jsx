import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Loading from './Loading/Loading';
import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';

export default function Comments({ imageName, user, isUploadDisabled }) {
    const [image, setImage] = useState(null);
    const [comments, setComments] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);

    const fetchImage = (imageName) => {
        return fetch(`/api/images/image/${imageName}`).then((res) =>
            res.json(),
        );
    };
    const fetchComments = (imageId) => {
        return fetch(`/api/getcomments/${imageId}`).then((res) => res.json());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const comment = Object.fromEntries(formData.entries());
        const formJson = {
            content: comment.comment,
            userId: user.id,
            imageId: image.id,
        };
        const commentToAdd = {
            content: comment.comment,
            id: image.id,
            image: image,
            user: user,
        };

        setComments([...comments, commentToAdd]);

        fetch('/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userToken')).token}`
            },
            body: JSON.stringify(formJson),
        });
    };

    useEffect(() => {
        fetchImage(imageName).then((image) => {
            setImage(image);
            fetchComments(image.id).then((comments) => {
                console.log(comments);
                setComments(comments);
                setImageLoading(false);
            });
        });
    }, [imageName]);

    if (imageLoading) {
        return <Loading />;
    }

    return (
        <Box>
            <Card
                sx={{ width: '80vw', marginRight: '20px', marginTop: '10px' }}
            >
                <CardMedia
                    sx={{ height: '60vh' }}
                    image={`/img/${image.name}`}
                    title={image.name}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {image.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Todo...
                    </Typography>
                </CardContent>
            </Card>
            <List>
                <Box>
                    {comments.map((item) => (
                        <Box key={item.id}>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Avatar alt='Remy Sharp' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.user.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                            >
                                                {item.content}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </Box>
                    ))}
                </Box>
            </List>
            <form className='container' onSubmit={handleSubmit}>
                <TextField
                    disabled={isUploadDisabled}
                    name='comment'
                    rows={4}
                    cols={40}
                    id='outlined-basic'
                    label='New comment'
                    variant='outlined'
                />
                <Typography className='divider' />
                <IconButton type='submit' className='button'></IconButton>
            </form>
        </Box>
    );
}

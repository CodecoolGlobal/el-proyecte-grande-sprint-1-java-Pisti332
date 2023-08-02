import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Loading from './Loading/Loading';
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';

export default function Comments({ imageName, userId }) {

    const [image, setImage] = useState(null);
    const [comments, setComments] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);

    const fetchImage = (imageName) => {
        return fetch(`/api/images/image/${imageName}`).then((res) => res.json());
    };

    const fetchComments = (imageId, userId) => {
        return fetch(`/api/comments/${imageId}/${userId}`).then((res) => res.json());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson)

        fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        })

        /*setComments(...comments, {
            id: 1,
            imageName: event.target.id,
            user: user.userName,
            comment: formJson.comment,
        });*/
    };

    useEffect(() => {
        //setTourLoading(true);
        fetchImage(imageName)
            .then((image) => {
                fetchComments(image.imageId, userId)
                    .then((comments) => {
                        setComments(comments);
                        setImage(image);
                        setImageLoading(false);
                    });
            });
    }, []);


    if (imageLoading) {
        return <Loading />;
    }

    return (
        <>
            <List>
                <Box>
                    {comments.map((item) => (
                        <Box key={item.id}>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Avatar alt='Remy Sharp' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.user}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                            >
                                                {item.comment}
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
                    name='comment'
                    rows={4}
                    cols={40}
                    id='outlined-basic'
                    label='New comment'
                    variant='outlined'
                />
                <Typography className='divider' />
                <IconButton type='submit' className='button'>
                </IconButton>
            </form>
        </>
    );
}

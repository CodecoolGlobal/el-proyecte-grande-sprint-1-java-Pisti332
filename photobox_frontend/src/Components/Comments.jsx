import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import { Send } from '@mui/icons-material';

export default function Comments({ comments, handleSubmit }) {
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

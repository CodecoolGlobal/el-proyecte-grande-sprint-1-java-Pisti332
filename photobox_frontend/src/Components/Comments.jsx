import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Divider, FormControl, IconButton, List, ListItem, ListItemAvatar, ListItemText, OutlinedInput, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

export default function Comments({ specComments, handleSubmit }) {
  const [comments, setComments] = useState([null]);

  return (<Box>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box>
        {specComments.map((item) => (
          <Box key={item.imageName}>
            <ListItem
              alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.user}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.comment}
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>


            <form className='container' onSubmit={handleSubmit}>
              
                <TextField name="comment"
                  rows={4}
                  cols={40}
                  id="outlined-basic" label="New comment" variant="outlined" />
                <Typography className='divider' />
                <IconButton
                  type="submit"
                  className='button'
                  id={item.imageName}
                  sx={{ color: 'rgba(155, 155, 155, 0.54)' }}
                  aria-label={`info about ${item.imageName}`}
                >
                  <Send />
                </IconButton>
              
            </form>
          </Box>
        ))}
      </Box>

    </List >
  </Box >
  )
}

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
    imageName: 'Cute Cat',
    user: 'Garfield',
    comment: 'Nekem nem!'
  }
]
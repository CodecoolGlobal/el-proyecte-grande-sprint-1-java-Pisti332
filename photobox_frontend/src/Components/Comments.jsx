import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

export default function Comments({ comments, handleSubmit }) {

  return (<Box>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box>
        {comments.map((item) => (
          <Box key={item.imageName}>
            <ListItem
              alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
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


            
          </Box>
        ))}
      </Box>

    </List >
    <form className='container' onSubmit={handleSubmit}>
              
                <TextField name="comment"
                  rows={4}
                  cols={40}
                  id="outlined-basic" label="New comment" variant="outlined" />
                <Typography className='divider' />
                <IconButton
                  type="submit"
                  className='button'
                  sx={{ color: 'rgba(155, 155, 155, 0.54)' }}
                >
                  {/* <Send /> */}
                </IconButton>
              
            </form>
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
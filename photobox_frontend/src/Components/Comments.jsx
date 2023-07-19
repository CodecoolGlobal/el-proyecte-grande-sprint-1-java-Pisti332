import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export default function Comments({ comments }) {
  //const [comments, setComments] = useState([commentExamples]);

  return (<Box>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box>
        {comments.map((item) => (
          <ListItem
            key={item.imageName}
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
        ))}
      </Box>
    </List>
  </Box>
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
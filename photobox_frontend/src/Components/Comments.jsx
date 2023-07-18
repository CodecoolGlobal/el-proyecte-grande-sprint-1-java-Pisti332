import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [comments, setComments] = useState([commentExamples]);
  return (<Box>
    {commentExamples.map((comment) =>
      <Box
        key={comment.id}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label={comment.user}
            multiline
            rows={3}
            defaultValue={comment.comment}
          />

        </div>
      </Box>
    )}
  </Box>
  )
}

const commentExamples = [
  {
    id: 1,
    user: 'Palika',
    comment: 'Nagyon cuki!'
  },
  {
    id: 2,
    user: 'Marika',
    comment: 'Nekem is tetszik!'
  },
  {
    id: 3,
    user: 'Garfield',
    comment: 'Nekem nem!'
  }
]
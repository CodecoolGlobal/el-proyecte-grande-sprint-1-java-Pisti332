import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';


const Picture = ({ picture }) => {
    return (
        <>
            <Card sx={{ width: '80vw', marginRight: '20px', marginTop: '10px' }}>
                <CardMedia
                    sx={{ height: '60vh' }}
                    image={`/img/${picture}`}
                    title={picture}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {picture}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Todo...
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Picture;

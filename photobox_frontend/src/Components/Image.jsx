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
                    image={picture.img}
                    title='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Picture;

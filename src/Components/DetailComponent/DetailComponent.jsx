import React from 'react';

// CSS
import "./DetailComponent.css";

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const DetailComponent = ({ product }) => {
    const { img } = product;

    return (
        <Card sx={{ maxWidth: 1000 }} >
            <CardMedia
            className='detail-card-container'
                component="img"
                alt="Producto"
                height="300"
                image={img}
            />
            <CardContent className='card-typo'>
                <Typography className='card-typo' gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography className='card-typo' variant="body2" color="text.secondary">
                    {product.date}
                </Typography>
                <Typography className='card-typo' variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography className='card-typo' variant="body2" color="text.secondary">
                    {product.category}
                </Typography>
                <Typography className='card-typo' variant="body2" color="text.secondary">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions className='card-typo'>
                <Button size="xx-large">-</Button>
                <Button size="xx-large">+</Button>
            </CardActions>
        </Card>
    );
}


export default DetailComponent;

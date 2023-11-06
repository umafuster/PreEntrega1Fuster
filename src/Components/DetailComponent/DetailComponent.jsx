import React, { useContext, useState } from 'react';

// CSS
import "./DetailComponent.css";

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProductCount from '../ProductCount/ProductCount';
import CartContext from '../../Context/CartContext';


const DetailComponent = ({ product }) => {

    const { cart, AddToCart } = useContext(CartContext);

    const { img } = product;

    const [quantity, setQuantity] = useState(1);

    const handleRest = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    const handleAdd = () => {
        quantity < product.stock && setQuantity(quantity + 1);
    };



    return (
        <div>
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
                        ${product.price}
                    </Typography>
                </CardContent>
                <ProductCount quantity={quantity} handleAdd={handleAdd} handleRest={handleRest} AddToCart={() => { AddToCart(product, quantity) }} />
            </Card>

        </div>
    );

}


export default DetailComponent;

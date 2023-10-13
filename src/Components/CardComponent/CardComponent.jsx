import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({item}) => {
const {name, date, description, img} = item;
    return (
    <Card sx={{ maxWidth: 350 }}>
      
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="Producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      
    </Card>
  );
};

export default CardComponent;
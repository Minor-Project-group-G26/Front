import React, { useEffect } from 'react';
import {
    Card,
    CardActionArea,
    // CardActions,
    CardContent,
    CardMedia,
    // Button,
    Typography,
    // Icon,
} from '@material-ui/core';
import Logo from './logo.svg'
import { loadCSS } from 'fg-loadcss';
import './CardItem.css'
import {CaroStyles} from './Styles'



function CardItem(props) {
    const classes = CaroStyles();
    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
          console.log(props.Data)
        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);
    return (

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.Data.link ? `http://localhost:5000/get-file/users/IMG_20200130_201519.jpg`: Logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.movieName} variant="subtitle1" gutterBottom>
            {props.Data.mname}
          </Typography>
          {/* <Typography  variant="body2" color="textSecondary" component="p">
            {data.discription}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    );
}

export default CardItem

import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./card.css";

export default function CardView(props) {
  function view(){
    console.log(`clicked ${props.mobile.name}`);
  }
  return (
    <Card sx={{ minWidth: 300 }} className="card" onClick={view}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={props.mobile.img}
            alt="mobile"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.mobile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.mobile.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

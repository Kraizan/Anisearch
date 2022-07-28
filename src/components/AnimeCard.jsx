import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

function AnimeCard(props){
  return (
      <Card sx={{
        width: "220px",
        height: "70vh",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "hidden",
        margin: "1% 1%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)"
      }}>
        <CardActionArea
          sx={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <CardMedia
            component="img"
            image={props.url}
            alt={props.name}
            sx={{
              height: "86%",
              width: "90%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <CardContent
            sx={{
              padding: "3%",
              fontWeight: "bold",
              textAlign: "center",
              height: "14%",
              overflowY: "hidden",
              width: "90%",
              fontSize: "1.1rem",
            }}
          >
            {props.name}
          </CardContent>
        </CardActionArea>
        <CardContent
          sx={{
            height: "20%",
            textAlign: "left",
            marginTop: "3%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.9rem",
          }}
        >
          <CardContent
            sx={{padding: "0"}}
          >
            <p>Score: {props.score}</p>
            <p>Rank: {props.rank}</p>
            <p>Popularity: {props.popularity}</p>
          </CardContent>
          <CardContent
            sx={{padding: "0"}}
          >
            <p>Type: {props.type}</p>
            <p>Year: {props.year}</p>
            <p>Episodes: {props.episodes}</p>
          </CardContent>
        </CardContent>
      </Card>
  );
}

export default AnimeCard;

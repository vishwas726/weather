import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { IoRainyOutline, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import Typography from "@mui/material/Typography";
const InfoBox = ({ info }) => {
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.jpg?s=1024x1024&w=is&k=20&c=ZiTSjzn40BxqjPL0_3-f-7x0y_pmKqDtaPTo6j83RKk=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668418321923-becc3ef20077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info">
      {" "}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={info.humidity> 70 ? RAIN_URL : info.temp_C > 30 ? HOT_URL  : COLD_URL  }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity> 70 ? <IoRainyOutline /> : info.temp_C > 30 ? <IoSunnyOutline />  : <MdOutlineSevereCold />  }
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Temperature (°C) : {info.temp_C}</p>
            <p>Temperature (°F) : {info.temp_F}</p>
            <p>FeelsLikeC : {info.FeelsLikeC}</p>
            <p>FeelsLikeF : {info.FeelsLikeF}</p>
            <p>Cloud Cover : {info.cloudcover}</p>
            <p>Humidity : {info.humidity}</p>
            <p>Observation Time : {info.observation_time}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default InfoBox;

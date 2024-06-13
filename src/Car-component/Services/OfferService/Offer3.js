import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import airpot from "../../../assets/images/service/airpot.png";
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: "220px",
            backgroundSize: "100% 100%",
            overflow: "hidden",
          }}
          image={airpot}
          alt="Phone Reservation"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            component="div"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="20px"
          >
            Airport Pickup and Drop
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            We offer economical Airport pickup and drop services from any
            location in Jaipur City.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

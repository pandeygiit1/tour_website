import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CarBookingWithPhone from "../../../assets/images/service/Phonebooking.png";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: "220px",
            overflow: "hidden",
            backgroundSize: "100% 100%",
          }}
          image={CarBookingWithPhone}
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
            Phone Reservation
          </Typography>
          <Typography
            variant="body2"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            We offer round-the-clock availability to book your reservation
            either through our website or by giving us a call.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Youngman from "../../../assets/images/service/CustomerSupport.png";

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
          image={Youngman}
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
            Customer Support
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            If you have any problems or questions, our team is available to help
            you. Simply send us a message or give us a call, and we will assist
            you in any way we can.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

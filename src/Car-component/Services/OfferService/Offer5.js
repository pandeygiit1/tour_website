import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import offer9 from "../../../assets/images/service/offer9.png";

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
          image={offer9}
          alt="Customized Tour Packages"
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
            Customized Tour Packages
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            We offer personalized tour packages that can be tailored to suit
            individual preferences and needs. Our clients can choose from a
            range of activities, destinations, and accommodations to create
            their ideal itinerary. With our customized tour packages, travelers
            can have a unique and unforgettable experience that perfectly fits
            their interests and budget.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

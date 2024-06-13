import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import bestcar from "../../../assets/images/service/bestcar.png";

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
          image={bestcar}
          alt="Best Quality Cars"
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
            Best Quality Cars
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            We understand the importance of comfort and hygiene during a
            journey, which can make the experience feel much lighter. We ensures
            a comfortable and hygienic trip.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

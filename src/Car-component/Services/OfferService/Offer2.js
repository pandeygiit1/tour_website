import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BestPriceGuarantee from "../../../assets/images/service/BestPriceGuarantee.png";

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
          image={BestPriceGuarantee}
          alt="Best Price Guarantee"
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
            Best Price Guarantee
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#343a40"
            fontFamily="Poppins"
            fontSize="14px"
          >
            We strive to deliver superior services to our valued customers while
            keeping our prices competitive and reasonable. We have some
            fantastic deals available that we're sure you'll love.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

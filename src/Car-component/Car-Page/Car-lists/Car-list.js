import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Car1 from "../../../assets/images/cars/Car1.png";
import style from "./Car-list.module.css";
import { useNavigate } from "react-router-dom";
import booking from "../../Home-page-components/AvailableCars/HomeDivCarCard/HomeDivCarCard";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate();
  };
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: "220px",
            overflow: "hidden",
            backgroundSize: "100% 100%",
          }}
          image={Car1}
          alt="Car"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            component="div"
            color="rgb(108, 117, 125)"
            fontFamily="Poppins, sans-serif"
            fontSize="25px"
            fontWeight="500"
          >
            Maruti Suzuki Swift Dzire
          </Typography>
          <div className={style.carSpecification}>
            <div className={style.carDetail}>
              <div className={style.Icon}>5 Passengers </div>
              <div className={style.Icon}> Petrol</div>
              <div className={style.Icon}> A.C.</div>
            </div>
            <div className={style.carRate}>
              <div className={style.from}>
                <h4>From</h4>
              </div>
              <div className={style.kilometer}>
                <h5>₹12</h5>
                <h6>/Km</h6>
              </div>
            </div>
          </div>
          <div className={style.bookNow}>
            <button className={style.bookBtn} onClick={handleClick}>
              Book Now
            </button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

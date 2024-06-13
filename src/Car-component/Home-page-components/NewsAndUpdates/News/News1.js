import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './News.css'

export default function MediaCard({ newsAndUpdates }) {
  return (
    <Card className="Newscard" style={{backgroundColor: "#fff"}}>
      <CardMedia
        sx={{ height: "220px", width: "100%", backgroundSize: "100% 100%", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
        image={newsAndUpdates.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div" align="center" fontSize="20px" fontWeight="520" fontFamily="Poppins, sans-serif"  color="#112E3B">
          {newsAndUpdates.title}
        </Typography>
      </CardContent>
      <div className='NewsCardCardActions'>
        <Link className="newsLink" to={{
          pathname: "/blog/" +newsAndUpdates.slugUrl,
        }}>
          <button className='NewsBlogbtn'>Read More</button>
        </Link>
      </div>
    </Card>
  );
}
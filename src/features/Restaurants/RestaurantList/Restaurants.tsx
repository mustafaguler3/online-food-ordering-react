import React, { useEffect, useState } from "react";
import { Restaurant } from "../../../models/Restaurant";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import restaurantService from "../../../services/restaurantService";
import { Product } from '../../../models/Product';
import { Avatar, Box, CardActionArea, CardHeader, Container, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Restaurants() {
  const [restaurants, setRestaurant] = useState<Restaurant[]>([]);
  const [image,setImage] = useState<string>()

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantService.getRestaurants();
      if (data) {
        setRestaurant(data);
      }
    };
    fetchRestaurant();
  }, []);

  return (
    <>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
              gap: 3,
            }}
          >
            {restaurants.map((restaurant,index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: 345,
                  position: 'relative',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardActionArea 
                    component={Link}
                    to={`/restaurants/${restaurant.id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={restaurantService.getRestaurantImage(
                      restaurant.products[0].foodImageUrls[0]
                    )}
                    alt={restaurant.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                    {/* Rating */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Rating name={`rating-${restaurant.id}`} value={4} readOnly precision={0.5} />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        4.0
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                {/* Add to Cart and Details */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                  }}
                >
                  <Button variant="contained" size="small" startIcon={<FontAwesomeIcon icon={faInfo} />}>
                    Details
                  </Button>
                  <IconButton color="primary">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Box>
      
    </>
  );
}

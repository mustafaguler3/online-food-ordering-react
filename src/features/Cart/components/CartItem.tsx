
import React from 'react'
import { Link } from 'react-router-dom'
import { BasketItem } from '../types/cartTypes'
import productService from '../../../services/productService'
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import { Remove, Add } from '@mui/icons-material'

interface BasketItemProps {
  items: BasketItem[] | undefined
}

export default function CartItem({items}: BasketItemProps) {
  return (
    <Container className="order-summery-section sticky-top">
      {items?.map((item, index) => (
        <Box key={index} className="checkout-detail" sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
            Cart Items
          </Typography>
          <Box className="order-summery-section mt-0" sx={{ padding: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className="horizontal-product-box" sx={{ display: 'flex', alignItems: 'center', border: 1, borderRadius: 2, p: 2, boxShadow: 1 }}>
                  <Avatar
                    src={productService.getProductImage(item.productImage)}
                    alt={item.productName}
                    style={{ height: '50px', width: '100px', borderRadius: 2 }}
                  />
                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {item.productName}
                    </Typography>
                    <Typography variant="body1" color="primary" sx={{ mb: 1 }}>
                      ${item.unitPrice}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                      <Typography variant="body2">Serve 1</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <Remove />
                        </IconButton>
                        <input type="number" style={{ width: '50px', textAlign: 'center', border: '1px solid #ccc', borderRadius: 4 }} />
                        <IconButton>
                          <Add />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mt: 4 }}>
              Bill Details
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Typography variant="body1" color="text.secondary">Sub Total</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>${110}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Typography variant="body1" color="text.secondary">Delivery Charge (2 kms)</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'green' }}>Free</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Typography variant="body1" color="text.secondary">Discount (10%)</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>${11}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderTop: 1, borderColor: 'divider' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>To Pay</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>${99}</Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            component={Link}
            to="/checkout"
          >
            Proceed to payment
          </Button>
          <img
            src="../assets/images/svg/dots-design.svg"
            alt="dots"
            className="dots-design"
            style={{ marginTop: '20px', width: '100%' }}
          />
        </Box>
      ))}
    </Container>
      
  )
}

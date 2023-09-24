import { Box, Button, Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import React from 'react'
import Sticky from 'react-sticky-el';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



export default function StickyNav() {
    let count = 50;
    return (
        <>
            <Sticky>
                <Box component="ul" className='sticky-container'>
                    <div className="logo">
                        <Typography variant='h5' >ShopMag</Typography>
                    </div>
                    <div className='menu-center'>
                        <Typography className="menu-item" variant='h5' >Home</Typography>
                        <Typography className="menu-item  shop-item" variant='h5' >Shop <ArrowDropDownIcon />
                        <Box className="hidden">
                            <List component="nav" aria-label="mailbox folders" className="menu-item" >
                                <ListItem >
                                    <ListItemText primary="Men" />
                                </ListItem>
                                <Divider />

                                <Divider light />
                                <ListItem >
                                    <ListItemText primary="Women" />
                                </ListItem>
                            </List>
                        </Box>
                            </Typography>
                        <Typography variant='h5' className="menu-item">About</Typography>
                        <Typography variant='h5' className="menu-item" >Contact</Typography>
                    </div>
                    <div className='group-function'>
                        <Button variant="contained" className='btn-login' sx={{
                            padding: "9px 18px",
                            backgroundColor: "#000000",
                            color: "#ffffff",
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000000',
                                border:"none",
                            }
                        }}>
                            <Typography variant='h5' >Login</Typography>
                        </Button>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={count} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </div>
                </Box>
            </Sticky>
        </>
    )
}

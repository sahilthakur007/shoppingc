import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Box } from "@mui/material";
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

import React from "react";
import { useNavigate } from "react-router-dom";
export default ({ userInfo,setuserInfo }) => {
    const navigate = useNavigate()
    return (<>
        <AppBar  >
            <Toolbar sx={{
                bgcolor: "#ed6c02"
            }}>
                {/* <IconButton size="large" color="inherit"><ShoppingBasket onClick={() => navigate("/")} /></IconButton> */}

                <Typography sx={{
                    mr: "58%"
                }}>Vegetable Shop</Typography>
                <Box>
                    <Stack direction="row" spacing={3}>
                        <Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }} onClick={() => {
                            navigate("/")
                        }} >
                            Home
                        </Button>
                        <Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }}
                            onClick={() => {
                                navigate("/vegetable")
                            }} >
                            Buy Vegetable
                        </Button>
                        <Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }}
                            onClick={() => {
                                navigate("/cart")
                            }} >
                            Cart
                        </Button>
                        <Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }}
                            onClick={() => {
                                navigate("/aboutus")
                            }} >
                            AboutUs
                        </Button>

                        { !userInfo?(<Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }}
                            onClick={() => {
                                navigate("/signUp")
                            }} >
                            Login
                        </Button>)

                        :(<Button color="inherit" size="large" sx={{
                            textTransform: "none"
                        }}
                            onClick={() => {
                                setuserInfo(false)
                                navigate("/")
                            }} >
                            Logout
                        </Button>)}

                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    </>)
}
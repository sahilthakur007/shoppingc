import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Cart } from "../context";
import Singelproduct from "./singelproduct"
import { addItem, getItems, deleteItem } from "../api/cartApi";

export default () => {
    const { cart, setcart } = useContext(Cart);
    // console.log(cart);
    useEffect(() => {

        async function fetchData() {
            const { data } = await getItems();
            // console.log(data);
            setcart(data.cartItems);
            settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
        }
        fetchData();


    }, [cart])
    const [total, settotal] = useState(0);

    return (
        <>
            <Box>
                <Typography color="secondary" variant="h4" sx={{
                    margin: "3rem",
                    marginTop: "5rem",
                    "marginBottom": "2rem"
                }}>Total : {total} </Typography>
            </Box>
            <Box sx={{
                margin: "3rem",
                // marginTop: "3rem"
            }}>
                <Grid container spacing={2}  >
                    {
                        cart.map((product) => (
                            <Grid item sm={6} md={3} lg={3} xl={2}>
                                <Singelproduct product={product} key={product._id} iscart={true} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>


        </>
    )
}
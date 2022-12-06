import React, { useContext, useEffect } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material"
import { Cart } from "../context"
import { addItem, getItems, deleteItem } from "../api/cartApi";


export default ({ product, iscart }) => {
    const { cart, setcart } = useContext(Cart);
  
    const handleClick1 = async () => {
        setcart([...cart, product]);
        const res = await addItem(product);
    }
    const handleClick2 = async () => {
        // setcart((prevcart) => {
        //     return cart.filter((prod) => (prod.id !== product.id))
        // })
        console.log(product._id)
        await deleteItem(product._id);
    }
    return (
        <>
            <Card display="flex">
                <CardMedia
                    component="img"
                    src={product.image}
                    height="160rem"
                />
                <CardContent sx={{
                    textAlign: "center"
                }}>
                    <Typography variant="h4" color="error">{product.name}</Typography>
                    <Typography variant="h5">Rs: {product.price}</Typography>
                </CardContent>
                <CardActions sx={{
                   
                    justifyContent: "center"
                }}>
                    {iscart ? <Button variant="contained" color="secondary" size="sm" onClick={handleClick2} >
                        Remove from Cart
                    </Button> : <Button variant="contained" color="secondary" size="sm" onClick={handleClick1} >
                        Add to Cart
                    </Button>}
                </CardActions>
            </Card>
        </>
    )
}
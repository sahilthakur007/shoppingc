import React from "react";
import { useState } from "react"
import { TextField, Button, Paper, Stack, Box, Typography } from "@mui/material"
// import { sendUser } from "../api/userapi"
import { useNavigate } from "react-router-dom";
import { signup } from "../api/userApi"

export default ({ setuserInfo }) => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        console.log(e.target.name)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleClick = async (e) => {
        console.log(user.email)
        console.log(user.password)
        const res = await signup(user)
        console.log(res.data)
        localStorage.setItem("profile", JSON.stringify({ ...res?.data }))
        if (res.data)
        setuserInfo(true)
    }
    return (

        <>
            <Box sx={{
                width: "30%",
                mx: "auto",
                mt: "17%"

            }}>
                <Paper >
                    <Stack spacing={3} sx={{
                        m: "3%"
                    }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 500
                        }}>
                            Registration From
                        </Typography>
                        <TextField label="Enter your email" type="email" autoFocus={true} name="email" value={user.email} onChange={handleChange}>

                        </TextField>
                        <TextField label="create your password" type="password" name="password" autoFocus={true} onChange={handleChange} value={user.password}>

                        </TextField>

                        <Typography sx={{ cursor: "pointer" }} onClick={() => navigate("/signIn")}>
                            Already have account click to login account
                        </Typography>
                        <Box sx={{
                            alignItems: "center"
                        }}>
                            
                            <Button variant="contained" color="warning" size="large" sx={{
                                width: "20%",
                                m: "2%",
                                textTransform: "none"
                            }} onClick={handleClick} >

                                Register
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}
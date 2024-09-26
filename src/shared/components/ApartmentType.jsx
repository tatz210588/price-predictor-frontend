import {Card, Typography } from '@mui/material';
import React from 'react';


const ApartmentType = ({ img, text, handleShow }) => {
    return (
            <Card onClick={() => handleShow(true)} sx={{
                textAlign: "center",
                py: 2,
                backgroundColor: "rgba(193, 229, 240, 1)",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                willChange: "transform",
                "&:hover": {
                    transform: "scale(1.02)",
                },
            }}>
                <img src={img} alt={text} width={"45px"} />
                <Typography variant='body1' sx={{ mt: 1.5, textTransform:"uppercase"}}>
                    {text}
                </Typography>
            </Card>
      

    );
}

export default ApartmentType;

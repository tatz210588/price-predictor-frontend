import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = ({ children,borderColor,bgColor,heightratio ,justifyContent}) => {
    const CardContainer = styled(Box)(({ theme }) => ({
        textAlign: "center",
        backgroundColor: bgColor ? bgColor : "transparent",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        willChange: "transform",
        width: "100%",
        height: "auto",
        aspectRatio: heightratio ? '1 / 0.7' : '1 / 1', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: "pointer",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: borderColor ? borderColor : "transparent",
        position: 'relative',
      
        "&:hover": {
          transform: "scale(1.02)",
        },
      
        [theme.breakpoints.down('sm')]: {
          aspectRatio: 'auto',
          height: 'auto',   
          flexDirection:"row",   
          justifyContent:justifyContent?justifyContent:"start",
          gap:"10px",
          borderRadius:"5px",
          padding: "10px 16px",
          boxSizing: "border-box",
         
        }
      }));
      

    return (
        <CardContainer>
            {children}
        </CardContainer>
    );
};

export default CardContainer;

import {  Box, Grid,Typography } from '@mui/material'; // Corrected Grid import
import React from 'react';
import { Constants } from '../../shared/constants';
import ApartmentType from '../../shared/components/ApartmentType';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import BgContainer from '../../shared/components/BgContainer';

const HeroSection = ({ handleShow }) => {
    const apartmentData = [
        {
            img: Constants.customImages.blockFlats,
            text: "Block of flats"
        },
        {
            img: Constants.customImages.blockFlats,
            text: "Terraced house"
        },
        {
            img: Constants.customImages.semiDetachedHouse,
            text: "Semi-detached house"
        },
        {
            img: Constants.customImages.detachedHouse,
            text: "Detached house"
        },
        {
            img: Constants.customImages.townHouse,
            text: "Town house"
        },
    ];

    const data = [
        {
            icon: <FavoriteIcon />,
            number: "2 min",
            text: "electronic estimate right away"
        },
        {
            icon: <StarIcon />,
            number: "879,817 ",
            text: "assessments made since 2018"
        },
        {
            icon: <BoltIcon />,
            number: "4.8",
            text: "stars on Google (brokers average 3.2)"
        },
    ]

    return (
        <BgContainer height={`calc(100vh + 150px)`} >
            <Box px={{xs:"20px",lg:"0"}} pt={{xs:"100px",lg:"0"}}>
            <Typography variant='h6' color='text.secondary' mb={2.5} letterSpacing={"0.15rem"}  textAlign={{xs:"start",lg:"center"}}>
                EVALUATE YOUR APARTMENT
            </Typography>
            <Typography variant='h1' color='text.secondary' sx={{fontSize:{xs:"35px",lg:"55px"},lineHeight:{xs:"45px",lg:"65px"}}}  textAlign={{xs:"start",lg:"center"}}>
                What type <br /> of apartment are you evaluating?
            </Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "20px" }}>
                {apartmentData.map((item, index) => (
                    <Grid item xs={index==0?12:6} lg={2} key={index}> {/* Moved key to Grid */}
                        <ApartmentType img={item.img} text={item.text} handleShow={handleShow} />
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "40px" }}>
                {data.map((item, index) => (

                    <Grid item xs={12} lg={3} key={index}>
                        <Typography variant='h6' sx={{ display: 'flex', alignItems:"center",fontWeight:"300", color: "text.secondary" }}>
                            {item.icon}
                            <Typography variant='h6' fontWeight={"bold"} color='text.secondary' mx={1}>{item.number}</Typography>
                            {item.text}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            </Box>
          

        </BgContainer>
    );
}

export default HeroSection;

import React from 'react'
import ApartmentRate from '../../shared/components/ApartmentRate'
import { LiaStarSolid } from "react-icons/lia"; // full
import { LiaStar } from "react-icons/lia"; // empty
import { LiaStarHalfAltSolid } from "react-icons/lia"; //half
import { GiStarsStack } from "react-icons/gi" //new
import { Box, Grid, Typography } from '@mui/material';
import { useStepStore } from '../../shared/store/usestepauthstore.ts';

const ApartmentRateSummary = () => {
    const {nextStep, setFormValues}=useStepStore()
    const data = [
        {
            icon: GiStarsStack,
            quality: "New",
            description: "New and uninhabited"
        },
        {
            icon:LiaStarSolid,
            quality: "Excellent",
            description: "Recently renovated and not lived in"
        },
        {
            icon: LiaStarHalfAltSolid,
            quality: "Good",
            description: "Timely, not worn out"
        },
        {
            icon:LiaStarHalfAltSolid,
            quality: "Satisfactory",
            description: "Parts in need of renovation"
        },
        {
            icon:LiaStar,
            quality: "Bad",
            description: "In need of extensive renovation"
        },

    ]

    const handleRateClick = (quality) => {
        setFormValues({ apartmentrate: quality });
        nextStep();
    };
    return (

        <Box>
            <Typography variant='h1' color='text.secondary' my={2}>How is the apartment?</Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                {data.map((item, index) => (
                    <Grid item xs={12} lg={1.6} key={index} onClick={() => handleRateClick(item.quality)}>
                        <ApartmentRate key={index} quality={item.quality} description={item.description}  icon={<item.icon color='#022640' size={40}/>}/>
                    </Grid>
                ))}
            </Grid>
        </Box>


    )
}

export default ApartmentRateSummary

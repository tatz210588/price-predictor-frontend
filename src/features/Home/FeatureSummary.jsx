import React from 'react'
import PropertyFeature from '../../shared/components/PropertyFeature';
import { Box, Grid, Typography } from '@mui/material';
import { GrElevator } from "react-icons/gr";
import { FaHotTubPerson } from "react-icons/fa6";
import { MdOutlineBalcony } from "react-icons/md";


const FeatureSummary = () => {
    const data = [
        {
            icon: MdOutlineBalcony,
            description: "The apartment has a balcony"
        },
        {
            icon: GrElevator,
            description: "The building has an elevator"
        },
        {
            icon: FaHotTubPerson,
            description: "The apartment has a sauna"
        },

    ]
    return (
        <Box>
            <Typography variant='h1' color='text.secondary' my={2}>Does it have these features?</Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                {data.map((item, index) => (
                    <Grid item xs={12} lg={1.6} key={index}>
                        <PropertyFeature description={item.description} icon={<item.icon color='rgba(193, 229, 240)' size={60} />} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default FeatureSummary

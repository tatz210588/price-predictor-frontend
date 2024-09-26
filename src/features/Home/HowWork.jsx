import { Typography, Grid, Button, Box } from '@mui/material'
import React from 'react'
import { Constants } from '../../shared/constants'
import WorkStep from '../../shared/components/WorkStep'

const HowWork = ({ handleScrollUp }) => {
    const WorkStepData = [
        {
            img: Constants.customImages.laptop,
            text: "Enter the basic information about your apartment: Location, size and features."
        },
        {
            img: Constants.customImages.building,
            text: "We calculate an estimate for your apartment based on hundreds of thousands of completed transactions."
        },
        {
            img: Constants.customImages.handshake,
            text: "We calculate an estimate for your apartment based on hundreds of thousands of completed transactions."
        },
    ]
    return (
        <Box py={"5%"} p={{xs:"20px"}}>
            <Typography variant='h1' textAlign={{xs:"start",lg:"center"}}>How does the price estimate work?</Typography>
            <Grid container spacing={{xs:2,lg:10}} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "20px" }}>
                {WorkStepData.map((item, index) => (
                    <Grid item xs={12} lg={3} key={index}>
                        <WorkStep img={item.img} text={item.text} index={index} />
                    </Grid>
                ))}
            </Grid>
            <Box textAlign={"center"} my={5}>
                <Button variant='outlined' onClick={handleScrollUp} >Start the assessments</Button>
            </Box>



        </Box>
    )
}

export default HowWork

import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { IoBagCheckOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import CardContainer from '../../shared/components/CardContainer';
import { useStepStore } from '../../shared/store/usestepauthstore.ts';
const OwnedRented = () => {
    const { nextStep, setFormValues,formValues } = useStepStore()
    const data = [
        {
            icon: IoBagCheckOutline,
            text: "Own"
        },
        {
            icon: FaHandHoldingUsd,
            text: "Hired"
        },
    ]
    const handleTypeClick = (text) => {
        setFormValues({ apartmenttype:  text });
        nextStep()
    };

    return (
        <>
            <Typography variant='h1' color='text.secondary' my={2}>Does it have these features?</Typography>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                {data.map((item, index) => (
                    <Grid item xs={6} lg={1.8} key={index} onClick={() => handleTypeClick(item.text)}>
                        <CardContainer bgColor={formValues?.apartmenttype==item?.text?"#7bcae1":"rgba(193, 229, 240)"} heightratio={7} justifyContent={"center"}>
                            <Box>
                                {<item.icon size={50} />}
                                <Typography variant='h5' textTransform={"uppercase"} my={2}>{item.text}</Typography>
                            </Box>

                        </CardContainer>
                    </Grid>
                ))}
            </Grid>
            <Typography variant='body2' color='primary.light' mt={5}>On a rental plot, the partners pay their share of the plot's rent for <br /> consideration, which affects the value and demand of the apartment.</Typography>
        </>
    )
}

export default OwnedRented

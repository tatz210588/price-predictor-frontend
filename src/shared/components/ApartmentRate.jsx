import { Box, Typography } from '@mui/material';
import React from 'react';
import CardContainer from './CardContainer';
import { useStepStore } from '../../shared/store/usestepauthstore.ts';

const ApartmentRate = ({ quality, description, icon }) => {
    const {formValues}=useStepStore()
    return (
        <CardContainer bgColor={formValues?.apartmentrate== quality?"#7bcae1":"rgba(193, 229, 240, 1)"}>
          
                {icon}
                <Box >
                    <Typography variant='h6' textTransform={"uppercase"} my={{xs:0,lg:1.5}} textAlign={{xs:"start",lg:"center"}}>{quality}</Typography>
                    <Typography variant='body2' textAlign={{xs:"start",lg:"center"}}>{description}</Typography>
                </Box>
        

        </CardContainer>
    );
}

export default ApartmentRate;

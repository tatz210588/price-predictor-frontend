import { Card, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { FaSquareCheck } from "react-icons/fa6";
import CardContainer from './CardContainer';
import { useStepStore } from '../../shared/store/usestepauthstore.ts';

const PropertyFeature = ({ description, icon }) => {
    const { formValues, setFormValues } = useStepStore();
    const [selected, setSelected] = useState(formValues.apartmentfeature.includes(description));

    useEffect(() => {
        setSelected(formValues.apartmentfeature.includes(description));
    }, [formValues.apartmentfeature, description]);

    const handleCardClick = () => {
        if (!selected) {
            setFormValues({ apartmentfeature: [...formValues.apartmentfeature, description] });
        } else {
            setFormValues({
                apartmentfeature: formValues.apartmentfeature.filter((feature) => feature !== description),
            });
        }
        setSelected((prev) => !prev);
    };

    return (
        <Box
            onClick={handleCardClick}
            sx={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: selected ? "primary.light" : "primary.contrastText"
            }}
        >
            <CardContainer heightratio={0.7}>
                {icon}
                <Typography
                    variant='h5'
                    color="text.secondary"
                    mt={1.5}
                    textAlign={{ xs: "start", lg: "center" }}
                >
                    {description}
                </Typography>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -5,
                        right: 0,
                        display: selected ? 'block' : 'none'
                    }}
                >
                    {selected && <FaSquareCheck color='rgba(193, 229, 240)' size={30} />}
                </Box>
            </CardContainer>
        </Box>
    );
}

export default PropertyFeature;

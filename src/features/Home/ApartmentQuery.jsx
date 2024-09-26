import { Box, Button, LinearProgress } from '@mui/material';
import React from 'react';
import BgContainer from '../../shared/components/BgContainer';
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import WestIcon from '@mui/icons-material/West';
import FormWithSlider from '../../shared/components/Progressbar';
import { Constants } from '../../shared/constants';
import ApartmentRateSummary from './ApartmentRateSummary';
import FeatureSummary from './FeatureSummary';
import OwnedRented from './OwnedRented';
import FormWithLocation from '../../shared/components/locationField';
import { useStepStore } from '../../shared/store/usestepauthstore.ts';

const ApartmentQuery = ({ handleShow }) => {
    const { step, nextStep, previousStep, formValues, setFormValues, resetFormValues, resetStep } = useStepStore();
    const validationSchema = yup.object({

    });

    const handleSubmit = async (values) => {
        console.log("valueinJson",values );
        resetFormValues()
        resetStep()
        handleShow(false);
    };


    const totalSteps = 10;

    const handleNext = (values) => {
        setFormValues(values);
        nextStep()
    };

    const handlePrevious = () => {
        if (step === 0) {
            handleShow(false);
            resetFormValues()
            return;
        }
        previousStep()
    };

    const progress = (step / (totalSteps - 1)) * 100;

    return (
        <BgContainer>
            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize={false}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Box display={"flex"} flexDirection="column" height="100vh">
                            <Box display={"flex"} alignItems={"end"} flexGrow={0} height={"130px"} width="100%">
                                <LinearProgress
                                    variant="determinate"
                                    value={progress}
                                    sx={{
                                        mb: 2,
                                        height: 2,
                                        width: '100%',
                                        backgroundColor: "rgba(200, 200, 200,0.5)",
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: "rgba(193, 229, 240)",
                                        },
                                    }}
                                />
                            </Box>
                            <Box flexGrow={1} overflow={"auto"} maxHeight={"calc(100vh - 250px)"} px={{ xs: "20px", lg: "0" }} sx={{ pt: 3, }}>
                                {
                                    step === 0 && (
                                        <Field
                                            name="apartmentsize"
                                            label="How big is the apartment?"
                                            component={FormWithSlider}
                                            initialValue={10}
                                            finalValue={200}
                                            imgUrl={Constants.customImages.meeterSquare}
                                            onValueChange={(value) => setFieldValue("apartmentsize", value)}
                                        />
                                    )
                                }
                                {
                                    step === 1 && (
                                        <Field
                                            name="room"
                                            label="How many rooms?"
                                            component={FormWithSlider}
                                            initialValue={1}
                                            finalValue={10}
                                            imgUrl={Constants.customImages.roomLayout}
                                            onValueChange={(value) => setFieldValue("room", value)}
                                        />

                                    )
                                }
                                {
                                    step === 2 && (

                                        <Field
                                            name="floorno"
                                            label="What floor is the apartment on?"
                                            component={FormWithSlider}
                                            initialValue={1}
                                            finalValue={35}
                                            imgUrl={Constants.customImages.apartment}
                                            onValueChange={(value) => setFieldValue("floorno", value)}
                                        />

                                    )
                                }
                                {
                                    step === 3 && (

                                        <Field
                                            name="floorcount"
                                            label="How many floors are there in the house?"
                                            component={FormWithSlider}
                                            initialValue={1}
                                            finalValue={35}
                                            imgUrl={Constants.customImages.floor}
                                            onValueChange={(value) => setFieldValue("floorcount", value)}
                                        />

                                    )
                                }
                                {
                                    step === 4 && (

                                        <ApartmentRateSummary />

                                    )
                                }
                                {
                                    step === 5 && (

                                        <FeatureSummary />

                                    )
                                }

                                {
                                    step === 6 && (

                                        <Field
                                            name="buildyear"
                                            label="When was the house built?"
                                            component={FormWithSlider}
                                            initialValue={1900}
                                            finalValue={2024}
                                            imgUrl={Constants.customImages.floor}
                                            onValueChange={(value) => setFieldValue("buildyear", value)}
                                        />

                                    )
                                }

                                {step === 7 && (

                                    <OwnedRented />


                                )

                                }

                                {step === 8 && (

                                    <Field
                                        name="address"
                                        label="What is the address of the house?"
                                        component={FormWithLocation}
                                        imgUrl={Constants.customImages.floor}
                                        onValueChange={(value) => setFieldValue("address", value)}
                                    />


                                )}


                            </Box>

                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: '#fff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '80px',
                                    gap: 5
                                }}
                            >
                                <Button variant="contained" color="primary" onClick={handlePrevious}>
                                    <WestIcon sx={{ mx: 2 }} /> Previous
                                </Button>
                                {(step !== 4 && step !== 7 && (step !== 8 || values.address) && (step !== 5 || values.apartmentfeature.length > 0)) && (
                                    step === 9 ? (
                                        <Button variant='contained' type="submit">Submit</Button>
                                    ) : (
                                        <Button variant='outlined' onClick={() => handleNext(values)}>Next</Button>
                                    )
                                )}

                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>
        </BgContainer>
    );
}

export default ApartmentQuery;

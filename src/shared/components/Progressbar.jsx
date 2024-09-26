import React, { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Slider, Box, Typography } from '@mui/material';


export const TextFormField = ({ field, form, sliderValue }) => {
    const errorText = form.touched[field.name] && form.errors[field.name];

    return (
        <FormControl fullWidth error={Boolean(errorText)} style={{ marginBottom: '20px', display: 'none' }}>
            <TextField
                {...field}
                id={field.name}
                error={Boolean(errorText)}
                value={sliderValue}
                style={{ borderBottom: "2px solid rgba(194, 187, 255, 0.7)" }}
                helperText={errorText}
                label={undefined}
                InputLabelProps={{ shrink: true }}
            />
        </FormControl>
    );
};

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Box sx={{
            position: 'absolute',
            top: -22,
            left: '50%',
            transform: 'translate(-50%, -100%)',
            borderRadius: 1,
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: '100%',
                left: '50%',
                width: 12,
                height: 12,
                transform: 'translate(-50%, -50%) rotate(45deg)',
                zIndex: 0,
            }
        }}>
            {children}
            <Typography>    
                {value}
            </Typography>
        </Box>
    );
}


const StyledSlider = ({ onValueChange, value, initialValue, finalValue, imgUrl, label }) => {

    const handleChange = (event, newValue) => {
        onValueChange(newValue);
    };

    return (
        <Box sx={{ margin: 'auto', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant='h1' color='text.secondary' my={2}>{label}</Typography>
            <img src={imgUrl} className='shake-once'/>

            <Slider
                value={value}
                min={initialValue}
                max={finalValue}
                onChange={handleChange}
                valueLabelDisplay="on"
                ValueLabelComponent={ValueLabelComponent}
                sx={{
                    color: 'rgba(193, 229, 240)',
                    '& .MuiSlider-thumb': {
                        color: 'rgba(193, 229, 240)',
                    },
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-rail': {
                        color: 'rgba(193, 229, 240)',
                    },
                    '& .MuiSlider-valueLabel': {
                        bgcolor: 'transparent',
                        fontSize: '1.375rem',
                        color: "rgba(193, 229, 240)",
                        fontWeight: "700",
                        '& > *': {
                            fontSize: '1.375rem',
                        }
                    },
                    height: "10px",
                    width:{xs:"100%",lg:"400px"},
                    mt: 5
                }}
            />

            <Box sx={{ width:{xs:"100%",lg:"400px"}, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {[initialValue, finalValue].map(item => 
                    <Typography key={item} variant='h4' color='rgba(200, 200, 200,0.5)'>{item}</Typography>
                )}
            </Box>

            <Box sx={{ width:{xs:"100%",lg:"400px"}, borderRadius: "50px", bgcolor: "text.secondary", py: 2, my: 2 }}>
                <Typography variant='h4' color='text.primary'>{value}</Typography>
            </Box>
        </Box>
    );
};


const FormWithSlider = ({ field, form, initialValue, finalValue, label, imgUrl }) => {
    const [sliderValue, setSliderValue] = React.useState(form.values[field.name] || initialValue); 

    useEffect(() => {
        if (form.values[field.name]) {
            setSliderValue(form.values[field.name]);
        }
    }, [form.values[field.name]]);

    const handleSliderChange = (value) => {
        setSliderValue(value);
        form.setFieldValue(field.name, value);
    };

    return (
        <Box sx={{ p: 2 }}>
            <StyledSlider
                onValueChange={handleSliderChange}
                value={sliderValue}
                initialValue={initialValue}
                finalValue={finalValue}
                imgUrl={imgUrl}
                label={label}
            />
            <TextFormField
                field={field}
                form={form}
                sliderValue={sliderValue}
            />
        </Box>
    );
};

export default FormWithSlider;

import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, Typography, MenuItem, Paper, TextField } from '@mui/material';
import PlacesAutocomplete from "react-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";

// TextFormField component to display the selected location
export const TextFormField = ({ field, form, location, onChange }) => {
    const errorText = form.touched[field.name] && form.errors[field.name];

    return (
        <FormControl fullWidth error={Boolean(errorText)} style={{ marginBottom: '20px', display: 'none' }}>
            <TextField
                {...field}
                id={field.name}
                error={Boolean(errorText)}
                value={location} // Display the selected location
                onChange={onChange} // Allow manual typing and updating the location
                style={{ borderBottom: "2px solid rgba(194, 187, 255, 0.7)" }}
                helperText={errorText || ''}
                label="Selected Location"
                InputLabelProps={{ shrink: true }}
            />
        </FormControl>
    );
};

// AutocompleteInput component for selecting a location
const AutocompleteInput = ({ onValueChange, location, imgUrl, label }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB7WjR_hSBnzJPdnTOt-YuIaZxI-xVI3w8",
        libraries: ["places"],
    });

    const handleChange = (event) => {
        onValueChange(event);
    };

    if (loadError) return "Error";
    if (!isLoaded) return <div>loading........</div>;

    return (
        <Box sx={{ margin: 'auto', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant='h1' color='text.secondary' my={2}>{label}</Typography>
            <img src={imgUrl} className='shake-once'/>
            <Typography variant='body2' color='text.secondary' mt={5}>Street address and number</Typography>

            <PlacesAutocomplete
                debounce={300}
                value={location} 
                onChange={handleChange}
                onSelect={handleChange}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div>
                        <TextField
                            {...getInputProps({
                                placeholder: "Search Location",
                            })}
                            style={{
                                background: "#fff",
                                borderRadius: "50px",
                                color: "gray",
                                fontSize: "30px",
                                fontWeight: 600,
                                border: "none",
                                boxShadow: "none",
                                textAlign: "center",
                            }}
                            sx={{
                                width: { xs: "100%", sm: "400px" },
                            }}
                            InputProps={{
                                style: {
                                    border: "none",
                                    outline: "none",
                                },
                            }}
                            fullWidth
                        />
                        {suggestions.length > 0 && (
                            <Paper
                                square
                                style={{
                                    position: "absolute",
                                    zIndex: 1000,
                                    border: "none"
                                }}
                            >
                                {suggestions.map((suggestion) => (
                                    <MenuItem
                                        {...getSuggestionItemProps(suggestion)}
                                        key={suggestion.placeId}
                                        sx={{
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                        }}
                                    >
                                        {suggestion.description}
                                    </MenuItem>
                                ))}
                            </Paper>
                        )}
                    </div>
                )}
            </PlacesAutocomplete>
        </Box>
    );
};


const FormWithLocation = ({ field, form, label, imgUrl }) => {
    const [location, setLocation] = useState(form.values[field.name] || '');

    useEffect(() => {
        if (form.values[field.name]) {
            setLocation(form.values[field.name]);
        }
    }, [form.values[field.name]]);

    const handleLocationChange = (value) => {
        setLocation(value);
        form.setFieldValue(field.name, value); 
    };

    const handleManualInputChange = (event) => {
        const value = event.target.value;
        setLocation(value);
        form.setFieldValue(field.name, value);
    };

    return (
        <Box sx={{ p: 2 }}>
            <AutocompleteInput
                imgUrl={imgUrl}
                label={label}
                location={location}
                onValueChange={handleLocationChange}
            />

            <TextFormField
                field={field}
                form={form}
                location={location}
                onChange={handleManualInputChange}
            />
        </Box>
    );
};

export default FormWithLocation;

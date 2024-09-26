import { Box, Typography } from '@mui/material'
import React from 'react'

const WorkStep = ({ img, index, text }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "row", lg: "column", gap: 5 } }}>
            <Box
                sx={{
                    backgroundColor: "rgb(240, 249, 251)",
                    borderRadius: "50%",
                    p: { xs: "10%", lg: "20%" }, 
                    position: "relative",
                    mb: { xs: 0, lg: 2 }
                }}
            >
                <img
                    src={img}
                    className="img-center"
                />
            </Box>

            <Box>
                <Typography variant='h3' my={2} textAlign={{ xs: "start", lg: "center" }}>Step {index + 1}</Typography>
                <Typography variant='body2' textAlign={{ xs: "start", lg: "center" }}>{text}</Typography>
            </Box>

        </Box>
    )
}

export default WorkStep

import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "rgb(3, 36, 62)",
			contrastText: "rgba(200, 200, 200,0.5)",
			light: "rgba(193, 229, 240)",
		},
		secondary: {
			main: "#0D6EFD",
			contrastText: "#fff",
			light: "#CFF1DE",
			dark: "#000",
		},
		warning: {
			main: "#facea8",
		},
		grey: {
			"100": "#d1d1d1",
			"200": "#c1c1c1",
			"300": "#979797",
			"400": "#7c828a",
			"500": "#7D8398",
		},
		text: {
			secondary: "rgb(255, 255, 255)",
			primary: "#022640",
			disabled: "#99a1a1",
		},
		background: {
			paper: "#fff",
			default: "#fafafa",
		},
		action: {
			active: "#979797",
			activatedOpacity: 0.1,
			selected: "#C0EDED",
		},
	},
	typography: {
		fontFamily: ' Arial, sans-serif',
		fontSize: 14,
		h1: {
			fontSize: "2.9rem",
			fontWeight: "700",
			lineHeight: "3.5rem",
			textAlign: "center"
		},
		h2: {
			fontSize: "2rem",
			fontWeight: "normal",
			lineHeight: "2.2rem",
			textAlign: "center"
		},
		h3: {
			fontSize: "1.5rem",
			fontWeight: "700",
			lineHeight: "2.2rem",
			textAlign: "center"

		},
		h4: {
			fontSize: "1.2rem",
			fontWeight: "600",
			lineHeight: "1.7rem",
			textAlign: "center"
		},
		h5: {
			fontSize: "1rem",
			fontWeight: "500",
			lineHeight: "1.2rem",
			textAlign: "center"
		},
		h6: {
			fontSize: "0.875rem",
			fontWeight: "700",
			lineHeight: "1.125rem",
			textAlign: "center",
		
		},
		body1: {
			fontSize: "0.75rem",
			fontWeight: "700",
			lineHeight: "1.357rem",
		
	
		},
		body2: {
			fontSize: "0.875rem",
			fontWeight: "400",
			lineHeight: "1.357rem",
			letterspacing: "0.1rem",
			color: "#555"
		},
		button: {
			fontSize: "1.2rem",
			fontWeight: "500",
			lineHeight: "1.15rem",
			textTransform: "capitalize",
			letterspacing: "2rem",
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: "text.primary",
				fontSize: "body1",
				textAlign: "center"
				// textTransform: "capitalize",
			},
		},
		MuiAppBar: {
			styleOverrides: {
				colorInherit: {
					// backgroundImage: "linear-gradient(180deg, #8CEEED, #FBFEFD)",
					backgroundColor: "rgba(102, 209, 209, 0.1)",
					borderBottom: "2px solid #eceefe;",
					color: "#fff",
				},
			},
			defaultProps: {
				elevation: 0,
				color: "inherit",
			},
		},
		MuiButton: {
			defaultProps: {
				sx: {
					borderRadius: 1,
					minWidth: 120,
					margin: "0px 8px",
					textTransform: "uppercase",
					padding: "15px 30px",
					borderRadius: "100px",
					fontSize: "0.8rem",
					fontWeight: "700",
					lineHeight: "16px",
					// outlined variant
					"&.MuiButton-outlined": {
						backgroundColor: "text.primary", // Update to your desired background color
						color: "#fff",
						position: "relative",
						overflow: "hidden",
						letterSpacing: "0.2rem",
						transition: "all 0.3s ease-in-out",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background: "rgba(0, 0, 0, 0.2)",
							transition: "opacity 0.3s ease-in-out",
							zIndex: 1,
							opacity: 0,
						},
						"&:hover": {
							transform: "scale(1.05)",
							"&::before": {
								opacity: 1,
							},
						},
					},
					// contained variant
					"&.MuiButton-contained": {
						backgroundColor: "text.secondary", // Update to your desired background color
						color: "text.primary",
						position: "relative",
						overflow: "hidden",
						letterSpacing: "0.15rem",
						transition: "all 0.3s ease-in-out",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background: "rgba(0, 0, 0, 0.2)",
							transition: "opacity 0.3s ease-in-out",
							zIndex: 1,
							opacity: 0,
						},
						"&:hover": {
							transform: "scale(1.05)",
							"&::before": {
								opacity: 1,
							},
						},
					},
					"&.MuiButton-text": {
						padding: "5px 0px",
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none',
						},
						'& input': {
							fontSize: '18px',
							color: "gray",
							textAlign: "center",
							fontWeight: 500
						},
					},
				},
			},
			defaultProps: {
				sx: {
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none', // Additional styles for fieldset
							borderColor: 'transparent',
						},
					},
				},
			},
		},

		MuiButtonGroup: {
			defaultProps: {
				size: "small",
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiMenu: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				paper: {
					backgroundColor: "rgb(247, 247, 247)",
					borderRadius: "0px",
					padding: "20px 100px 20px 10px",
				},
			},
		},
		MuiMenuItem: {
			defaultProps: {
				dense: true,
			},
			styleOverrides: {
				root: {
					'&:first-of-type': {
						backgroundColor: "rgb(247, 247, 247)",  // Apply the background color to the first item
					},
					"&.Mui-selected": {
						backgroundColor: "transparent",
						color: "black",

					},
					"&:hover": {
						backgroundColor: "transparent", // Remove background color on hover
						color: "rgba(193, 229, 240, 0.5)", // Update text color on hover
					},
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
					fontWeight: 400,
					fontSize: '1rem',
					color: "black",
				},
			},
		},

		MuiListItemText: {
			defaultProps: {
				primaryTypographyProps: {
					// variant: "h6",
					fontSize: "0.8rem",
					fontWeight: "bold",
					color: "text.primary",
					textTransform: "capitalize",
					// lineHeight: 1,
				},
				secondaryTypographyProps: {
					// variant: "body2",
					color: "text.secondary",
					// lineHeight: 1,
				},
			},
		},
		MuiToggleButton: {
			defaultProps: {
				sx: {
					"&.Mui-selected": {
						color: "#3AB0C0",
						backgroundColor: "#D6F0F3",
					},
				},
			},
		},
	},
})
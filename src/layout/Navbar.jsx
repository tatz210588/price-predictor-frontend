import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Menu, MenuItem, List, ListItem, ListItemText, Button, Typography, Box, IconButton } from '@mui/material'; // Add Button import
import logo from './../assets/img/blok_logo_white.webp';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const style = {
    letterSpacing: "0.05rem",
    lineHeight: "2rem",
    color: 'text.secondary'
}
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuIndex, setMenuIndex] = useState(null);
    // const [colors, setColors] = useState(Array(5).fill('transparent'));
    const [activeIndex, setActiveIndex] = useState(null);
    const colors = Array(5).fill('transparent'); // Adjust based on your needs


    const menuRef = useRef([]);

    const menuList = [
        {
            mainMenuName: 'To the seller',
            submenuList: ['Price estimate', 'Selling the apartment', 'Digital apartment store', 'Brokers']
        },
        {
            mainMenuName: 'To the buyer',
            submenuList: ['Price estimate', 'Buying process', 'Loan assistance', 'Market trends']
        },
        {
            mainMenuName: 'Housing',
            submenuList: ['Rental services', 'Property management', 'Insurance services', 'Legal advice']
        },
        {
            mainMenuName: 'Company',
            submenuList: ['About us', 'Careers', 'Press', 'Blog']
        },
        {
            mainMenuName: 'language',
            icon: <LanguageOutlinedIcon sx={{ mr: 1 }} />,
            submenuList: ['English', 'French', 'German', 'Spanish']
        }
    ];



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // const [color, setColor] = useState('transparent')
    const handleMouseOver = (event, index) => {
        setAnchorEl(event.currentTarget);
        setMenuIndex(index);
        setActiveIndex(index);
    };

    const handleMouseOverXs = (event, index) => {

        setActiveIndex(index);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setMenuIndex(null);
        setActiveIndex(null);
    };

    const handleMenuEnter = (index) => {
        setMenuIndex(index);
    };

    const handleMenuLeave = () => {
        setAnchorEl(null);
        setMenuIndex(null);
        setActiveIndex(null);

    };
    const handleMenuLeaveXS = () => {

        setActiveIndex(null);
    };

    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

    // Function to handle menu click and show the submenu
    const handleMenuClick = (index) => {
        setActiveSubMenuIndex(index);
    };

    // Function to go back to the main menu
    const handleBackToMenu = () => {
        setActiveSubMenuIndex(null);
    };

    const renderMenuContent = () => (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: "20px" }}>

            <img src={logo} alt="Blok" width={"80px"} />
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>


        </Box>
    );

    return (
        <AppBar position="absolute" color="transparent" sx={{ padding: { xs: 0, lg: "20px 10%" } }}>
            <Toolbar sx={{ display: { xs: "none", lg: "flex" } }}>
                <img src={logo} alt="Blok" width={"80px"} />
                <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1, px: 2 }}>
                    {menuList.map((item, index) => (
                        <React.Fragment key={index}>
                            <div ref={el => (menuRef.current[index] = el)}>
                                <ListItem
                                    button
                                    onMouseOver={(event) => handleMouseOver(event, index)}
                                    sx={{
                                        color: 'text.secondary',
                                        borderBottom: activeIndex === index ? `5px solid rgba(193, 229, 240)` : '5px solid transparent',
                                        cursor: "pointer"
                                    }}
                                >
                                    {item.icon && <>{item.icon}</>}
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="h5"
                                                sx={style}
                                            >
                                                {item.mainMenuName}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </div>
                            {index === 2 && <Box sx={{ flexGrow: 1 }} />}

                            <Menu
                                id="simple-menu"
                                anchorEl={menuRef.current[index]}
                                keepMounted
                                open={menuIndex === index}
                                onClose={handleClose}
                                MenuListProps={{ onMouseEnter: () => handleMenuEnter(index) }}
                            >
                                {item.submenuList.map((subItem, subIndex) => (
                                    <MenuItem key={subIndex} onClick={handleClose}>
                                        <Typography
                                            variant="button"
                                            sx={{
                                                py: 1,
                                                "&:hover": {
                                                    backgroundColor: "transparent",
                                                    color: "primary.light",
                                                },
                                            }}
                                        >
                                            {subItem}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    ))}
                </List>

                {
                    ["Log in", "Start Selling"].map(item => <Button variant='contained'>{item}</Button>)
                }
            </Toolbar>
            <Toolbar sx={{ display: { xs: "block", lg: "none" } }}>
                {renderMenuContent()}
                {isMenuOpen && (
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'text.primary',
                            zIndex: 1000,
                        }}
                    >
                        <Box px={"15px"}>
                            {renderMenuContent()}

                            <Box>
                                {activeSubMenuIndex === null ? (
                                    <>
                                        <Typography
                                            variant="h5"
                                            sx={style}
                                        >how can we help you?</Typography>
                                        <Typography variant='h1' color='text.secondary'>050 350 6014</Typography>
                                        <Typography
                                            variant="h5"
                                            sx={style}
                                        >
                                            dm/mpm, open Mon-Fri 9-18, Sat-Sun 12-16
                                        </Typography>
                                        <Box my="2">
                                           <Button variant='contained' fullWidth>Free Price Estimate</Button>
                                        </Box>
                                    
                                        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {menuList.map((item, index) => (
                                                <div ref={el => (menuRef.current[index] = el)} key={index}>
                                                    <ListItem
                                                        onMouseOver={(event) => handleMouseOverXs(event, index)}
                                                        onMouseLeave={handleMenuLeaveXS}
                                                        onClick={() => handleMenuClick(index)}
                                                        sx={{
                                                            color: 'text.secondary',
                                                            borderBottom: activeIndex === index ? `3px solid rgba(193, 229, 240)` : '3px solid transparent',
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        {item.icon && <>{item.icon}</>}
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    variant="h5"
                                                                    sx={style}
                                                                >
                                                                    {item.mainMenuName}
                                                                </Typography>
                                                            }
                                                        />
                                                        <ArrowForwardIosIcon sx={{ color: 'text.secondary', ml: 1, fontSize: "15px" }} />
                                                    </ListItem>
                                                </div>
                                            ))}

                                        </List>
                                        {
                                            ["Login", "Start Selling"].map(item => <Box my={1}><Button variant='contained' fullWidth>{item}</Button></Box>)
                                        }
                                    </>

                                ) : (
                                    <Box>

                                        <Box onClick={handleBackToMenu} sx={{ cursor: "pointer" }}><KeyboardBackspaceIcon sx={{ color: "text.secondary" }} /></Box>
                                        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Typography variant={"h4"} fontWeight={600} letterSpacing={"0.05rem"} color={"text.secondary"} textTransform={"uppercase"}>{menuList[activeSubMenuIndex]?.mainMenuName}</Typography>
                                            {menuList[activeSubMenuIndex].submenuList.map((subItem, subIndex) => (
                                                <>
                                                    <ListItem key={subIndex}>
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    variant="h5"
                                                                      sx={{
                                                                        ...style,
                                                                        '&:hover': {
                                                                            color: 'rgba(193, 229, 240, 0.5)',
                                                                        },
                                                                    }}
                                                                >
                                                                    {subItem}
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItem>
                                                </>
                                            ))}
                                        </List>
                                    </Box>
                                )}





                            </Box>
                        </Box>



                    </Box>
                )}

            </Toolbar>




        </AppBar>
    );
};

export default Navbar;

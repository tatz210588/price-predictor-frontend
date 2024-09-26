import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import backImg from './../../assets/img/background-img.jpg';

const BgContainer = ({ children,height = '100vh' }) => {
  const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: 'auto',
    backgroundImage:`linear-gradient(rgba(3, 36, 62, 0.5), rgba(3, 36, 62, 0.5)), url(${backImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      minHeight: height,
    },
  }));

  return (
    <HeroContainer>
      {children}
    </HeroContainer>
  );
};

export default BgContainer;

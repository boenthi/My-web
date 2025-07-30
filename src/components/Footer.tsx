"use client"
import React from 'react';


import { Box, Container, Typography, Link, Divider, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';
import Logo from "./Logo";  // Make sure this component is compatible or adapt it
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

// Styles
const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#f8f9fa',
    padding: theme.spacing(6, 0),
}));

const FooterLinkStyled = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const IconStyle = {
    marginRight: '8px',
    color: '#2980b9',
};

export function FooterComponent() {
    return (
        <FooterContainer>
            <Container maxWidth="lg">


                <Grid container spacing={5} justifyContent="space-between" alignItems="center">

                    <Grid size={{xs:12, md:4}}>


                        <Box>
                            {/* <Logo /> */}
                            <Typography variant="body2" color="textSecondary" mt={2}>
                                Office 73C, St.598, Sangkat Toul Sounke, Khan Russey Keo, Phnom Penh, Cambodia
                            </Typography>
                        </Box>


                    </Grid>

                    <Grid size={{xs:12, md:4}} padding={'5px'}>

                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LocalPhoneIcon sx={IconStyle} />
                                <Typography variant="body2">071 444 408 3</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LocalPhoneIcon sx={IconStyle} />
                                <Typography variant="body2">099 999 993</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <EmailIcon sx={IconStyle} />
                                <Typography variant="body2">eminfo@dgsuperapp.com</Typography>
                            </Box>
                        </Box>
                    </Grid2>

                        

                    </Grid>
                       <Grid size={{xs:12, md:4}}>


                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Let's do it!
                            </Typography>
                            <Box display="flex">
                                <Link href="https://www.facebook.com/" target="_blank" rel="noopener" color="inherit">
                                    <FacebookIcon sx={{ fontSize: '3rem', marginRight: '1rem', color: '#4267B2' }} aria-label="Facebook"/>
                                </Link>
                                <Link href="https://web.telegram.org/k/" target="_blank" rel="noopener" color="inherit">
                                    <TelegramIcon sx={{ fontSize: '3rem', color: '#2AABEE' }} aria-label="Telegram"/>
                                </Link>
                            </Box>
                        </Box>


                    </Grid>
                   
                </Grid>


                <Divider sx={{ my: 5}} />


                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="textSecondary">
                        &copy; {new Date().getFullYear()} DG App. All rights reserved.
                    </Typography>
                    <Box>
                        <FooterLinkStyled href="#">Privacy Policy</FooterLinkStyled>
                        <span>|</span>
                        <FooterLinkStyled href="#">Terms & Conditions</FooterLinkStyled>
                    </Box>
                </Box>
            </Container>
        </FooterContainer>
    );
}

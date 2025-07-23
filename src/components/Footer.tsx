"use client"
import React from 'react';
import { Box, Container, Grid2, Typography, Link, Divider, styled } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import Logo from './Logo'; // Assuming this is in the same directory

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
                <Grid2 container spacing={4} justifyContent="space-between">
                    <Grid2 size={{xs:12, md:4}} >
                        <Box>
                            {/* <Logo /> */}
                            <Typography variant="body2" color="textSecondary" mt={2}>
                                Office 73C, St.598, Sangkat Toul Sounke, Khan Russey Keo, Phnom Penh, Cambodia
                            </Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{xs:12, md:4}}>
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

                    <Grid2 size={{xs:12, md:4}}>
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
                    </Grid2>
                </Grid2>

                <Divider sx={{ my: 3 }} />

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

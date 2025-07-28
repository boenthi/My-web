import React from 'react';

import { Box, Container, Typography, Link, Divider, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';
import Logo from "./Logo";  // Make sure this component is compatible or adapt it
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const FooterLink = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(2), // Add some spacing between links
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const FooterComponent = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#f8f9fa', py: 4 }}> {/* Light background */}
            <Container maxWidth="lg">

                <Grid container spacing={5} justifyContent="space-between" alignItems="center">

                    <Grid size={{xs:12, md:4}}>

                        <Box>
                            <Logo />
                            <Typography variant="body2" color="textSecondary" mt={2}>
                                Office 73C, St.598, Sangkat Toul Sounke, Khan Russey Keo, Phnom Penh, Cambodia
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid size={{xs:12, md:4}} padding={'5px'}>

                        <Box>
                            <Typography variant="h6" component="h2" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="textSecondary" display="flex" alignItems="center" mb={1}>
                                <FiPhone style={{ marginRight: '8px', color: '#29b6f6' }} />
                                <span>071 444 408 3</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" display="flex" alignItems="center" mb={1}>
                                <FiPhone style={{ marginRight: '8px', color: '#29b6f6' }} />
                                <span>099 999 993</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" display="flex" alignItems="center">
                                <MdOutlineEmail style={{ marginRight: '8px', color: '#29b6f6' }} />
                                <span>eminfo@dgsuperapp.com</span>
                            </Typography>
                        </Box>

                        

                    </Grid>
                       <Grid size={{xs:12, md:4}}>

                        <Box>
                            <Typography variant="h6" component="h2" gutterBottom padding={'5px'}>
                                Let's do it!
                            </Typography>
                            <Box display="flex">
                                <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                                    <FaFacebook style={{ fontSize: '3rem', marginRight: '1rem', color: '#4267B2' }} />
                                </Link>
                                <Link href="https://web.telegram.org/k/" target="_blank" color="inherit">
                                    <FaTelegram style={{ fontSize: '3rem', color: '#2AABEE' }} />
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
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <span>|</span>
                        <FooterLink href="#">Terms & Conditions</FooterLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FooterComponent;

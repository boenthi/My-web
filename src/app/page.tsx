"use client";

import React from 'react';
import {
    Container,
    Grid2,
    Typography,
    Button,
    Box,
    styled
} from '@mui/material';
// import { BsChevronCompactRight } from "react-icons/bs";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import Nav from "@/components/Navbar
// ";
import { Nav } from '@/components/Navbar';

import MyCarousel from "@/components/MyCarousel "; // Make sure this path is correct
import MyCarouselTwo from "@/components/MyCarouselTwo";
import MyCarouselthree from "@/components/MyCaroselthree";
import FooterComponent from '@/components/Footer';

// Styled Section component to encapsulate padding
const StyledSection = styled('section')(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
}));

const Page = () => {
    // const router = useRouter();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Nav />
            <Box component="main" sx={{ flexGrow: 1, justifyContent: 'center' }}>
                <StyledSection style={{ backgroundColor: '#f2f2f2' }}> {/* Light gray background */}
                    <Container maxWidth="lg">
                        <Grid2 container spacing={4} alignItems="center">
                            <Grid2 size={{xs:12 ,md:6} }>
                                <Box px={4} data-aos="fade-right">
                                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#4a5568' }}>
                                        Car Inspection & Valuation, Made Easy
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem', lineHeight: '1.75', mb: 4 }}>
                                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<ArrowDownwardIcon />}
                                        // onClick={() => router.push('/download')}
                                        sx={{
                                            ml: 2,
                                            fontWeight: 'bold',
                                            width:'150px',
                                            py: 2,
                                            px: 4,
                                            borderRadius: '0.5rem',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        Download
                                    </Button>
                                </Box>
                            </Grid2>
                            <Grid2 size={{xs:12,md:6}} data-aos="fade-left">
                                <Box mt={4} px={4} >
                                    {/* ADDED: Spacing above carousel */}
                                    <MyCarousel/>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </StyledSection>
                 <StyledSection>
                 {/* /* <Container  maxWidth="lg"> */} 

                    <Grid2 container spacing={4} alignItems="center"  >
                             <Grid2 size={{xs:12,md:6}}>
                                <Box mt={4} px={4} data-aos="fade-left">
                                    {/* ADDED: Spacing above carousel */}
                                    <MyCarousel/>
                                </Box>
                            </Grid2>
                         <Grid2 size={{xs:12 ,md:6} }>

                          <Box px={4} data-aos="fade-left" >
                             <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#4a5568' }}>
                                        Car Inspection & Valuation, Made Easy
                             </Typography>
                             <Typography variant="body1" color="secondary" sx={{ fontSize: '1.2rem', lineHeight: '1.75', mb: 4 }}>
                                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                            </Typography>
                          </Box>
                         </Grid2>
                    </Grid2>
                  {/* </Container> */}
                </StyledSection>
                 <StyledSection style={{ backgroundColor: '#f2f2f2' }}> {/* Light gray background */}
                    <Container maxWidth="lg">
                        <Grid2 container spacing={4} alignItems="center">
                            <Grid2 size={{xs:12 ,md:6} }>
                                <Box px={4} data-aos="fade-up">
                                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#4a5568' }}>
                                        Car Inspection & Valuation, Made Easy
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem', lineHeight: '1.75', mb: 4 }}>
                                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                                    </Typography>
                                    
                                </Box>
                            </Grid2>
                            <Grid2 size={{xs:12,md:6}}>
                                <Box mt={4} px={4}data-aos="fade-up">
                                    {/* ADDED: Spacing above carousel */}
                                    <MyCarouselthree/>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </StyledSection>
                 <StyledSection>
                 {/* /* <Container  maxWidth="lg"> */} 

                    <Grid2 container spacing={4} alignItems="center"  >
                             <Grid2 size={{xs:12,md:6}}>
                                <Box mt={4} px={4} data-aos="fade-up">
                                    {/* ADDED: Spacing above carousel */}
                                    <MyCarouselthree/>
                                </Box>
                            </Grid2>
                         <Grid2 size={{xs:12 ,md:6} }>

                          <Box px={4} data-aos="fade-up" >
                             <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#4a5568' }}>
                                        Car Inspection & Valuation, Made Easy
                             </Typography>
                             <Typography variant="body1" color="secondary" sx={{ fontSize: '1.2rem', lineHeight: '1.75', mb: 4 }}>
                                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                            </Typography>
                          </Box>
                         </Grid2>
                    </Grid2>
                  {/* </Container> */}
                </StyledSection>

            </Box>
            <FooterComponent/>
        </Box>
    );
};

export default Page;

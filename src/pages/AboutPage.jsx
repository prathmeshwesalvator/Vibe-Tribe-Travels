// aboutuspage.jsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
  IconButton,
  Chip,
  alpha
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
  Favorite,
  Public,
  Diversity3,
  ArrowForward,
  PlayArrow
} from '@mui/icons-material';

import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

// Styled components with brand colors
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0, 8),
  position: 'relative',
  overflow: 'hidden',
}));

const DarkSection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: '#0B3D2E', // Deep Forest Green
  color: '#FDF6EC', // Beige/Cream text
}));

const LightSection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: '#FDF6EC', // Beige/Cream
}));

const GraySection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: '#F1F1F1', // Light Gray
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF', // White
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.4s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
  },
}));

const PrimaryButton = styled('button')(({ theme }) => ({
  backgroundColor: '#1D7A85', // Ocean Blue
  color: 'white',
  border: 'none',
  padding: '14px 32px',
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#155e67',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(29, 122, 133, 0.3)',
  },
}));

const SecondaryButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#1D7A85',
  border: `2px solid #1D7A85`,
  padding: '12px 28px',
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1D7A85',
    color: 'white',
    transform: 'translateY(-2px)',
  },
}));

const ValueCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  backgroundColor: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
    '& .value-icon': {
      backgroundColor: alpha('#2E8B57', 0.1),
      transform: 'scale(1.1)',
    }
  },
}));

const ValueIconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: alpha('#1D7A85', 0.1),
  color: '#1D7A85',
  transition: 'all 0.3s ease',
}));

const FloatingAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const AnimatedElement = styled(Box)(({ theme }) => ({
  animation: `${FloatingAnimation} 8s ease-in-out infinite`,
}));

// Custom components with animations
const AnimatedSection = ({ children, backgroundColor, sx = {} }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionContainer sx={{ backgroundColor, ...sx }}>
        {children}
      </SectionContainer>
    </motion.div>
  );
};

const HeroSection = ({ isMobile }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: isMobile ? 420 : 520,
        background: "#FDF6EC",
        pb: 8,
        pt: { xs: 10, sm: 12, md: 14 }, // <-- Add this line for top padding
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "2.5rem" : "3.75rem",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  color: "#0B3D2E",
                }}
              >
                Crafting Unforgettable Travel Experiences
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400, lineHeight: 1.6, color: "#333" }}>
                We're a team of passionate explorers dedicated to creating meaningful journeys that connect people with the world's most incredible destinations.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: isMobile ? "wrap" : "nowrap" }}>

                {/* <PrimaryButton>
                  Explore Our Journeys
                  <ArrowForward />
                </PrimaryButton> */}


                <PrimaryButton>
                  Learn More
                </PrimaryButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedElement>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(0, 0, 0, 0.2)",
                    lineHeight: 0,
                  }}
                >
                  <Box
                    component="img"
                    src="/travel-hero.jpg"
                    alt="Travel experience"
                    sx={{
                      width: "100%",
                      height: isMobile ? "300px" : "500px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(11, 61, 46, 0.8), transparent)",
                      height: "50%",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 3,
                      color: "white",
                    }}
                  >
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Exploring the beautiful landscapes of Costa Rica
                    </Typography>
                  </Box>
                </Box>
              </AnimatedElement>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Values data
  const values = [
    {
      icon: <Favorite sx={{ fontSize: 40 }} />,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, constantly seeking new experiences to share with our community.'
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: 'Global Perspective',
      description: 'We believe in connecting people across cultures to foster understanding and appreciation.'
    },
    {
      icon: <EmojiNatureIcon sx={{ fontSize: 40 }} />,
      title: 'Sustainable Tourism',
      description: 'We prioritize eco-friendly practices and support local communities in all our operations.'
    },
    {
      icon: <Diversity3 sx={{ fontSize: 40 }} />,
      title: 'Inclusive Community',
      description: 'We welcome travelers from all backgrounds to explore the world together.'
    }
  ];

  return (
    <ParallaxProvider>
      <Box sx={{ overflow: 'hidden', pt: 8 }}>
        {/* --- HERO SECTION --- */}
        <HeroSection isMobile={isMobile} />

        

        {/* Mission Section */}
        <AnimatedSection backgroundColor="#FDF6EC">
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom 
                color="#0B3D2E"
                sx={{ 
                  fontSize: isMobile ? '2rem' : '2.75rem',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Our Purpose & Vision
              </Typography>
              <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.7, mb: 4 }}>
                We believe that travel has the power to transform lives, broaden perspectives, and create lasting connections between people and places. Our vision is to make transformative travel experiences accessible to everyone while preserving the beauty and culture of the destinations we visit.
              </Typography>
            </Box>

            {/* Changed here: Use Box with flex and wrap for value cards */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
                alignItems: 'stretch',
                mb: 2,
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: '1 1 220px', maxWidth: 320, minWidth: 220, display: 'flex' }}
                >
                  <ValueCard sx={{ width: '100%' }}>
                    <ValueIconWrapper className="value-icon">
                      {value.icon}
                    </ValueIconWrapper>
                    <Typography variant="h5" component="h3" gutterBottom color="#0B3D2E" fontWeight="600">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="#333333" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>
                  </ValueCard>
                </motion.div>
              ))}
            </Box>
          </Container>
        </AnimatedSection>

        {/* Story Section with Video */}
        <GraySection>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <Typography 
                    variant="h2" 
                    component="h2" 
                    gutterBottom 
                    color="#0B3D2E"
                    sx={{ 
                      fontSize: isMobile ? '2rem' : '2.5rem',
                      fontWeight: 700,
                      mb: 3
                    }}
                  >
                    Our Story
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Founded in 2015, our journey began with a simple idea: travel should be both transformative and responsible. What started as a small group of friends organizing local tours has grown into a global community of travelers seeking authentic experiences.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Today, we partner with local guides and communities in over 30 countries to create journeys that benefit both travelers and the places they visit. Our commitment to sustainable tourism has never been stronger.
                  </Typography>

                  {/* <PrimaryButton sx={{ mt: 2 }}>
                    Read Our Full Story
                    <ArrowForward />
                  </PrimaryButton> */}


                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      lineHeight: 0
                    }}
                  >
                    <Box
                      component="img"
                      src="/travel-story.jpg"
                      alt="Our story"
                      sx={{
                        width: '100%',
                        height: isMobile ? '300px' : '400px',
                        objectFit: 'cover',
                        filter: videoPlaying ? 'none' : 'brightness(0.85)',
                        transition: 'filter 0.3s ease'
                      }}
                    />
                    {!videoPlaying && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(11, 61, 46, 0.2)',
                          cursor: 'pointer'
                        }}
                        onClick={() => setVideoPlaying(true)}
                      >
                        <IconButton
                          sx={{
                            backgroundColor: '#F4A261',
                            color: 'white',
                            width: 80,
                            height: 80,
                            '&:hover': {
                              backgroundColor: '#e6914a',
                            }
                          }}
                        >
                          <PlayArrow sx={{ fontSize: 40 }} />
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </GraySection>

        {/* CTA Section */}
        <DarkSection>
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card sx={{ 
                backgroundColor: '#1D7A85', 
                color: 'white', 
                borderRadius: '20px', 
                padding: { xs: 3, md: 6 },
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(135deg, #1D7A85 0%, #2E8B57 100%)'
              }}>
                <CardContent>
                  <Typography variant="h3" component="h2" gutterBottom sx={{ 
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: 700,
                    mb: 3
                  }}>
                    Ready to Begin Your Journey?
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ 
                    fontSize: '1.1rem', 
                    opacity: 0.9, 
                    mb: 4,
                    lineHeight: 1.6
                  }}>
                    Join our community of travelers and discover experiences that will stay with you forever.
                  </Typography>
                  <PrimaryButton sx={{ 
                    backgroundColor: '#F4A261',
                    '&:hover': {
                      backgroundColor: '#e6914a',
                    }
                  }}>
                    Get Started Today
                    <ArrowForward />
                  </PrimaryButton>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </DarkSection>
      </Box>
    </ParallaxProvider>
  );
};

export default AboutUsPage;
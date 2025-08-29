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
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
  Favorite,
  Public,
  Diversity3,
  ArrowForward,
  PlayArrow,
  CheckCircle,
  BeachAccess,
  BusinessCenter,
  School,
  Groups,
  LocationOn,
  EmojiPeople,
  TrendingUp,
  Security
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
  backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(26, 117, 105, 0.3) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(26, 117, 105, 0.2) 0%, transparent 25%)',
}));

const LightSection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: '#FDF6EC', // Beige/Cream
  backgroundImage: 'radial-gradient(circle at 25% 70%, rgba(29, 122, 133, 0.08) 0%, transparent 25%), radial-gradient(circle at 75% 20%, rgba(244, 162, 97, 0.08) 0%, transparent 25%)',
}));

const GraySection = styled(SectionContainer)(({ theme }) => ({
  backgroundColor: '#F8F9FA', // Light Gray
  backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(29, 122, 133, 0.05) 0%, transparent 25%), radial-gradient(circle at 85% 80%, rgba(244, 162, 97, 0.05) 0%, transparent 25%)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF', // White
  borderRadius: '20px',
  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.4s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 24px 56px rgba(0, 0, 0, 0.12)',
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1D7A85', // Ocean Blue
  color: 'white',
  padding: '14px 32px',
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
  gap: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#155e67',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(29, 122, 133, 0.3)',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#1D7A85',
  border: `2px solid #1D7A85`,
  padding: '12px 28px',
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
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
  borderRadius: '20px',
  backgroundColor: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
  border: `1px solid ${alpha('#1D7A85', 0.08)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)',
    borderColor: alpha('#1D7A85', 0.2),
    '& .value-icon': {
      backgroundColor: alpha('#2E8B57', 0.1),
      transform: 'scale(1.1)',
    }
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  backgroundColor: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.06)',
  border: `1px solid ${alpha('#1D7A85', 0.1)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.1)',
    borderColor: alpha('#1D7A85', 0.3),
  },
}));

const ValueIconWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: alpha('#1D7A85', 0.1),
  color: '#1D7A85',
  transition: 'all 0.3s ease',
}));

const ServiceIconWrapper = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: alpha('#1D7A85', 0.1),
  color: '#1D7A85',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha('#1D7A85', 0.2),
    transform: 'scale(1.05)',
  }
}));

const FloatingAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const PulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AnimatedElement = styled(Box)(({ theme }) => ({
  animation: `${FloatingAnimation} 8s ease-in-out infinite`,
}));

const PulseElement = styled(Box)(({ theme }) => ({
  animation: `${PulseAnimation} 6s ease-in-out infinite`,
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
        minHeight: isMobile ? 420 : 600,
        background: "linear-gradient(135deg, #FDF6EC 0%, #f8efe2 100%)",
        pb: 8,
        pt: { xs: 10, sm: 12, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          backgroundColor: alpha('#1D7A85', 0.05),
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: alpha('#F4A261', 0.05),
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip 
                icon={<EmojiPeople />} 
                label="About Vibe Tribe Travels" 
                sx={{ 
                  backgroundColor: alpha('#1D7A85', 0.1), 
                  color: '#1D7A85', 
                  fontWeight: 600, 
                  mb: 3,
                  px: 1,
                  py: 2
                }} 
              />
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
                  background: "linear-gradient(135deg, #0B3D2E 0%, #1D7A85 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Crafting Unforgettable Travel Experiences
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400, lineHeight: 1.6, color: "#333" }}>
                Vibe Tribe Travels is your one-stop destination for curated travel experiences that blend adventure, comfort, and connection.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: isMobile ? "wrap" : "nowrap", mt: 4 }}>
                <PrimaryButton>
                  Explore Our Tours
                </PrimaryButton>
                <SecondaryButton>
                  Contact Us
                </SecondaryButton>
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
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(0, 0, 0, 0.2)",
                    lineHeight: 0,
                    border: "4px solid white",
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
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Exploring the beautiful landscapes of Costa Rica
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Floating stats card */}
                  <PulseElement
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      padding: 2,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {/* <Box sx={{ textAlign: 'center', px: 1 }}>
                      <Typography variant="h4" sx={{ color: '#1D7A85', fontWeight: 700 }}>
                        5K+
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#333' }}>
                        Happy Travelers
                      </Typography>
                    </Box> */}
                  </PulseElement>
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

  // Services data from PDF
  const services = [
    {
      icon: <BeachAccess sx={{ fontSize: 32 }} />,
      title: 'Customized Trips – Domestic & International',
      description: 'We craft personalized travel experiences that are tailored to your preferences, interests, and budget. Be it a luxury honeymoon in the Maldives or a heritage trip through Rajasthan, our experts plan every detail for a seamless journey.'
    },
    {
      icon: <Groups sx={{ fontSize: 32 }} />,
      title: 'Group Tours – All India',
      description: 'Join our well-organized group tours for families, friends, or like-minded travelers. We cover popular destinations like Kashmir, Kerala, Northeast, Himachal, and Goa with fixed itineraries, comfortable stays, and local experiences.'
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 32 }} />,
      title: 'MICE Travel (Meetings, Incentives, Conferences, and Events)',
      description: 'We handle all aspects of corporate travel, from logistics and hotel arrangements to team-building activities and event coordination. Whether it\'s a company offsite, product launch, or an annual meet, we ensure a professional and memorable experience.'
    },
    {
      icon: <School sx={{ fontSize: 32 }} />,
      title: 'School & College Trips',
      description: 'We create safe, educational, and fun tours for schools and colleges—designed with a focus on learning, adventure, and exploration. From historical tours to nature camps, our trips are guided, well-managed, and fully secured.'
    }
  ];

  // Benefits data from PDF
  const benefits = [
    {
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      title: 'Personalized Planning',
      description: 'Each itinerary is tailored specifically to your group or individual needs.'
    },
    {
      icon: <Security sx={{ fontSize: 32 }} />,
      title: 'Trusted Vendor Network',
      description: 'We partner with verified hotels, transport providers, and local guides across India & abroad.'
    },
    {
      icon: <Diversity3 sx={{ fontSize: 32 }} />,
      title: 'End-to-End Support',
      description: 'From planning to return, we\'re available 24/7 for travel assistance.'
    },
    {
      icon: <EmojiNatureIcon sx={{ fontSize: 32 }} />,
      title: 'Value for Money',
      description: 'Transparent pricing, group discounts, and no hidden charges.'
    },
    {
      icon: <Favorite sx={{ fontSize: 32 }} />,
      title: 'Experienced Team',
      description: 'Backed by young professionals with hands-on experience in travel operations and customer satisfaction.'
    }
  ];

  // Stats data
  // const stats = [
  //   { value: '5,000+', label: 'Happy Travelers' },
  //   { value: '30+', label: 'Destinations' },
  //   { value: '98%', label: 'Satisfaction Rate' },
  //   { value: '7', label: 'Years of Experience' }
  // ];

  return (
    <ParallaxProvider>
      <Box sx={{ overflow: 'hidden', pt: 8 }}>
        {/* --- HERO SECTION --- */}
        <HeroSection isMobile={isMobile} />

        {/* Stats Section */}
        {/* <Box sx={{ py: 6, backgroundColor: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ textAlign: 'center', py: 2 }}>
                      <Typography variant="h3" component="div" sx={{ 
                        fontWeight: 800, 
                        color: '#1D7A85',
                        mb: 1
                      }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#0B3D2E', fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box> */}

        {/* What We Do Section */}
        <AnimatedSection backgroundColor="#F8F9FA">
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
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
                What We Do
              </Typography>
              <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.7, mb: 4 }}>
                Whether you dream of exploring the mountains of Himachal, relaxing on the beaches of Bali, or organizing a professional corporate retreat, Vibe Tribe Travels brings your vision to life with precision, creativity, and care.
              </Typography>
            </Box>
          </Container>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection backgroundColor="#FDF6EC">
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom 
                color="#0B3D2E"
                sx={{ 
                  fontSize: isMobile ? '2rem' : '2.75rem',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Our Services
              </Typography>
              <Typography variant="body1" sx={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Based in India, we specialize in creating customized travel plans and group tours that cater to a wide range of travelers—from solo wanderers and families to corporate teams and student groups.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ServiceCard>
                      <ServiceIconWrapper>
                        {service.icon}
                      </ServiceIconWrapper>
                      <Typography variant="h5" component="h3" gutterBottom color="#0B3D2E" fontWeight="600">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="#333333" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                        {service.description}
                      </Typography>
                    </ServiceCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection backgroundColor="#F8F9FA">
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

        {/* Why Travel With Us Section */}
        <AnimatedSection backgroundColor="#0B3D2E">
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', color: 'white' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontSize: isMobile ? '2rem' : '2.75rem',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Why Travel With Us?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Discover the Vibe Tribe difference with benefits designed to make your journey seamless and memorable
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ maxWidth: '1000px', margin: '0 auto' }}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      p: 3,
                      borderRadius: '16px',
                      backgroundColor: alpha('#FFFFFF', 0.08),
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: alpha('#FFFFFF', 0.12),
                        transform: 'translateY(-5px)'
                      }
                    }}>
                      <Box sx={{ 
                        color: '#F4A261', 
                        mr: 2,
                        mt: 0.5
                      }}>
                        {benefit.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white', opacity: 0.9, lineHeight: 1.6 }}>
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 8, color: 'white' }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
                "At Vibe Tribe Travels, we believe that travel is not just about places—it's about people, cultures, stories, and memories. We're here to help you find your vibe and travel with your tribe."
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Let us plan your next unforgettable journey.
              </Typography>
            </Box>
          </Container>
        </AnimatedSection>

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
                borderRadius: '24px', 
                padding: { xs: 3, md: 6 },
                textAlign: 'center',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(135deg, #1D7A85 0%, #2E8B57 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  backgroundColor: alpha('#FFFFFF', 0.1),
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: alpha('#FFFFFF', 0.1),
                }
              }}>
                <CardContent sx={{ position: 'relative', zIndex: 1 }}>
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
                    mx: 'auto',
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
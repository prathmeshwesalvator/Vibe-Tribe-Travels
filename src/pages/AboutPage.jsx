import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Slide,
  Paper,
  Avatar,
  Divider,
  useScrollTrigger,
  Zoom
} from '@mui/material';
import {
  People as PeopleIcon,
  Phone as PhoneIcon,
  Explore as ExploreIcon,
  CheckCircle as CheckCircleIcon,
  Flight as FlightIcon,
  EmojiEvents as EmojiEventsIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
  Public as PublicIcon,
  Computer as ComputerIcon,
  Star as StarIcon,
  Rocket as RocketIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Styled Components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
  overflow: 'hidden',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.5) 100%), url("https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1920"), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271920%27 height=%271080%27 viewBox=%270 0 1920 1080%27%3E%3Cdefs%3E%3ClinearGradient id=%27g%27 x1=%270%27 y1=%270%27 x2=%270%27 y2=%271%27%3E%3Cstop offset=%270%25%27 stop-color=%27%23667eea%27/%3E%3Cstop offset=%27100%25%27 stop-color=%27%23764ba2%27/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%271920%27 height=%271080%27 fill=%27url(%23g)%27/%3E%3Ccircle cx=%271600%27 cy=%27220%27 r=%2780%27 fill=%27%23ffffff%27 fill-opacity=%270.5%27/%3E%3Cpolygon points=%270,900 400,700 800,900 1200,750 1600,900 1920,800 1920,1080 0,1080%27 fill=%27%234b5563%27/%3E%3Cpolygon points=%270,960 320,820 700,960 1100,860 1500,980 1920,900 1920,1080 0,1080%27 fill=%27%23374151%27/%3E%3Cpath d=%27M620 300 l120 20 60 -20 -60 -20 -120 20 z%27 fill=%27%23ffffff%27 fill-opacity=%270.9%27/%3E%3C/svg%3E")',
  backgroundSize: 'cover, cover, cover',
  backgroundPosition: 'center, center, center',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '80vh',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: 'white',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto',
}));

const HeroBadge = styled(Chip)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  fontSize: '0.9rem',
  fontWeight: 600,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(4),
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
  },
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(4),
  opacity: 0.95,
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  },
}));

const StatsSection = styled(Box)(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to bottom, transparent, white)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const StatCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4, 2),
  borderRadius: theme.spacing(3),
  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)',
    '&::before': {
      transform: 'translateX(100%)',
    },
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  lineHeight: 1,
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  opacity: 0.9,
  textTransform: 'uppercase',
  letterSpacing: '1px',
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const SectionBadge = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  fontSize: '0.9rem',
  fontWeight: 600,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(2),
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  color: '#64748b',
  maxWidth: 600,
  margin: '0 auto',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
  },
}));

const MissionVisionCard = styled(Card)(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  border: '2px solid transparent',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    transform: 'scaleX(0)',
    transition: 'transform 0.4s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(102, 126, 234, 0.2)',
    '&::before': {
      transform: 'scaleX(1)',
    },
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const CardIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem',
  marginBottom: theme.spacing(3),
  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
  [theme.breakpoints.down('md')]: {
    width: 60,
    height: 60,
    fontSize: '2rem',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  color: '#64748b',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
  },
}));

const FeatureList = styled(Box)(({ theme }) => ({
  '& li': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: '#475569',
    fontSize: '0.95rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const TeamCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const MemberAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  fontSize: '2.5rem',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 80,
    fontSize: '2rem',
  },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

const MemberPosition = styled(Typography)(({ theme }) => ({
  color: '#667eea',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  color: '#64748b',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontSize: '0.9rem',
}));

const SpecialtyChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(102, 126, 234, 0.1)',
  color: '#667eea',
  fontSize: '0.75rem',
  fontWeight: 500,
  margin: theme.spacing(0.25),
  border: '1px solid rgba(102, 126, 234, 0.2)',
}));

const TimelineSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to bottom, transparent, #f8fafc)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: 1000,
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '3px',
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      left: theme.spacing(3),
    },
  },
}));

const TimelineItem = styled(Box)(({ theme, $isLeft, $isMobile }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  width: $isMobile ? '100%' : '45%',
  left: $isMobile ? 0 : ($isLeft ? 0 : '55%'),
  paddingLeft: $isMobile ? theme.spacing(6) : 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    left: 0,
    paddingLeft: theme.spacing(6),
  },
}));

const TimelineCard = styled(Paper)(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    width: '20px',
    height: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
    boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    '&::before': {
      left: theme.spacing(-4),
    },
  },
}));

const TimelineYear = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  fontWeight: 700,
  marginBottom: theme.spacing(1.5),
}));

const TimelineTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: theme.spacing(1),
}));

const TimelineDescription = styled(Typography)(({ theme }) => ({
  color: '#64748b',
  lineHeight: 1.6,
  fontSize: '0.9rem',
}));

const CTASection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const CTAContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
  },
}));

const CTADescription = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  color: '#cbd5e1',
  marginBottom: theme.spacing(4),
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
  },
}));

const CTAButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '50px',
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  margin: theme.spacing(0, 1),
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: variant === 'contained' 
      ? '0 15px 35px rgba(102, 126, 234, 0.4)'
      : '0 15px 35px rgba(255, 255, 255, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: 300,
    margin: theme.spacing(1, 0),
  },
}));

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Scroll animation hooks
  const [heroRef, heroVisible] = useScrollAnimation(0.3);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  const [missionRef, missionVisible] = useScrollAnimation(0.2);
  const [teamRef, teamVisible] = useScrollAnimation(0.2);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.3);

  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: '✈️' },
    { number: '50+', label: 'Destinations', icon: '🌍' },
    { number: '10+', label: 'Years Experience', icon: '⭐' },
    { number: '24/7', label: 'Support', icon: '🔄' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      avatar: '👩‍💼',
      description: '15+ years in luxury travel industry',
      specialties: ['Luxury Destinations', 'VIP Services', 'Corporate Travel']
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      avatar: '👨‍💼',
      description: 'Expert in travel logistics and planning',
      specialties: ['Logistics', 'Crisis Management', 'Quality Control']
    },
    {
      name: 'Emma Rodriguez',
      position: 'Senior Travel Consultant',
      avatar: '👩‍💻',
      description: 'Specialist in adventure and cultural tours',
      specialties: ['Adventure Travel', 'Cultural Tours', 'Group Planning']
    },
    {
      name: 'David Thompson',
      position: 'Customer Experience Manager',
      avatar: '👨‍💻',
      description: 'Ensuring exceptional customer satisfaction',
      specialties: ['Customer Service', 'Feedback Management', 'Loyalty Programs']
    }
  ];



  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box ref={heroRef}>
            <Fade in={heroVisible} timeout={1000}>
              <HeroContent>
                <HeroBadge
                  icon={<PeopleIcon />}
                  label="About Vibe Tribe Travels"
                  variant="outlined"
                />
                <HeroTitle variant="h1">
                  Crafting Unforgettable Travel Experiences
                </HeroTitle>
                <HeroDescription variant="h2">
                  Since 2013, we've been passionate about creating extraordinary journeys that connect you with the world's most beautiful destinations. 
                  Our mission is to make luxury travel accessible while maintaining the highest standards of service and safety.
                </HeroDescription>
              </HeroContent>
            </Fade>
          </Box>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <Container maxWidth="lg">
          <Box ref={statsRef}>
            <Fade in={statsVisible} timeout={800}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={3} maxWidth="md">
                  {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Grow in={statsVisible} timeout={800 + index * 200}>
                        <StatCard>
                          <Typography variant="h4" sx={{ marginBottom: 1 }}>
                            {stat.icon}
                          </Typography>
                          <StatNumber variant="h2">{stat.number}</StatNumber>
                          <StatLabel variant="body1">{stat.label}</StatLabel>
                        </StatCard>
                      </Grow>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Box>
        </Container>
      </StatsSection>

      {/* Mission & Vision Section */}
      <SectionContainer sx={{ background: 'white' }}>
        <Container maxWidth="lg">
          <Box ref={missionRef}>
            <Fade in={missionVisible} timeout={800}>
              <SectionHeader>
                <SectionBadge
                  icon={<VerifiedIcon />}
                  label="Our Values"
                  variant="filled"
                />
                <SectionTitle variant="h2">
                  Mission & Vision
                </SectionTitle>
                <SectionSubtitle variant="body1">
                  We believe that travel has the power to transform lives and broaden perspectives
                </SectionSubtitle>
              </SectionHeader>
            </Fade>
            
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6}>
                <Grow in={missionVisible} timeout={1000}>
                  <MissionVisionCard>
                    <CardIcon>🎯</CardIcon>
                    <CardTitle variant="h3">Our Mission</CardTitle>
                    <CardDescription variant="body1">
                      To provide exceptional travel experiences that inspire, educate, and create lasting memories. 
                      We believe that travel has the power to transform lives and broaden perspectives.
                    </CardDescription>
                    <FeatureList component="ul">
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Personalized service for every client</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Uncompromising quality and safety</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Sustainable and responsible tourism</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> 24/7 support throughout your journey</li>
                    </FeatureList>
                  </MissionVisionCard>
                </Grow>
              </Grid>
              
              <Grid item xs={12} lg={6}>
                <Grow in={missionVisible} timeout={1200}>
                  <MissionVisionCard>
                    <CardIcon>🔮</CardIcon>
                    <CardTitle variant="h3">Our Vision</CardTitle>
                    <CardDescription variant="body1">
                      To become the world's most trusted and innovative travel company, setting new standards 
                      for luxury travel while making extraordinary experiences accessible to discerning travelers.
                    </CardDescription>
                    <FeatureList component="ul">
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Global network of premium partners</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Cutting-edge technology integration</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Exclusive access to hidden gems</li>
                      <li><CheckCircleIcon sx={{ color: '#10b981' }} /> Industry-leading customer satisfaction</li>
                    </FeatureList>
                  </MissionVisionCard>
                </Grow>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </SectionContainer>

      {/* Team Section */}
      <SectionContainer sx={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Container maxWidth="lg">
          <Box ref={teamRef}>
            <Fade in={teamVisible} timeout={800}>
              <SectionHeader>
                <SectionBadge
                  icon={<PeopleIcon />}
                  label="Our Team"
                  variant="filled"
                />
                <SectionTitle variant="h2">
                  Meet the Experts Behind Your Journey
                </SectionTitle>
                <SectionSubtitle variant="body1">
                  Our experienced team of travel professionals is dedicated to crafting your perfect adventure
                </SectionSubtitle>
              </SectionHeader>
            </Fade>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              width: '100%'
            }}>
              <Grid 
                container 
                spacing={{ xs: 2, sm: 3, md: 4 }} 
                sx={{ 
                  maxWidth: '1200px',
                  justifyContent: 'center'
                }}
              >
                {teamMembers.map((member, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    lg={3} 
                    key={index}
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Grow in={teamVisible} timeout={1000 + index * 200}>
                      <Box sx={{ width: '100%', maxWidth: '280px' }}>
                        <TeamCard>
                          <CardContent sx={{ 
                            textAlign: 'center', 
                            p: { xs: 2, sm: 3 },
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}>
                            <Box>
                              <MemberAvatar>{member.avatar}</MemberAvatar>
                              <MemberName variant="h5">{member.name}</MemberName>
                              <MemberPosition variant="body1">{member.position}</MemberPosition>
                              <MemberDescription variant="body2">{member.description}</MemberDescription>
                            </Box>
                            <Box sx={{ 
                              display: 'flex', 
                              flexWrap: 'wrap', 
                              justifyContent: 'center', 
                              gap: 0.5,
                              mt: 2
                            }}>
                              {member.specialties.map((specialty, specIndex) => (
                                <SpecialtyChip
                                  key={specIndex}
                                  label={specialty}
                                  size="small"
                                />
                              ))}
                            </Box>
                          </CardContent>
                        </TeamCard>
                      </Box>
                    </Grow>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </SectionContainer>



      {/* CTA Section */}
      <CTASection>
        <Container maxWidth="lg">
          <Box ref={ctaRef}>
            <Fade in={ctaVisible} timeout={800}>
              <CTAContent>
                <CTATitle variant="h2">
                  Ready to Experience the Vibe Tribe Difference?
                </CTATitle>
                <CTADescription variant="body1">
                  Let our expert team craft your next unforgettable adventure
                </CTADescription>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center'
                }}>
                  <CTAButton
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    startIcon={<PhoneIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                      },
                    }}
                  >
                    Get Started
                  </CTAButton>
                  <CTAButton
                    component={Link}
                    to="/destinations"
                    variant="outlined"
                    size="large"
                    startIcon={<ExploreIcon />}
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Explore Destinations
                  </CTAButton>
                </Box>
              </CTAContent>
            </Fade>
          </Box>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default AboutPage; 
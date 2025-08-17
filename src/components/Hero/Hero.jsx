import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Zoom,
  Slide
} from '@mui/material';
import {
  Explore as ExploreIcon,
  Info as InfoIcon,
  Flight as FlightIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)',
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#ffffff',
}));

const HeroBadge = styled(Chip)(({ theme }) => ({
  background: 'rgba(59, 130, 246, 0.2)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  borderRadius: '50px',
  padding: theme.spacing(1, 2),
  backdropFilter: 'blur(10px)',
  color: '#60a5fa',
  fontWeight: 600,
  fontSize: '0.9rem',
  letterSpacing: '0.5px',
  marginBottom: theme.spacing(4),
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(3rem, 6vw, 5rem)',
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const TypingText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  borderRight: '3px solid #3b82f6',
  animation: 'blink 0.75s step-end infinite',
  paddingRight: '8px',
  marginRight: '8px',
}));

const HeroTitleHighlight = styled('span')({
  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    animation: 'expandLine 1s ease-out 1s forwards',
  },
});

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
  fontWeight: 400,
  lineHeight: 1.6,
  color: '#e2e8f0',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  maxWidth: 600,
  margin: '0 auto',
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  padding: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 800,
  color: '#3b82f6',
  marginBottom: theme.spacing(1),
  textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#cbd5e1',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
  },
}));

const HeroButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  textTransform: 'none',
  letterSpacing: '1px',
  fontSize: '1rem',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  margin: theme.spacing(0, 1),
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: variant === 'contained' 
      ? '0 12px 35px rgba(59, 130, 246, 0.6)'
      : '0 12px 35px rgba(255, 255, 255, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: theme.spacing(1, 0),
  },
}));

// Animated bubble components
const FloatingBubble = styled(Box)(({ theme, size, delay, position, movement }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
  animation: `floatWide 8s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  top: position.top,
  left: position.left,
  zIndex: 1,
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
    animation: `pulseInner 4s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  },
}));

const PulseBubble = styled(Box)(({ theme, size, delay, position, movement }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
  animation: `pulseWide 6s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  top: position.top,
  left: position.left,
  zIndex: 1,
  pointerEvents: 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    right: '-20%',
    bottom: '-20%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
    animation: `glowWide 8s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  },
}));

// Keyframe animations
const floatWide = keyframes`
  0%, 100% {
    transform: translate(0px, 0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(100px, -50px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(200px, 100px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(50px, 150px) rotate(270deg) scale(1.05);
  }
`;

const pulseWide = keyframes`
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.6;
  }
  25% {
    transform: translate(-80px, -40px) scale(1.2);
    opacity: 0.8;
  }
  50% {
    transform: translate(-150px, 60px) scale(0.8);
    opacity: 1;
  }
  75% {
    transform: translate(-60px, 120px) scale(1.1);
    opacity: 0.7;
  }
`;

const pulseInner = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
`;

const glowWide = keyframes`
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.2;
  }
  33% {
    transform: translate(60px, -30px) scale(1.2);
    opacity: 0.4;
  }
  66% {
    transform: translate(-40px, 80px) scale(0.8);
    opacity: 0.3;
  }
`;

const expandLine = keyframes`
  to {
    transform: scaleX(1);
  }
`;

const blink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #3b82f6;
  }
`;

// Add keyframes to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatWide {
      0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
      25% { transform: translate(100px, -50px) rotate(90deg) scale(1.1); }
      50% { transform: translate(200px, 100px) rotate(180deg) scale(0.9); }
      75% { transform: translate(50px, 150px) rotate(270deg) scale(1.05); }
    }
    @keyframes pulseWide {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.6; }
      25% { transform: translate(-80px, -40px) scale(1.2); opacity: 0.8; }
      50% { transform: translate(-150px, 60px) scale(0.8); opacity: 1; }
      75% { transform: translate(-60px, 120px) scale(1.1); opacity: 0.7; }
    }
    @keyframes pulseInner {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.3); opacity: 0.6; }
    }
    @keyframes glowWide {
      0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
      33% { transform: translate(60px, -30px) scale(1.2); opacity: 0.4; }
      66% { transform: translate(-40px, 80px) scale(0.8); opacity: 0.3; }
    }
    @keyframes expandLine {
      to { transform: scaleX(1); }
    }
    @keyframes blink {
      from, to { border-color: transparent; }
      50% { border-color: #3b82f6; }
    }
  `;
  document.head.appendChild(style);
}

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Discover Your Next";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const typeText = () => {
      if (isDeleting) {
        // Deleting phase
        currentText = fullText.substring(0, currentText.length - 1);
        setTypingText(currentText);
        currentIndex--;
        
        if (currentText === '') {
          isDeleting = false;
          currentIndex = 0;
          setTimeout(typeText, 1000); // Pause before typing again
          return;
        }
      } else {
        // Typing phase
        currentText = fullText.substring(0, currentIndex + 1);
        setTypingText(currentText);
        currentIndex++;
        
        if (currentText === fullText) {
          isDeleting = true;
          setTimeout(typeText, 2000); // Pause before deleting
          return;
        }
      }
      
      setTimeout(typeText, isDeleting ? 50 : 100); // Faster deletion, slower typing
    };

    // Start the typing animation
    typeText();

    return () => {
      // Cleanup function
    };
  }, [mounted, fullText]);

  // Cursor blink effect - always show cursor for continuous typing
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: <PeopleIcon /> },
    { number: '50+', label: 'Destinations', icon: <PublicIcon /> },
    { number: '10+', label: 'Years Experience', icon: <ScheduleIcon /> }
  ];

  const bubbles = [
    { size: 120, delay: 0, position: { top: '5%', left: '5%' }, movement: { x: 300, y: 200 } },
    { size: 180, delay: 2, position: { top: '15%', left: '80%' }, movement: { x: -250, y: 150 } },
    { size: 100, delay: 4, position: { top: '70%', left: '10%' }, movement: { x: 200, y: -180 } },
    { size: 140, delay: 1, position: { top: '25%', left: '75%' }, movement: { x: -180, y: 100 } },
    { size: 110, delay: 3, position: { top: '80%', left: '85%' }, movement: { x: -150, y: -120 } },
    { size: 90, delay: 1.5, position: { top: '45%', left: '20%' }, movement: { x: 220, y: 80 } },
    { size: 160, delay: 3.5, position: { top: '10%', left: '60%' }, movement: { x: -200, y: -100 } },
    { size: 130, delay: 2.5, position: { top: '60%', left: '70%' }, movement: { x: 180, y: -150 } }
  ];

  const pulseBubbles = [
    { size: 80, delay: 0.5, position: { top: '20%', left: '40%' }, movement: { x: 150, y: 100 } },
    { size: 100, delay: 2.5, position: { top: '55%', left: '15%' }, movement: { x: -120, y: 80 } },
    { size: 70, delay: 1.5, position: { top: '75%', left: '50%' }, movement: { x: 100, y: -90 } },
    { size: 90, delay: 3.5, position: { top: '30%', left: '90%' }, movement: { x: -80, y: -60 } },
    { size: 60, delay: 4.5, position: { top: '85%', left: '30%' }, movement: { x: 120, y: 70 } }
  ];

  return (
    <HeroSection id="home">
      {/* Animated Background Bubbles */}
      {bubbles.map((bubble, index) => (
        <FloatingBubble
          key={`bubble-${index}`}
          size={bubble.size}
          delay={bubble.delay}
          position={bubble.position}
          movement={bubble.movement}
        />
      ))}
      
      {pulseBubbles.map((bubble, index) => (
        <PulseBubble
          key={`pulse-${index}`}
          size={bubble.size}
          delay={bubble.delay}
          position={bubble.position}
          movement={bubble.movement}
        />
      ))}

      <Container maxWidth="xl">
        <HeroContent>
          {/* Hero Badge */}
          <Fade in={mounted} timeout={800}>
            <Box>
              <HeroBadge
                icon={<FlightIcon />}
                label="🌟 Premium Travel Experiences"
                variant="outlined"
              />
            </Box>
          </Fade>

          {/* Hero Title with Typing Animation */}
          <Grow in={mounted} timeout={1000}>
            <Box>
              <HeroTitle variant="h1">
                {typingText}
                {showCursor && <TypingText />}
                <br />
                <HeroTitleHighlight>Adventure</HeroTitleHighlight>
              </HeroTitle>
            </Box>
          </Grow>

          {/* Hero Subtitle */}
          <Slide direction="up" in={mounted} timeout={1200}>
            <Box>
              <HeroSubtitle variant="h2">
                Experience the world through our curated travel experiences. 
                From pristine beaches to majestic mountains, let us guide you to unforgettable destinations.
              </HeroSubtitle>
            </Box>
          </Slide>

          {/* Stats Section */}
          <Zoom in={mounted} timeout={1400}>
            <Box sx={{ mb: 5 }}>
              <Grid container spacing={3} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <StatsCard>
                      <CardContent>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            margin: '0 auto',
                            mb: 2,
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          }}
                        >
                          {stat.icon}
                        </Avatar>
                        <StatNumber variant="h3">
                          {stat.number}
                        </StatNumber>
                        <StatLabel variant="body2">
                          {stat.label}
                        </StatLabel>
                      </CardContent>
                    </StatsCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Zoom>

          {/* Hero Buttons */}
          <Fade in={mounted} timeout={1600}>
            <Box>
              <HeroButton
                variant="contained"
                size="large"
                startIcon={<ExploreIcon />}
                href="#destinations"
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  },
                }}
              >
                Explore Destinations
              </HeroButton>
              
              <HeroButton
                variant="outlined"
                size="large"
                startIcon={<InfoIcon />}
                href="#about"
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              >
                Learn More
              </HeroButton>
            </Box>
          </Fade>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero; 
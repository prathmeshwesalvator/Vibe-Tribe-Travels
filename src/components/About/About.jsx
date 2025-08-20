import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
  Zoom,
  Button,
} from '@mui/material';
import {
  FlightTakeoff as FlightTakeoffIcon,
  Public as PublicIcon,
  Verified as VerifiedIcon,
  EmojiEvents as EmojiEventsIcon,
  SupportAgent as SupportAgentIcon,
  Explore as ExploreIcon,
} from '@mui/icons-material';
import NatureIcon from '@mui/icons-material/Nature';
import HikingIcon from '@mui/icons-material/Hiking';
import { styled, alpha } from '@mui/material/styles';
import Lottie from 'lottie-react';
import travelLottie from './lotties/travel.json';
import globeLottie from './lotties/globe.json';
import ecoLottie from './lotties/eco.json';
import supportLottie from './lotties/support.json';
import './About.css';

// Forest/Nature palette
const PALETTE = {
  deepForestGreen: '#184D36',
  lightForest: '#EAF6F0',
  moss: '#B7D6B7',
  sky: '#B3E5FC',
  sun: '#FFD180',
  earth: '#A1887F',
  cream: '#FDF6EC',
  charcoal: '#222C22',
  white: '#FFFFFF',
  oceanBlue: '#1D7A85',
  sunsetOrange: '#F4A261',
};

const AboutRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(120deg, ${PALETTE.lightForest} 0%, ${PALETTE.cream} 100%)`,
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Backdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  background: `radial-gradient(900px 450px at 10% -10%, ${alpha(PALETTE.sky, 0.13)} 0%, transparent 60%),
               radial-gradient(700px 350px at 90% 0%, ${alpha(PALETTE.sun, 0.11)} 0%, transparent 55%),
               radial-gradient(1000px 500px at 50% 120%, ${alpha(PALETTE.moss, 0.13)} 0%, transparent 62%)`,
}));

const SectionHeader = styled(Box)(() => ({ position: 'relative', zIndex: 1 }));

const AccentBadge = styled(Chip)(() => ({
  background: alpha(PALETTE.deepForestGreen, 0.12),
  color: PALETTE.deepForestGreen,
  fontWeight: 800,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
  borderRadius: 999,
  fontSize: 13,
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: 18,
  background: `linear-gradient(135deg, ${alpha(PALETTE.white, 0.95)} 0%, ${alpha(PALETTE.lightForest, 0.7)} 100%)`,
  boxShadow: '0 8px 32px rgba(24,77,54,0.10)',
  transition: 'transform 220ms cubic-bezier(.4,2,.6,1), box-shadow 220ms cubic-bezier(.4,2,.6,1)',
  willChange: 'transform',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.03)',
    boxShadow: '0 16px 48px rgba(24,77,54,0.16)',
  },
}));

const StoryCard = styled(Box)(({ theme }) => ({
  background: PALETTE.white,
  borderRadius: 20,
  boxShadow: '0 8px 32px rgba(24,77,54,0.10)',
  padding: theme.spacing(4),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const ImgTile = styled(Box)(({ src }) => ({
  borderRadius: 16,
  backgroundImage: `linear-gradient(0deg, rgba(24,77,54,0.10), rgba(0,0,0,0.0)), url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 8px 32px rgba(24,77,54,0.10)',
  transition: 'transform 220ms cubic-bezier(.4,2,.6,1)',
  '&:hover': { transform: 'scale(1.01)' },
  minHeight: 220,
  [window.innerWidth < 600 ? 'minHeight' : '']: 140,
}));

const Orb = styled(Box)(({ color }) => ({
  position: 'absolute',
  width: 120,
  height: 120,
  right: -30,
  top: -30,
  borderRadius: '50%',
  background: `radial-gradient(circle at 40% 35%, ${alpha(color || PALETTE.moss, 0.22)}, transparent 70%)`,
  filter: 'blur(8px)',
  zIndex: 0,
}));

const CTASection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  background: `linear-gradient(90deg, ${PALETTE.deepForestGreen} 60%, ${PALETTE.moss} 100%)`,
  borderRadius: 20,
  padding: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(24,77,54,0.13)',
  color: PALETTE.cream,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

// Lottie animation mapping for values
const valueLotties = [
  travelLottie,
  globeLottie,
  ecoLottie,
  supportLottie,
];

const About = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [inView, setInView] = useState(false);
  const [parallax, setParallax] = useState(0);
  const sectionRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          setParallax(Math.min(60, y * 0.2));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Tailored Itineraries',
      desc: 'Custom journeys designed for your vibe, not templates.',
      icon: <ExploreIcon sx={{ color: PALETTE.sky }} />,
      color: PALETTE.sky,
    },
    {
      title: 'Local Insights',
      desc: 'Trusted local guides unlock hidden gems and culture.',
      icon: <PublicIcon sx={{ color: PALETTE.moss }} />,
      color: PALETTE.moss,
    },
    {
      title: 'Eco‑Friendly Choices',
      desc: 'Sustainable stays and experiences that give back.',
      icon: <NatureIcon sx={{ color: PALETTE.sun }} />,
      color: PALETTE.sun,
    },
    {
      title: '24/7 Concierge',
      desc: 'Real humans who care — before, during, and after.',
      icon: <SupportAgentIcon sx={{ color: PALETTE.deepForestGreen }} />,
      color: PALETTE.deepForestGreen,
    },
  ];

  return (
    <AboutRoot ref={sectionRef}>
      <Backdrop sx={{ transform: `translateY(${parallax * 0.35}px)` }} />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 2, md: 4 },
        }}
      >
        <SectionHeader>
          <Stack
            spacing={1.5}
            alignItems="center"
            textAlign="center"
            sx={{ width: '100%', mb: 4, mt: 2 }}
          >
            <AccentBadge label="About Vibe Tribe" icon={<FlightTakeoffIcon />} className="about-badge" />
            <Grow in={inView} timeout={700}>
              <Typography variant={isSmDown ? 'h4' : 'h3'} sx={{ fontWeight: 900, color: PALETTE.deepForestGreen, letterSpacing: -1 }}>
                Travel wild. Return inspired.
              </Typography>
            </Grow>
            <Fade in={inView} timeout={1100}>
              <Typography variant="h6" sx={{ color: PALETTE.charcoal, opacity: 0.92, maxWidth: 820, mx: 'auto', fontWeight: 500 }}>
                We blend nature, culture, and comfort so you return with stories — and a smile. From solo escapes to group adventures, we make it effortless.
              </Typography>
            </Fade>
          </Stack>
        </SectionHeader>

        {/* 2x2 Responsive Grid */}
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{
            width: '100%',
            mx: 0,
            mb: 4,
            // Prevent overflow and ensure no overlap
            position: 'relative',
          }}
        >
          {/* 00: Animation */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: { xs: 180, md: 320 },
              p: { xs: 1, md: 3 },
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <Box
              className="about-lottie-wrap"
              sx={{
                width: { xs: '80vw', sm: 320, md: 340 },
                maxWidth: { xs: 340, sm: 400, md: 420 },
                minWidth: 120,
                height: { xs: 180, sm: 220, md: 260 },
                maxHeight: 320,
                minHeight: 120,
                mx: 'auto',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${alpha(PALETTE.sky, 0.10)} 0%, ${alpha(PALETTE.sun, 0.10)} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              <Lottie
                role="img"
                aria-label="Travel animation"
                animationData={travelLottie}
                loop
                style={{
                  width: '90%',
                  height: '90%',
                  minWidth: 80,
                  minHeight: 80,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Grid>
          {/* 01: Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: 180, md: 320 },
              p: { xs: 1, md: 3 },
              zIndex: 2,
            }}
          >
            <StoryCard
              sx={{
                width: '100%',
                maxWidth: 480,
                mx: 'auto',
                boxShadow: 'none',
                bgcolor: 'transparent',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Stack spacing={2.25}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Avatar sx={{ bgcolor: alpha(PALETTE.sky, 0.18) }}>
                    <VerifiedIcon sx={{ color: PALETTE.sky }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: PALETTE.deepForestGreen }}>
                    Our Story
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: PALETTE.charcoal, opacity: 0.93 }}>
                  Born from a love for slow, sustainable travel, Vibe Tribe Travels began guiding small groups across hidden trails and coastal towns. Today, we plan bespoke journeys that balance adventure with ease — while supporting the communities you visit.
                </Typography>
                <Divider />
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {[HikingIcon, EmojiEventsIcon, PublicIcon].map((Icon, i) => (
                    <Chip
                      key={i}
                      icon={<Icon />}
                      label={["Guided Treks", "Award-Winning", "Global Network"][i]}
                      sx={{
                        backgroundColor: alpha(PALETTE.sun, 0.1),
                        color: PALETTE.charcoal,
                        fontWeight: 700,
                        borderRadius: 999,
                        fontSize: 13,
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </StoryCard>
          </Grid>
   
        </Grid>

        {/* CTA */}
        <CTASection>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 900, color: PALETTE.cream, letterSpacing: -0.5 }}>
                Ready to craft your next journey?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.93 }}>
                Speak with our travel curators and get a tailored itinerary in 24 hours.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <Button
                  href="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: PALETTE.oceanBlue,
                    color: PALETTE.white,
                    px: 3,
                    py: 1.5,
                    borderRadius: 999,
                    fontWeight: 800,
                    boxShadow: `0 6px 18px ${alpha(PALETTE.oceanBlue, 0.25)}`,
                    textTransform: 'none',
                    fontSize: 18,
                    '&:hover': { backgroundColor: PALETTE.sun, color: PALETTE.white },
                  }}
                >
                  Plan with an expert
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CTASection>
      </Container>
    </AboutRoot>
  );
};

export default About;

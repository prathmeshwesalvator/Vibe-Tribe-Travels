import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  useMediaQuery,
  useTheme,
  Grow,
  Fade,
  Avatar,
  Divider,
} from '@mui/material';
import {
  FlightTakeoff as FlightTakeoffIcon,
  Luggage as LuggageIcon,
  BeachAccess as BeachAccessIcon,
  Terrain as TerrainIcon,
  Hotel as HotelIcon,
  DirectionsBoat as DirectionsBoatIcon,
  CameraAlt as CameraAltIcon,
  Explore as ExploreIcon,
  Public as PublicIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import './Hero.css';

// Brand palette
const PALETTE = {
  deepForestGreen: '#0B3D2E',
  cream: '#FDF6EC',
  oceanBlue: '#1D7A85',
  sunsetOrange: '#F4A261',
  palmGreen: '#2E8B57',
  charcoal: '#333333',
  lightGray: '#F1F1F1',
  white: '#FFFFFF',
};

const HeroRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: PALETTE.cream,
  overflow: 'hidden',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
}));

const ContentCard = styled(Box)(({ theme }) => ({
  background: PALETTE.white,
  color: PALETTE.charcoal,
  borderRadius: 20,
  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
  padding: theme.spacing(4),
  maxWidth: 900,
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: 16,
  },
}));

const AccentBadge = styled(Chip)(({ theme }) => ({
  background: alpha(PALETTE.palmGreen, 0.12),
  color: PALETTE.palmGreen,
  fontWeight: 700,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
  borderRadius: 999,
}));

const CTAButton = styled(Button)(({ theme, colorvariant }) => {
  const base = colorvariant === 'secondary' ? PALETTE.sunsetOrange : PALETTE.oceanBlue;
  return ({
    backgroundColor: base,
    color: PALETTE.white,
    padding: theme.spacing(1.25, 2.5),
    borderRadius: 999,
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: `0 8px 20px ${alpha(base, 0.35)}`,
    '&:hover': {
      backgroundColor: base,
      color: PALETTE.charcoal,
      backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.35), rgba(255,255,255,0.35))`,
      transform: 'translateY(-2px)',
      boxShadow: `0 12px 28px ${alpha(base, 0.4)}`,
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: `0 6px 16px ${alpha(base, 0.35)}`,
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha(base, 0.65)}`,
      outlineOffset: 2,
    },
  });
});

const ParallaxBackdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
  background: `radial-gradient(1200px 600px at 10% -10%, ${alpha(PALETTE.oceanBlue, 0.14)} 0%, transparent 60%),
               radial-gradient(800px 400px at 90% 10%, ${alpha(PALETTE.sunsetOrange, 0.1)} 0%, transparent 55%),
               radial-gradient(900px 450px at 50% 120%, ${alpha(PALETTE.palmGreen, 0.1)} 0%, transparent 60%)`,
}));

// Travel particle layer (floating icons)
const ParticlesLayer = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
}));

const Particle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: 0.9,
  filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.14))',
}));

// Visual stage right side
const VisualStage = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: 420,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Globe = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 280,
  height: 280,
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, ${alpha(PALETTE.oceanBlue, 0.25)} 0%, ${alpha(PALETTE.palmGreen, 0.18)} 40%, ${alpha(PALETTE.deepForestGreen, 0.15)} 70%, ${alpha('#000', 0.06)} 100%)`,
  boxShadow: '0 30px 80px rgba(0,0,0,0.15), inset 0 4px 20px rgba(255,255,255,0.35)',
  overflow: 'visible',
  border: `6px solid ${PALETTE.white}`,
}));

const GlobeCenterIcon = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: PALETTE.deepForestGreen,
}));

const Orbit = styled(Box)(({ radius, duration }) => ({
  position: 'absolute',
  inset: 0,
  transformOrigin: 'center',
  animation: `orbitSpin ${duration || 16}s linear infinite`,
  pointerEvents: 'none',
  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.12))',
}));

const OrbitChip = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: PALETTE.white,
  color: PALETTE.charcoal,
  borderRadius: 999,
  padding: theme.spacing(0.5, 1),
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontWeight: 700,
  fontSize: 12,
  boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
}));

const FloatCard = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  right: -20,
  top: -20,
  width: 160,
  borderRadius: 16,
  padding: theme.spacing(1.25),
  background: `linear-gradient(135deg, ${alpha(color, 0.15)} 0%, ${alpha('#FFFFFF', 0.9)} 100%)`,
  backdropFilter: 'blur(8px)',
  boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
  animation: 'cardFloat 6s ease-in-out infinite',
}));

const FloatCardSecondary = styled(FloatCard)(({ theme }) => ({
  right: 'auto',
  left: -20,
  top: 'auto',
  bottom: -10,
  animationDuration: '7s',
}));

const Hero = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [parallax, setParallax] = useState(0);
  const [inView, setInView] = useState(false);
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const statChips = [
    { label: '120+ Destinations', color: PALETTE.oceanBlue },
    { label: '4.9/5 Average Rating', color: PALETTE.sunsetOrange },
    { label: '24/7 Travel Support', color: PALETTE.palmGreen },
  ];

  const particles = [
    { Icon: FlightTakeoffIcon, size: 38, color: PALETTE.oceanBlue, top: '10%', left: '7%', dx: 40, dy: 26, rot: '12deg', duration: '12s' },
    { Icon: LuggageIcon, size: 30, color: PALETTE.sunsetOrange, top: '24%', left: '86%', dx: 32, dy: 22, rot: '10deg', duration: '14s' },
    { Icon: BeachAccessIcon, size: 32, color: PALETTE.palmGreen, top: '72%', left: '10%', dx: 36, dy: 24, rot: '9deg', duration: '13s' },
    { Icon: DirectionsBoatIcon, size: 36, color: PALETTE.oceanBlue, top: '16%', left: '55%', dx: 44, dy: 28, rot: '12deg', duration: '16s' },
    { Icon: CameraAltIcon, size: 28, color: PALETTE.sunsetOrange, top: '84%', left: '40%', dx: 34, dy: 24, rot: '8deg', duration: '12.5s' },
    { Icon: TerrainIcon, size: 34, color: PALETTE.palmGreen, top: '40%', left: '18%', dx: 38, dy: 26, rot: '11deg', duration: '15s' },
    { Icon: HotelIcon, size: 28, color: PALETTE.sunsetOrange, top: '46%', left: '92%', dx: 30, dy: 24, rot: '10deg', duration: '14.5s' },
  ];

  return (
    <HeroRoot ref={sectionRef}>
      <ParallaxBackdrop sx={{ transform: `translateY(${parallax * 0.45}px)` }} />

      {/* Floating travel particles */}
      <ParticlesLayer aria-hidden sx={{ transform: `translateY(${parallax * 0.25}px)` }}>
        {particles.map((p, idx) => (
          <Particle
            key={idx}
            className="hero-particle"
            sx={{
              top: p.top,
              left: p.left,
              color: p.color,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
              '--rot': p.rot,
              '--duration': p.duration,
              animationDuration: p.duration,
            }}
          >
            <p.Icon sx={{ fontSize: p.size }} />
          </Particle>
        ))}
      </ParticlesLayer>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 3, md: 6 } }}>
          <Grow in={inView} timeout={800}>
            <ContentCard>
              <Stack spacing={2.5}>
                <AccentBadge label="Explore the world with us" icon={<ExploreIcon />} />
                <Typography
                  variant={isMdDown ? 'h4' : 'h3'}
                  component="h1"
                  sx={{ fontWeight: 800, color: PALETTE.deepForestGreen, lineHeight: 1.15 }}
                >
                  Your next adventure begins here
                </Typography>
                <Fade in={inView} timeout={1100}>
                  <Typography variant="h6" component="p" sx={{ color: PALETTE.charcoal, opacity: 0.9, maxWidth: 680 }}>
                    Handcrafted itineraries, hidden gems, and seamless planning. We help you travel better — sustainably and stylishly.
                  </Typography>
                </Fade>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                  <CTAButton component={Link} to="/destinations" colorvariant="primary" size="large">
                    Explore Destinations
                  </CTAButton>
                  <CTAButton component={Link} to="/contact" colorvariant="secondary" size="large">
                    Get a Custom Plan
                  </CTAButton>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ pt: 1, flexWrap: 'wrap' }}>
                  {statChips.map((s) => (
                    <Chip key={s.label} label={s.label} sx={{
                      backgroundColor: alpha(s.color, 0.1),
                      color: s.color,
                      fontWeight: 700,
                      borderRadius: 999,
                    }} />
                  ))}
                </Stack>
                <Divider sx={{ my: 1.5 }} />
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ width: 36, height: 36, bgcolor: alpha(PALETTE.oceanBlue, 0.15) }}><FlightTakeoffIcon sx={{ color: PALETTE.oceanBlue }} /></Avatar>
                  <Avatar sx={{ width: 36, height: 36, bgcolor: alpha(PALETTE.sunsetOrange, 0.15) }}><CameraAltIcon sx={{ color: PALETTE.sunsetOrange }} /></Avatar>
                  <Avatar sx={{ width: 36, height: 36, bgcolor: alpha(PALETTE.palmGreen, 0.15) }}><BeachAccessIcon sx={{ color: PALETTE.palmGreen }} /></Avatar>
                  <Typography variant="body2" sx={{ color: PALETTE.charcoal, opacity: 0.8 }}>
                    Trusted by 10k+ explorers globally
                  </Typography>
                </Stack>
              </Stack>
            </ContentCard>
          </Grow>

          <Fade in={inView} timeout={1000}>
            <VisualStage aria-hidden>
              <Globe sx={{ transform: `translateY(${parallax * 0.15}px)` }}>
                <GlobeCenterIcon>
                  <PublicIcon sx={{ fontSize: 72, opacity: 0.8 }} />
                </GlobeCenterIcon>

                <Orbit duration={18}>
                  <OrbitChip sx={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(-140px)' }}>
                    <DirectionsBoatIcon sx={{ fontSize: 18, color: PALETTE.oceanBlue }} /> Sea
                  </OrbitChip>
                </Orbit>
                <Orbit duration={16}>
                  <OrbitChip sx={{ transform: 'translate(-50%, -50%) rotate(120deg) translateY(-140px)' }}>
                    <TerrainIcon sx={{ fontSize: 18, color: PALETTE.palmGreen }} /> Trek
                  </OrbitChip>
                </Orbit>
                <Orbit duration={20}>
                  <OrbitChip sx={{ transform: 'translate(-50%, -50%) rotate(240deg) translateY(-140px)' }}>
                    <HotelIcon sx={{ fontSize: 18, color: PALETTE.sunsetOrange }} /> Stay
                  </OrbitChip>
                </Orbit>
              </Globe>

              <FloatCard color={PALETTE.oceanBlue} sx={{ transform: `translateY(${parallax * -0.1}px)` }}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: PALETTE.charcoal }}>Santorini, Greece</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>Sunsets & whitewashed towns</Typography>
                </Stack>
              </FloatCard>

              <FloatCardSecondary color={PALETTE.sunsetOrange} sx={{ transform: `translateY(${parallax * 0.1}px)` }}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: PALETTE.charcoal }}>Bali, Indonesia</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>Beaches & rice terraces</Typography>
                </Stack>
              </FloatCardSecondary>
            </VisualStage>
          </Fade>
        </Box>
      </Container>

      {/* Scroll cue */}
      <Box aria-hidden sx={{ position: 'absolute', left: 0, right: 0, bottom: 12, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <Box className="scroll-cue" sx={{ color: PALETTE.deepForestGreen, display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <KeyboardArrowDownIcon />
          <KeyboardArrowDownIcon sx={{ opacity: 0.8 }} />
          <KeyboardArrowDownIcon sx={{ opacity: 0.6 }} />
        </Box>
      </Box>

      {/* Decorative bottom curve */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          height: 140,
          background:
            `radial-gradient(120% 180% at 50% 10%, ${PALETTE.cream} 0%, ${PALETTE.lightGray} 60%, transparent 65%)`,
          zIndex: 0,
        }}
      />
    </HeroRoot>
  );
};

export default Hero;



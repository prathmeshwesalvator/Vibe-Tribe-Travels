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

      <Box
        sx={{
          width: '100vw',
          maxWidth: '100%',
          px: { xs: 0, sm: 2 },
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
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

        {/* 2x2 Grid */}
        <Grid
          container
          spacing={0}
          sx={{
            width: '100vw',
            maxWidth: '100%',
            margin: 0,
            px: 0,
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: { xs: 'auto', md: '80vh' },
          }}
        >
          {/* First Row: Animation (00) and Story Content (01) */}
       <Box
  sx={{
    display: "flex",
    justifyContent: "space-around", // centers the pair
    alignItems: "center",
    // gap: { xs: 4, md: 8 }, // spacing between animation & content
    flexWrap: { xs: "wrap", md: "nowrap" }, // stack on mobile, side by side on desktop
    minHeight: { xs: 220, md: 400 },
    width: "100%",

    // px: { xs: 2, md: 6 }, // padding around
    // backgroundColor: "red",
  }}
>
  {/* Left Side (Lottie animation) */}
  <Fade in={inView} timeout={1000}>
    <Box
      sx={{
        // width: { xs: 400, sm: 280, md: 340 },
        // height: { xs: 200, sm: 280, md: 340 },
        width : '50%',
        // height : '100%',
        // borderRadius: "50%",
        // boxShadow: "0 8px 32px rgba(24,77,54,0.10)",
        // background: `linear-gradient(135deg, ${alpha(
        //   PALETTE.sky,
        //   0.10
        // )} 0%, ${alpha(PALETTE.sun, 0.10)} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0, // prevents shrinking
        // backgroundColor: "yellow"
      }}
    >
      <Lottie
        role="img"
        aria-label="Travel animation"
        animationData={travelLottie}
        loop
        style={{
          width: "80%",
          height: "80%",
        }}
      />
    </Box>
  </Fade>

  {/* Right Side (StoryCard) */}
  <Grow in={inView} timeout={900}>
    <StoryCard
      sx={{
        minHeight: { md: 220 },
        maxWidth: 480,
        flex: 1,
        mx: "auto",
        boxShadow: "none",
        bgcolor: "transparent",
        border: "2px solid #043b2d"
      }}
    >
      <Stack spacing={2.25}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Avatar sx={{ bgcolor: alpha(PALETTE.sky, 0.18) }}>
            <VerifiedIcon sx={{ color: PALETTE.sky }} />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: PALETTE.deepForestGreen }}
          >
            Our Story
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{ color: PALETTE.charcoal, opacity: 0.93 }}
        >
          Born from a love for slow, sustainable travel, Vibe Tribe Travels began
          guiding small groups across hidden trails and coastal towns. Today, we
          plan bespoke journeys that balance adventure with ease — while
          supporting the communities you visit.
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
  </Grow>
</Box>


          {/* Second Row: Value Cards (10) and Animation (11) */}
          <Box
  sx={{
    display: "flex",
    justifyContent: "space-around", // centers the pair
    alignItems: "center",
    gap: { xs: 4, md: 8 }, // space between cards & globe
    flexWrap: { xs: "wrap", md: "nowrap" }, // stack on mobile, row on desktop
    minHeight: { xs: 220, md: 400 },
    width: "100%",
    px: { xs: 2, md: 6 },
    py: { xs: 4, md: 6 },
  }}
>
  {/* Left Side (Value Cards) */}
  <Stack spacing={3} sx={{ width: "100%", 
    maxWidth: 480,
    border: "2px solid #043b2d",
    padding: "20px" , 
    borderRadius : '5%'
    }}>
    {values.map((v, idx) => (
      <Zoom
        in={inView}
        style={{ transitionDelay: `${200 + idx * 80}ms` }}
        key={v.title}
      >
        <ValueCard
          className="about-card"
          sx={{ position: "relative", overflow: "visible", height: "100%" }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "100%",
            }}
          >
            <Box sx={{ width: 60, height: 60, mx: 2 }}>
              <Lottie
                animationData={valueLotties[idx]}
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Stack
              spacing={0.5}
              alignItems="flex-start"
              textAlign="left"
              sx={{ width: "100%" }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, color: PALETTE.deepForestGreen }}
              >
                {v.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: PALETTE.charcoal, opacity: 0.92 }}
              >
                {v.desc}
              </Typography>
            </Stack>
          </CardContent>
        </ValueCard>
      </Zoom>
    ))}
  </Stack>

  {/* Right Side (Globe Animation) */}
  <Fade in={inView} timeout={1200}>
    <Box
      sx={{
        width: '50%',
        height: '80%',
        // borderRadius: "50%",
        // boxShadow: "0 8px 32px rgba(255,209,128,0.10)",
        // background: `linear-gradient(135deg, ${alpha(
        //   PALETTE.sun,
        //   0.13
        // )} 0%, ${alpha(PALETTE.moss, 0.10)} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Lottie
        role="img"
        aria-label="Globe animation"
        animationData={globeLottie}
        loop
        style={{
          width: "85%",
          height: "85%",
          minWidth: 100,
          minHeight: 100,
        }}
      />
    </Box>
  </Fade>
</Box>


        </Grid>







        {/* CTA */}
        <CTASection>
          <Grid container alignItems="center" spacing={85}>
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
                    backgroundColor: PALETTE.sky,
                    color: PALETTE.deepForestGreen,
                    px: 3,
                    py: 1.5,
                    borderRadius: 999,
                    fontWeight: 800,
                    boxShadow: `0 6px 18px ${alpha(PALETTE.sky, 0.18)}`,
                    textTransform: 'none',
                    fontSize: 18,
                    '&:hover': { backgroundColor: PALETTE.sun, color: PALETTE.charcoal },
                  }}
                >
                  Plan with an expert
                </Button>
              </Box>
            </Grid>






          </Grid>
        </CTASection>


      </Box>
    </AboutRoot>
  );
};

export default About;

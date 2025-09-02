import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Place as PlaceIcon,
  Public as PublicIcon,
  Terrain as TerrainIcon,
  BeachAccess as BeachAccessIcon,
  Flight as FlightIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import './Destinations.css';

// Brand palette per spec
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

const Root = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: PALETTE.cream,
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
  },
}));

const Backdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background: `radial-gradient(900px 450px at 10% -10%, ${alpha(PALETTE.oceanBlue, 0.12)} 0%, transparent 60%),
               radial-gradient(700px 350px at 90% 0%, ${alpha(PALETTE.sunsetOrange, 0.1)} 0%, transparent 55%),
               radial-gradient(1000px 500px at 50% 120%, ${alpha(PALETTE.palmGreen, 0.1)} 0%, transparent 62%)`,
}));

const AccentBadge = styled(Chip)(() => ({
  background: alpha(PALETTE.palmGreen, 0.12),
  color: PALETTE.palmGreen,
  fontWeight: 800,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
  borderRadius: 999,
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: 20,
  background: PALETTE.white,
  boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
  overflow: 'hidden',
  transition: 'transform 220ms ease, box-shadow 220ms ease',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.02)',
    boxShadow: '0 20px 48px rgba(0,0,0,0.16)',
  },
}));

const Media = styled(CardMedia)(({ theme }) => ({
  height: 220,
  filter: 'saturate(1.05) contrast(1.05)',
}));

const featuredDestinations = [
  {
    title: 'Rajasthan, India',
    image: 'https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/Forts.jpg',  // replace with your actual image host or CDN
    tags: ['Deserts', 'Palaces', 'Culture'],
    blurb: 'The land of royals with majestic forts, desert dunes, and vibrant traditions.',
  },
  {
    title: 'Uttarakhand, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqfxlikEXC9JIZJPaO17LsWKpa5k1-Hg3FQ&s',  // representative of Uttarakhand’s Himalayas
    tags: ['Himalayas', 'Spirituality', 'Adventure'],
    blurb: 'Snow-clad peaks, holy rivers, and adventure hubs nestled in the Himalayas.',
  },
  {
    title: 'Himachal Pradesh, India',
    image: 'https://madtrek.com/wp-content/uploads/2023/08/Best-Places-To-Visit-In-Himachal-Pradesh-In-Summer-1.webp',  // feel free to swap with a relevant source
    tags: ['Mountains', 'Valleys', 'Treks'],
    blurb: 'Serene hill stations, apple orchards, and scenic valleys perfect for trekking.',
  },
  {
    title: 'Kashmir, India',
    image: 'https://www.holidify.com/images/bgImages/KASHMIR.jpg',
    tags: ['Lakes', 'Mountains', 'Paradise'],
    blurb: 'The “Paradise on Earth” with Dal Lake, snow-capped peaks, and tulip gardens.',
  },
  {
    title: 'Sikkim, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8H10eniV8kmRtL4CNrk7SdVaBnK6-hE__lG0xy8hvJcSys2BwqaGGuTgZwBpCOoUHv8&usqp=CAU',  // alpine lake in Sikkim
    tags: ['Monasteries', 'Mount Kanchenjunga', 'Nature'],
    blurb: 'A tranquil blend of Buddhist monasteries, alpine meadows, and the Himalayas.',
  },
];



const Destinations = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Root ref={sectionRef}>
      <Backdrop />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          px: 0,
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
            <AccentBadge label="Featured Destinations" icon={<PlaceIcon />} />
            <Grow in={inView} timeout={700}>
              <Typography variant={isSmDown ? 'h4' : 'h3'} sx={{ fontWeight: 900, color: PALETTE.deepForestGreen }}>
                Find your next escape
              </Typography>
            </Grow>
            <Fade in={inView} timeout={1000}>
              <Typography variant="h6" sx={{ color: PALETTE.charcoal, opacity: 0.9, maxWidth: 820 }}>
                A curated collection spanning beaches, peaks, and timeless cities — chosen for vibe, beauty, and ease.
              </Typography>
            </Fade>
          </Stack>

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justifyContent="center"
            sx={{
              flexWrap: 'wrap',
              overflowX: 'auto',
              width: '100%',
              px: { xs: 2, md: 6 },
            }}
          >
            {featuredDestinations.map((d, i) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                key={d.title}
                sx={{
                  minWidth: 290,
                  maxWidth: 400,
                  flex: '0 0 33.33%',
                  display: 'flex',
                }}
              >
                <Zoom in={inView} style={{ transitionDelay: `${150 + i * 80}ms` }}>
                  <FeatureCard className="dest-card">
                    <Media image={d.image} title={d.title} />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 8, flexGrow: 1 }}>
                      <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: PALETTE.deepForestGreen }}>
                          {d.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: PALETTE.charcoal, opacity: 0.9 }}>
                          {d.blurb}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {d.tags.map((t) => (
                            <Chip key={t} size="small" label={t} sx={{
                              backgroundColor: alpha(PALETTE.oceanBlue, 0.08),
                              color: PALETTE.oceanBlue,
                              fontWeight: 700,
                              borderRadius: 999,
                            }} />
                          ))}
                        </Stack>
                      </Stack>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: PALETTE.oceanBlue,
                            color: PALETTE.white,
                            textTransform: 'none',
                            fontWeight: 800,
                            borderRadius: 999,
                            px: 2,
                            '&:hover': { backgroundColor: PALETTE.sunsetOrange },
                          }}
                          href="/destinations"
                        >
                          Explore
                        </Button>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: PALETTE.palmGreen }}>
                          <PublicIcon fontSize="small" />
                          <TerrainIcon fontSize="small" />
                          <BeachAccessIcon fontSize="small" />
                        </Stack>
                      </Box>
                    </CardContent>
                  </FeatureCard>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Root>
  );
};

export default Destinations;



import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
  Grow,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  ContactPhone as ContactPhoneIcon,
  Flight as FlightIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import './Navbar.css';

// Color system following the requested palette
const COLORS = {
  deepGreen: '#064e3b',
  deepGreenScrolled: '#043b2d',
  cream: '#fdf6e3',
  oceanBlue: '#0077b6',
  sunsetOrange: '#f97316',
  palmGreen: '#2b7a0b',
  white: '#ffffff',
  black: '#000000',
};

// Logo path (place your logo file at public/logo.png or change this path)
const LOGO_SRC = '/logo.png';

// AppBar with deep green background and subtle scroll effect
const StyledAppBar = styled(AppBar)(({ scrolled }) => ({
  background: scrolled ? COLORS.deepGreenScrolled : COLORS.deepGreen,
  color: COLORS.cream,
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
  transition: 'all 300ms ease',
  zIndex: 1200,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.5, 0),
  },
}));

const BrandContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  textDecoration: 'none',
  '&:focus-visible': {
    outline: `3px solid ${alpha(COLORS.oceanBlue, 0.7)}`,
    outlineOffset: 2,
  },
}));

const LogoAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  backgroundColor: COLORS.white,
  boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
  transition: 'transform 250ms ease, box-shadow 250ms ease',
  '& .MuiAvatar-img': {
    objectFit: 'contain',
    transform: 'scale(1.12)',
    padding: theme.spacing(0.75),
  },
  '&:hover': {
    transform: 'scale(1.06)',
    boxShadow: '0 10px 28px rgba(0,0,0,0.22)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 56,
    height: 56,
    '& .MuiAvatar-img': {
      padding: theme.spacing(0.5),
    },
  },
}));

const BrandText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1,
}));

const BrandPrimary = styled(Typography)(({ theme }) => ({
  color: COLORS.cream,
  fontWeight: 800,
  fontSize: '1.5rem',
  letterSpacing: '-0.3px',
  [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
}));

const BrandSecondary = styled(Typography)(({ theme }) => ({
  color: COLORS.cream,
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '0.8px',
  opacity: 0.9,
  [theme.breakpoints.down('sm')]: { fontSize: '0.9rem' },
}));

// Desktop navigation button
const NavButton = styled(Button)(({ theme, active, variantcolor }) => {
  const baseColor = variantcolor === 'secondary' ? COLORS.sunsetOrange : COLORS.oceanBlue;
  return ({
    color: active ? COLORS.black : COLORS.cream,
    backgroundColor: active ? COLORS.white : 'transparent',
    border: active ? `1px solid ${alpha(baseColor, 0.4)}` : '1px solid transparent',
    borderRadius: 24,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 0.5),
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'all 200ms ease',
    '&:hover': {
      backgroundColor: COLORS.white,
      color: COLORS.black,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
      borderColor: alpha(baseColor, 0.45),
    },
    '&:active': {
      backgroundColor: COLORS.white,
      color: COLORS.black,
      transform: 'translateY(0)',
      boxShadow: '0 3px 10px rgba(0,0,0,0.16)',
      borderColor: alpha(baseColor, 0.5),
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha(baseColor, 0.7)}`,
      outlineOffset: 2,
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(1),
      color: active ? baseColor : alpha(baseColor, 0.95),
      transition: 'transform 200ms ease, color 200ms ease',
    },
    '&:hover .MuiButton-startIcon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: baseColor,
    },
  });
});

// Mobile drawer
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: 380,
    background: COLORS.deepGreen,
    color: COLORS.cream,
    borderLeft: '1px solid rgba(255,255,255,0.08)',
  },
}));

const MobileHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 2, 1),
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MobileBrand = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  color: COLORS.cream,
}));

const MobileLogo = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: COLORS.white,
  boxShadow: '0 4px 14px rgba(0,0,0,0.16)',
  '& .MuiAvatar-img': {
    objectFit: 'contain',
    transform: 'scale(1.12)',
    padding: theme.spacing(0.5),
  },
}));

const MobileNavItem = styled(ListItem)(() => ({ padding: 0, margin: 0 }));

const MobileNavButton = styled(ListItemButton)(({ theme, active, variantcolor }) => {
  const baseColor = variantcolor === 'secondary' ? COLORS.sunsetOrange : COLORS.oceanBlue;
  return ({
    padding: theme.spacing(1.5, 2),
    margin: theme.spacing(0.25, 0),
    borderRadius: theme.spacing(1),
    borderLeft: `3px solid ${active ? baseColor : 'transparent'}`,
    backgroundColor: active ? alpha(COLORS.white, 0.95) : 'transparent',
    transition: 'all 200ms ease',
    '&:hover': {
      backgroundColor: alpha(COLORS.white, 0.95),
      transform: 'translateX(8px)',
      borderLeftColor: baseColor,
    },
    '&:active': {
      backgroundColor: alpha(COLORS.white, 0.98),
      transform: 'translateX(4px)',
      borderLeftColor: baseColor,
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha(baseColor, 0.7)}`,
      outlineOffset: 2,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 40,
      color: active ? baseColor : alpha(baseColor, 0.9),
    },
    '& .MuiListItemText-primary': {
      fontWeight: 600,
      fontSize: '1.05rem',
      color: active ? COLORS.black : COLORS.cream,
    },
  });
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 56);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const closeDrawer = () => setMobileOpen(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon />, variant: 'primary' },
    { path: '/about', label: 'About Us', icon: <PeopleIcon />, variant: 'primary' },
    { path: '/destinations', label: 'Destinations', icon: <PublicIcon />, variant: 'primary' },
    { path: '/contact', label: 'Contact Us', icon: <ContactPhoneIcon />, variant: 'secondary' },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MobileHeader>
        <MobileBrand>
          <MobileLogo src={LOGO_SRC} alt="Vibe Tribe Travels logo">
            <FlightIcon />
          </MobileLogo>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Vibe Tribe Travels
          </Typography>
        </MobileBrand>
        <IconButton aria-label="Close menu" onClick={closeDrawer} sx={{ color: COLORS.cream }}>
          <CloseIcon />
        </IconButton>
      </MobileHeader>

      <Divider />

      <List sx={{ flex: 1, py: 1 }}>
        {navItems.map((item, index) => (
          <Grow in key={item.path} style={{ transformOrigin: 'right', transitionDelay: `${index * 80}ms` }}>
            <MobileNavItem>
              <MobileNavButton
                component={Link}
                to={item.path}
                onClick={closeDrawer}
                active={isActive(item.path) ? 1 : 0}
                variantcolor={item.variant}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </MobileNavButton>
            </MobileNavItem>
          </Grow>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'center', opacity: 0.85 }}>
        <Typography variant="body2" color={COLORS.cream}>
          Explore. Dream. Discover.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={isScrolled ? 1 : 0}>
        <Container maxWidth="xl">
          <StyledToolbar>
            <BrandContainer to="/" aria-label="Home">
              <LogoAvatar src={LOGO_SRC} alt="Vibe Tribe Travels logo">
                <FlightIcon sx={{ fontSize: '2rem', color: COLORS.cream }} />
              </LogoAvatar>
              <BrandText>
                <BrandPrimary>Vibe Tribe</BrandPrimary>
                <BrandSecondary>Travels</BrandSecondary>
              </BrandText>
            </BrandContainer>

            {!isMobile && (
              <Box role="navigation" aria-label="Primary" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {navItems.map((item, index) => (
                  <Grow in key={item.path} timeout={600} style={{ transitionDelay: `${index * 90}ms` }}>
                    <Box>
                      <NavButton
                        component={Link}
                        to={item.path}
                        startIcon={item.icon}
                        active={isActive(item.path) ? 1 : 0}
                        variantcolor={item.variant}
                        aria-current={isActive(item.path) ? 'page' : undefined}
                      >
                        {item.label}
                      </NavButton>
                    </Box>
                  </Grow>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                aria-label="Open menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto', color: COLORS.cream }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box' } }}
      >
        {drawer}
      </StyledDrawer>

    </>
  );
};

export default Navbar;



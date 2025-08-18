import React, { useState, useEffect } from 'react';
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
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Grow,
  Divider,
  Container
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  Build as BuildIcon,
  PhotoCamera as PhotoCameraIcon,
  ContactPhone as ContactPhoneIcon,
  Flight as FlightIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import './Navbar.css';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled 
    ? alpha(theme.palette.background.paper, 0.98)
    : alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: scrolled 
    ? '0 10px 30px rgba(0, 0, 0, 0.3)'
    : 'none',
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
  gap: theme.spacing(1.5),
  textDecoration: 'none',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const LogoAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.6)',
  },
  [theme.breakpoints.down('md')]: {
    width: 50,
    height: 50,
  },
  [theme.breakpoints.down('sm')]: {
    width: 45,
    height: 45,
  },
}));

const BrandText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1,
}));

const BrandPrimary = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 800,
  fontSize: '1.6rem',
  letterSpacing: '-0.5px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const BrandSecondary = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 600,
  fontSize: '1.1rem',
  letterSpacing: '1px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
  borderRadius: '25px',
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0, 0.5),
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: active ? `1px solid ${alpha(theme.palette.primary.main, 0.3)}` : '1px solid transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
    transition: 'all 0.3s ease',
  },
  '&:hover .MuiButton-startIcon': {
    transform: 'scale(1.1) rotate(5deg)',
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(0.75, 1.5),
    fontSize: '0.9rem',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: 400,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    backdropFilter: 'blur(20px)',
    borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

const MobileHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2, 1),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MobileBrand = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  color: theme.palette.text.primary,
}));

const MobileLogo = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  margin: 0,
}));

const MobileNavButton = styled(ListItemButton)(({ theme, active }) => ({
  padding: theme.spacing(1.5, 2),
  margin: theme.spacing(0.25, 0),
  borderRadius: theme.spacing(1),
  borderLeft: `3px solid ${active ? theme.palette.primary.main : 'transparent'}`,
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateX(10px)',
    borderLeftColor: theme.palette.primary.main,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 40,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  },
  '& .MuiListItemText-primary': {
    fontWeight: 500,
    fontSize: '1.1rem',
  },
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/about', label: 'About Us', icon: <PeopleIcon /> },
    { path: '/destinations', label: 'Destinations', icon: <PublicIcon /> },
    // { path: '/services', label: 'Services', icon: <BuildIcon /> },
    { path: '/gallery', label: 'Gallery', icon: <PhotoCameraIcon /> },
    { path: '/contact', label: 'Contact', icon: <ContactPhoneIcon /> }
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MobileHeader>
        <MobileBrand>
          <MobileLogo>
            <FlightIcon />
          </MobileLogo>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Vibe Tribe Travels
          </Typography>
        </MobileBrand>
        <IconButton
          onClick={closeDrawer}
          sx={{ color: 'text.primary' }}
        >
          <CloseIcon />
        </IconButton>
      </MobileHeader>
      
      <Divider />
      
      <List sx={{ flex: 1, py: 1 }}>
        {navItems.map((item, index) => (
          <MobileNavItem key={item.path}>
            <MobileNavButton
              component={Link}
              to={item.path}
              onClick={closeDrawer}
              active={isActive(item.path) ? 1 : 0}
              sx={{
                animationDelay: `${index * 0.1}s`,
                animation: 'slideInRight 0.5s ease-out forwards',
                opacity: 0,
                transform: 'translateX(30px)',
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </MobileNavButton>
          </MobileNavItem>
        ))}
      </List>
      
      <Divider />
      
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Follow us on social media
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={isScrolled ? 1 : 0}>
        <Container maxWidth="xl">
          <StyledToolbar>
            {/* Brand/Logo */}
            <BrandContainer to="/" onClick={closeDrawer}>
              <LogoAvatar>
                <FlightIcon sx={{ fontSize: '2.2rem' }} />
              </LogoAvatar>
              <BrandText>
                <BrandPrimary>Vibe Tribe</BrandPrimary>
                <BrandSecondary>Travels</BrandSecondary>
              </BrandText>
            </BrandContainer>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {navItems.map((item, index) => (
                  <Grow
                    key={item.path}
                    in={true}
                    timeout={600}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Box>
                      <NavButton
                        component={Link}
                        to={item.path}
                        startIcon={item.icon}
                        active={isActive(item.path) ? 1 : 0}
                      >
                        {item.label}
                      </NavButton>
                    </Box>
                  </Grow>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Navigation Drawer */}
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </StyledDrawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar; 
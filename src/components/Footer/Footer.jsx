import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Avatar,
  TextField,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Zoom,
  Slide
} from '@mui/material';
import {
  Flight as FlightIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Send as SendIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  color: theme.palette.text.primary,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
    zIndex: 1,
  },
}));

const FooterMain = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.8),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(3, 0),
}));

const BrandSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const LogoAvatar = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.6)',
  },
  [theme.breakpoints.down('md')]: {
    width: 60,
    height: 60,
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 800,
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
}));

const BrandDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  marginBottom: theme.spacing(3),
  fontSize: '0.95rem',
  maxWidth: 400,
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: 50,
  height: 50,
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 45,
    height: 45,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '40px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    '&::after': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontSize: '0.9rem',
  display: 'block',
  padding: theme.spacing(0.5, 0),
  position: 'relative',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(8px)',
  },
  '&::before': {
    content: '"→"',
    position: 'absolute',
    left: '-20px',
    opacity: 0,
    transition: 'all 0.3s ease',
    color: theme.palette.primary.main,
  },
  '&:hover::before': {
    opacity: 1,
    left: '-15px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    '&:hover': {
      transform: 'none',
    },
    '&::before': {
      display: 'none',
    },
  },
}));

const NewsletterSection = styled(Box)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4, 0),
}));

const NewsletterTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1.4rem',
  marginBottom: theme.spacing(1),
}));

const NewsletterDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
}));

const NewsletterForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  maxWidth: 500,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

const NewsletterButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: '#ffffff',
  borderRadius: '25px',
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.secondary,
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const MadeWith = styled(Typography)(({ theme }) => ({
  color: '#ef4444',
  fontWeight: 500,
  fontSize: '0.9rem',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'right',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', url: '#about' },
      { name: 'Our Team', url: '#about' },
      { name: 'Careers', url: '#' },
      { name: 'Press', url: '#' }
    ],
    services: [
      { name: 'Destinations', url: '#destinations' },
      { name: 'Travel Packages', url: '#' },
      { name: 'Custom Tours', url: '#' },
      { name: 'Group Travel', url: '#' }
    ],
    support: [
      { name: 'Help Center', url: '#' },
      { name: 'Contact Us', url: '#contact' },
      { name: 'Travel Insurance', url: '#' },
      { name: 'Emergency Support', url: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' },
      { name: 'GDPR', url: '#' }
    ]
  };

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', url: '#', color: '#1877f2' },
    { icon: <InstagramIcon />, label: 'Instagram', url: '#', color: '#e4405f' },
    { icon: <TwitterIcon />, label: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: <YouTubeIcon />, label: 'YouTube', url: '#', color: '#ff0000' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <FooterContainer component="footer">
      <FooterMain>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} lg={4} md={6}>
              <Fade in={true} timeout={800}>
                <BrandSection>
                  <LogoAvatar>
                    <FlightIcon sx={{ fontSize: '2.2rem' }} />
                  </LogoAvatar>
                  <BrandName variant="h3">
                    Vibe Tribe Travels
                  </BrandName>
                  <BrandDescription variant="body1">
                    Making your travel dreams come true since 2013. We specialize in creating 
                    unforgettable experiences that connect you with the world's most beautiful destinations.
                  </BrandDescription>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <PhoneIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">+1 (555) 123-4567</Typography>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <EmailIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">info@vibetribetravels.com</Typography>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <LocationIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">123 Travel Street, Adventure City</Typography>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <TimeIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</Typography>
                  </ContactInfo>
                  
                  <SocialContainer>
                    {socialLinks.map((social, index) => (
                      <SocialButton
                        key={index}
                        href={social.url}
                        aria-label={social.label}
                        sx={{
                          background: social.color || '#3b82f6',
                          '&:hover': {
                            background: social.color || '#3b82f6',
                            boxShadow: `0 6px 20px ${alpha(social.color || '#3b82f6', 0.6)}`,
                          },
                        }}
                      >
                        {social.icon}
                      </SocialButton>
                    ))}
                  </SocialContainer>
                </BrandSection>
              </Fade>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3} lg={2}>
              <Grow in={true} timeout={1000}>
                <Box>
                  <FooterTitle variant="h6">Company</FooterTitle>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {footerLinks.company.map((link, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <FooterLink href={link.url}>{link.name}</FooterLink>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid item xs={12} md={3} lg={2}>
              <Grow in={true} timeout={1200}>
                <Box>
                  <FooterTitle variant="h6">Services</FooterTitle>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {footerLinks.services.map((link, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <FooterLink href={link.url}>{link.name}</FooterLink>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid item xs={12} md={3} lg={2}>
              <Grow in={true} timeout={1400}>
                <Box>
                  <FooterTitle variant="h6">Support</FooterTitle>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {footerLinks.support.map((link, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <FooterLink href={link.url}>{link.name}</FooterLink>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid item xs={12} md={3} lg={2}>
              <Grow in={true} timeout={1600}>
                <Box>
                  <FooterTitle variant="h6">Legal</FooterTitle>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {footerLinks.legal.map((link, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <FooterLink href={link.url}>{link.name}</FooterLink>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </FooterMain>

      {/* Newsletter Section */}
      {/* <NewsletterSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Slide direction="up" in={true} timeout={800}>
                <Box>
                  <NewsletterTitle variant="h5">
                    Stay Updated
                  </NewsletterTitle>
                  <NewsletterDescription variant="body1">
                    Subscribe to our newsletter for exclusive travel deals, destination guides, and insider tips.
                  </NewsletterDescription>
                </Box>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1000}>
                <Box component="form" onSubmit={handleNewsletterSubmit}>
                  <NewsletterForm>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'white',
                          borderRadius: '25px',
                          '& fieldset': {
                            border: 'none',
                          },
                        },
                      }}
                    />
                    <NewsletterButton
                      type="submit"
                      variant="contained"
                      startIcon={<SendIcon />}
                    >
                      Subscribe
                    </NewsletterButton>
                  </NewsletterForm>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </NewsletterSection> */}

      {/* Footer Bottom */}
      <FooterBottom>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Copyright variant="body2">
                &copy; {currentYear} Vibe Tribe Travels. All rights reserved.
              </Copyright>
            </Grid>
            <Grid item xs={12} md={6}>
              <MadeWith variant="body2">
                Made with ❤️ for travelers worldwide
              </MadeWith>
            </Grid>
          </Grid>
        </Container>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 
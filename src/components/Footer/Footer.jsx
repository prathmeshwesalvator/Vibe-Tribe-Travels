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
  WhatsApp as WhatsappIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Send as SendIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import './Footer.css';

// Brand palette
const PALETTE = {
  deepForestGreen: "#0B3D2E",
  cream: "#FDF6EC",
  oceanBlue: "#1D7A85",
  sunsetOrange: "#F4A261",
  palmGreen: "#2E8B57",
  charcoal: "#333333",
  lightGray: "#F1F1F1",
  white: "#FFFFFF",
};

const FooterContainer = styled(Box)(({ theme }) => ({
  background: PALETTE.deepForestGreen,
  color: PALETTE.cream,
  position: 'relative',
  overflow: 'hidden',
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
  background: PALETTE.deepForestGreen,
  borderTop: `1px solid ${alpha(PALETTE.cream, 0.08)}`,
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
  background: `linear-gradient(135deg, ${PALETTE.oceanBlue} 0%, ${PALETTE.sunsetOrange} 100%)`,
  boxShadow: '0 4px 20px rgba(29, 122, 133, 0.18)',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 8px 30px rgba(29, 122, 133, 0.28)',
  },
  [theme.breakpoints.down('md')]: {
    width: 60,
    height: 60,
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${PALETTE.oceanBlue} 0%, ${PALETTE.sunsetOrange} 100%)`,
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
  color: alpha(PALETTE.cream, 0.85),
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
  color: PALETTE.white,
  background: PALETTE.oceanBlue,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: PALETTE.sunsetOrange,
    color: PALETTE.white,
    transform: 'scale(1.1) rotate(5deg)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 45,
    height: 45,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color: PALETTE.cream,
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
    background: `linear-gradient(90deg, ${PALETTE.oceanBlue}, ${PALETTE.sunsetOrange})`,
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
  color: alpha(PALETTE.cream, 0.85),
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontSize: '0.95rem',
  display: 'block',
  padding: theme.spacing(0.5, 0),
  position: 'relative',
  '&:hover': {
    color: PALETTE.sunsetOrange,
    transform: 'translateX(8px)',
  },
  '&::before': {
    content: '"→"',
    position: 'absolute',
    left: '-20px',
    opacity: 0,
    transition: 'all 0.3s ease',
    color: PALETTE.sunsetOrange,
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

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  color: alpha(PALETTE.cream, 0.85),
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: PALETTE.sunsetOrange,
  display: 'flex',
  alignItems: 'center',
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: alpha(PALETTE.cream, 0.7),
  fontSize: '0.9rem',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const MadeWith = styled(Typography)(({ theme }) => ({
  color: PALETTE.sunsetOrange,
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
      { name: 'About Us', url: '/about' },
      // { name: 'Our Team', url: '#about' },
      // { name: 'Careers', url: '#' },
      // { name: 'Press', url: '#' }
    ],
    services: [
      { name: 'Destinations', url: '/destinations' },
      { name: 'Travel Packages', url: '/destinations' },
      { name: 'Custom Tours', url: '/contact' },
      { name: 'Group Travel', url: '/contact' }
    ],
    support: [
      // { name: 'Help Center', url: '#' },
      { name: 'Contact Us', url: '/contact' },
      // { name: 'Travel Insurance', url: '#' },
      // { name: 'Emergency Support', url: '#' }
    ],
    // legal: [
    //   { name: 'Privacy Policy', url: '#' },
    //   { name: 'Terms of Service', url: '/terms-conditions' },
    //   { name: 'Cookie Policy', url: '#' },
    //   { name: 'GDPR', url: '#' }
    // ]
  };

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', url: 'https://www.facebook.com/share/175n6prqEt/', color: '#1877f2' },
    { icon: <InstagramIcon />, label: 'Instagram', url: 'https://www.instagram.com/vibetribetravels?igsh=MWM5cXZ6cGExenJmMA==', color: '#e4405f' },
    { icon: <WhatsappIcon />, label: 'Whatsapp', url: 'https://wa.me/919309898602', color: '#25D366' },
    // { icon: <LinkedInIcon />, label: 'LinkedIn', url: '#', color: '#0077b5' },
    // { icon: <YouTubeIcon />, label: 'YouTube', url: '#', color: '#ff0000' }
  ];

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
                    <FlightIcon sx={{ fontSize: '2.2rem', color: PALETTE.white }} />
                  </LogoAvatar>
                  <BrandName variant="h3">
                    Vibe Tribe Travels
                  </BrandName>
                  <BrandDescription variant="body1">
                    Making your travel dreams come true. We specialize in creating 
                    unforgettable experiences that connect you with the world's most beautiful destinations.
                  </BrandDescription>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <PhoneIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">+91 9309898602 / +91 8080674676</Typography>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <EmailIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">info.vibetribetravels@gmail.com</Typography>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <ContactIcon>
                      <LocationIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">Ambernath , Maharashtra , India</Typography>
                  </ContactInfo>
{/*                   
                  <ContactInfo>
                    <ContactIcon>
                      <TimeIcon fontSize="small" />
                    </ContactIcon>
                    <Typography variant="body2">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</Typography>
                  </ContactInfo> */}
                  
                  <SocialContainer>
                    {socialLinks.map((social, index) => (
                      <SocialButton
                        key={index}
                        href={social.url}
                        aria-label={social.label}
                        sx={{
                          background: social.color || PALETTE.oceanBlue,
                          '&:hover': {
                            background: PALETTE.sunsetOrange,
                            color: PALETTE.white,
                            boxShadow: `0 6px 20px ${alpha(PALETTE.sunsetOrange, 0.4)}`,
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

            {/* <Grid item xs={12} md={3} lg={2}>
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
            </Grid> */}


                              {/* --- Add Google Map Embed Below --- */}
               <Box>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15072.933005105995!2d73.193951!3d19.185012000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7938359bbd3a5%3A0x185ca7bca88f0c9!2sAmbernath%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1755800947694!5m2!1sen!2sus" 
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps - Ambernath, Maharashtra, India"
  />
</Box>
                  {/* --- End Google Map Embed --- */}



          </Grid>
        </Container>
      </FooterMain>

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
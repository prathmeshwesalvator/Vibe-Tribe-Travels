import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Chip,
  alpha,
  TextField,
  InputAdornment,
  AppBar,
  Toolbar,
  Button,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExpandMore,
  Receipt,
  Cancel,
  Description,
  Security,
  Hotel,
  DirectionsBus,
  Flight,
  Gavel,
  Email,
  Build,
  Person,
  Search,
  Close,
  Menu,
  ArrowUpward,
  Link as LinkIcon
} from '@mui/icons-material';

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #FDF6EC 0%, #f8efe2 100%)',
  padding: theme.spacing(4, 0),
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(4),
  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)',
  background: 'white',
  marginTop: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #0B3D2E 0%, #1D7A85 100%)',
  }
}));

const StyledAccordion = styled(Accordion)(({ theme, highlighted }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '12px !important',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
  border: `1px solid ${alpha('#1D7A85', highlighted ? 0.5 : 0.1)}`,
  transition: 'all 0.3s ease',
  '&:before': {
    display: 'none',
  },
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    borderColor: alpha('#1D7A85', 0.3),
  },
}));

const SectionIconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  backgroundColor: alpha('#1D7A85', 0.1),
  color: '#1D7A85',
  flexShrink: 0
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 80,
  zIndex: 10,
  backgroundColor: 'white',
  padding: theme.spacing(2, 0),
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${alpha('#000', 0.1)}`
}));

const QuickNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#0B3D2E',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  marginBottom: theme.spacing(3),
}));

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TermsAndConditionsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState('panel1');
  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setActiveSection(panel);
    if (!isMobile) {
      const element = document.getElementById(panel);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Terms data from the PDF
  const termsData = [
    {
      id: 'panel1',
      icon: <Receipt />,
      title: 'Booking & Payment',
      content: [
        'A minimum deposit of 50% of the total package cost is required at the time of booking to confirm your reservation.',
        'The balance must be paid no later than 10 days prior to departure.',
        'In case of last-minute bookings (within 7 days), full payment is required upfront.'
      ]
    },
    {
      id: 'panel2',
      icon: <Cancel />,
      title: 'Cancellation Policy',
      content: [
        '30 days or more before departure: 90% refund',
        '15–29 days before departure: 50% refund',
        'Less than 15 days: No refund',
        'In case of "No Show" or same-day cancellation, 100% charges apply.',
        'Refunds (if applicable) will be processed within 15 working days after receiving the cancellation request.'
      ]
    },
    {
      id: 'panel3',
      icon: <Description />,
      title: 'Trip Alterations & Cancellations by the Company',
      content: [
        'Vibe Tribe Travels reserves the right to modify or cancel any part of the trip due to unforeseen circumstances such as weather, government restrictions, operational reasons, or low participation.',
        'In such cases, a full/partial refund or alternative travel date/package will be offered.'
      ]
    },
    {
      id: 'panel4',
      icon: <Person />,
      title: 'Travel Documents & Identification',
      content: [
        'Passengers must carry valid ID proof (Aadhaar, Passport, or Voter ID) during travel.',
        'For international travel, a valid passport and visa are mandatory.',
        'The company is not responsible for any travel issues caused by incomplete or incorrect documentation.'
      ]
    },
    {
      id: 'panel5',
      icon: <Security />,
      title: 'Health & Safety',
      content: [
        'Travelers must ensure they are medically fit for travel.',
        'Any medical conditions or dietary restrictions must be informed in advance.',
        'All safety instructions and protocols must be followed during treks, adventure activities, or wildlife visits.'
      ]
    },
    {
      id: 'panel6',
      icon: <Hotel />,
      title: 'Accommodation & Transportation',
      content: [
        'Hotel check-in: 1400 hrs | Check-out: 1100 hrs (as per hotel policy).',
        'Room sharing (double/triple) is based on the chosen package.',
        'Vehicles will be provided as per group size (Sedan/SUV/Tempo Traveller/Mini Bus).',
        'Delays due to traffic, weather, or mechanical issues are not the company\'s responsibility.'
      ]
    },
    {
      id: 'panel7',
      icon: <Flight />,
      title: 'Railway & Flight Tickets',
      content: [
        'Vibe Tribe Travels will assist in booking train and flight tickets if included in the package.',
        'However, the company is not responsible for non-confirmation of train tickets or any changes, delays, or cancellations in flight schedules made by the airlines.',
        'Any additional cost arising due to such changes must be borne by the customer.'
      ]
    },
    {
      id: 'panel8',
      icon: <Security />,
      title: 'Liability',
      content: [
        'The company is not liable for injury, loss, or damage to personal belongings.',
        'Vibe Tribe Travels is not responsible for delays, losses, or changes due to force majeure events such as natural calamities, strikes, or political unrest.'
      ]
    },
    {
      id: 'panel9',
      icon: <Person />,
      title: 'Behavior & Conduct',
      content: [
        'Travelers are expected to behave respectfully and follow local culture, customs, and rules.',
        'Disruptive behavior may lead to removal from the tour without any refund.',
        'Timeliness for all activities is mandatory.'
      ]
    },
    {
      id: 'panel10',
      icon: <Description />,
      title: 'Images & Testimonials',
      content: [
        'Tour photographs/videos may be used for promotional purposes.',
        'If you do not wish to be featured, please inform us in writing before the tour begins.'
      ]
    },
    {
      id: 'panel11',
      icon: <Gavel />,
      title: 'Dispute Resolution',
      content: [
        'All disputes will be subject to the jurisdiction of Mumbai, Maharashtra only.'
      ]
    },
    {
      id: 'panel12',
      icon: <Email />,
      title: 'Communication',
      content: [
        'All official communication will be through email, WhatsApp, or phone.',
        'It is the customer\'s responsibility to stay updated and respond promptly.'
      ]
    },
    {
      id: 'panel13',
      icon: <Build />,
      title: 'Custom Tours & Add-ons',
      content: [
        'Customized packages will be priced based on selected services and inclusions.',
        'Post-confirmation changes may incur additional charges.'
      ]
    }
  ];

  // Filter terms based on search
  const filteredTerms = useMemo(() => {
    if (!searchTerm) return termsData;
    
    return termsData.filter(term => {
      const termContent = term.content.join(' ').toLowerCase();
      return (
        term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        termContent.includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm, termsData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleSectionClick = (panelId) => {
    setExpanded(panelId);
    setActiveSection(panelId);
    const element = document.getElementById(panelId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip 
              label="Legal Documentation" 
              sx={{ 
                backgroundColor: alpha('#1D7A85', 0.1), 
                color: '#1D7A85', 
                fontWeight: 600, 
                mb: 2,
                px: 2,
                py: 2
              }} 
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                color: "#0B3D2E",
                background: "linear-gradient(135deg, #0B3D2E 0%, #1D7A85 100%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography variant="h6" sx={{ color: '#333', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              These Terms & Conditions apply to all bookings made with Vibe Tribe Travels, whether online, in person, via phone, or any other mode. By booking a tour or service, you agree to these terms.
            </Typography>
          </Box>
        </motion.div>

        <ContentPaper>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1" sx={{ color: '#333', fontStyle: 'italic' }}>
              Last updated: August 25, 2025
            </Typography>
            
            {!isMobile && (
              <Button 
                variant="outlined" 
                startIcon={<Menu />}
                onClick={toggleDrawer(true)}
                sx={{ 
                  borderColor: alpha('#1D7A85', 0.3),
                  color: '#1D7A85',
                  '&:hover': {
                    borderColor: '#1D7A85',
                    backgroundColor: alpha('#1D7A85', 0.05)
                  }
                }}
              >
                Quick Navigation
              </Button>
            )}
          </Box>
          
          <Divider sx={{ mb: 4 }} />
          
          <SearchContainer>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search terms & conditions..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton onClick={clearSearch} size="small">
                      <Close />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: alpha('#FDF6EC', 0.5)
                }
              }}
            />
            
            {searchTerm && (
              <Typography variant="body2" sx={{ mt: 1, color: '#1D7A85' }}>
                Found {filteredTerms.length} result{filteredTerms.length !== 1 ? 's' : ''} for "{searchTerm}"
              </Typography>
            )}
          </SearchContainer>
          
          {filteredTerms.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
                No results found for "{searchTerm}"
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Try different keywords or browse all sections using the quick navigation.
              </Typography>
            </Box>
          ) : (
            filteredTerms.map((term, index) => (
              <motion.div
                key={term.id}
                id={term.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.05 }}
              >
                <StyledAccordion 
                  expanded={expanded === term.id} 
                  onChange={handleChange(term.id)}
                  highlighted={searchTerm && term.title.toLowerCase().includes(searchTerm.toLowerCase())}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      backgroundColor: expanded === term.id ? alpha('#1D7A85', 0.05) : 'transparent',
                      padding: theme.spacing(2, 3),
                      minHeight: '72px !important',
                      '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                        margin: '12px 0 !important'
                      }
                    }}
                  >
                    <SectionIconWrapper>
                      {term.icon}
                    </SectionIconWrapper>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: '#0B3D2E' }}>
                      {term.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: theme.spacing(3) }}>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {term.content.map((item, i) => (
                        <Typography 
                          component="li" 
                          variant="body1" 
                          key={i}
                          sx={{ 
                            color: '#333', 
                            mb: 1.5, 
                            lineHeight: 1.6,
                            '&:last-child': { mb: 0 }
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </AccordionDetails>
                </StyledAccordion>
              </motion.div>
            ))
          )}
          
          <Box sx={{ mt: 6, p: 3, backgroundColor: alpha('#0B3D2E', 0.03), borderRadius: '12px' }}>
            <Typography variant="body1" sx={{ color: '#0B3D2E', fontWeight: 500, textAlign: 'center' }}>
              For any queries regarding these Terms & Conditions, please contact us at{' '}
              <Box component="span" sx={{ color: '#1D7A85', fontWeight: 600 }}>
                info@vibetribetravels.com
              </Box>
            </Typography>
          </Box>
        </ContentPaper>
        
        {/* Quick Navigation Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: isMobile ? '100%' : 360,
              padding: 2,
              borderRadius: '12px 0 0 12px'
            }
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: '#0B3D2E', fontWeight: 600 }}>
              Quick Navigation
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {termsData.map((term) => (
              <ListItem 
                button 
                key={term.id}
                onClick={() => handleSectionClick(term.id)}
                selected={activeSection === term.id}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: alpha('#1D7A85', 0.1),
                    '&:hover': {
                      backgroundColor: alpha('#1D7A85', 0.2),
                    },
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#1D7A85' }}>
                  {term.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={term.title} 
                  primaryTypographyProps={{
                    fontWeight: activeSection === term.id ? 600 : 400,
                    color: activeSection === term.id ? '#0B3D2E' : '#333'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        
        {/* Floating Action Button for mobile navigation */}
        {isMobile && (
          <Fab
            color="primary"
            aria-label="quick navigation"
            onClick={toggleDrawer(true)}
            sx={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              backgroundColor: '#1D7A85',
              '&:hover': {
                backgroundColor: '#0B3D2E',
              }
            }}
          >
            <Menu />
          </Fab>
        )}
        
        {/* Scroll to top button */}
        <Fab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: isMobile ? 80 : 16,
            left: 16,
            backgroundColor: '#0B3D2E',
            '&:hover': {
              backgroundColor: '#1D7A85',
            }
          }}
        >
          <ArrowUpward />
        </Fab>
      </Container>
    </PageContainer>
  );
};

export default TermsAndConditionsPage;
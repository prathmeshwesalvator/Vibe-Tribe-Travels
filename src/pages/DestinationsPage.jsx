// DestinationsPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  Box,
  Chip,
  IconButton,
  Fade,
  Zoom,
  Slide,
  Rating,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  Fab
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LocationOn,
  Favorite,
  FavoriteBorder,
  Share,
  ExpandMore,
  Search,
  FilterList,
  LocalOffer
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './DestinationsPage.css';

// Create theme with custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B3D2E', // Deep Forest Green
      light: '#0e513e',
      dark: '#082a20',
    },
    secondary: {
      main: '#1D7A85', // Ocean Blue
      light: '#2495a3',
      dark: '#14646d',
    },
    background: {
      default: '#FDF6EC', // Beige/Cream
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#333333', // Charcoal Gray
      secondary: '#1D7A85', // Ocean Blue
    },
    info: {
      main: '#2E8B57', // Palm Tree Green
      light: '#38a56b',
      dark: '#267449',
    },
    warning: {
      main: '#F4A261', // Sunset Orange
      light: '#f6b381',
      dark: '#d88a4a',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Sample destinations data
const destinations = [
  {
    id: 1,
    name: 'Bali Tropical Paradise',
    location: 'Indonesia',
    description: 'Experience the perfect blend of culture, beaches, and nightlife in the Island of Gods.',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 142,
    featured: true,
    tags: ['Beach', 'Cultural', 'Luxury'],
    duration: '7 days',
    discount: '15% OFF'
  },
  {
    id: 2,
    name: 'Santorini Sunset Views',
    location: 'Greece',
    description: 'White-washed buildings and blue domes overlooking the Aegean Sea create a magical setting.',
    price: '$1,899',
    originalPrice: '$2,199',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 218,
    featured: true,
    tags: ['Romantic', 'Luxury', 'Historic'],
    duration: '5 days'
  },
  {
    id: 3,
    name: 'Swiss Alpine Adventure',
    location: 'Switzerland',
    description: 'Majestic mountains, crystal-clear lakes, and charming villages await in the heart of the Alps.',
    price: '$2,199',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 89,
    featured: false,
    tags: ['Adventure', 'Mountains', 'Luxury'],
    duration: '10 days',
    discount: '10% OFF'
  },
  {
    id: 4,
    name: 'Japanese Cultural Journey',
    location: 'Japan',
    description: 'From ancient temples to futuristic cities, experience the unique contrast of traditional and modern Japan.',
    price: '$2,499',
    originalPrice: '$2,899',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 176,
    featured: true,
    tags: ['Cultural', 'Historic', 'Food'],
    duration: '12 days'
  },
  {
    id: 5,
    name: 'Safari Wilderness Experience',
    location: 'Kenya',
    description: 'Witness the great migration and incredible wildlife in their natural habitat.',
    price: '$3,199',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 124,
    featured: false,
    tags: ['Adventure', 'Wildlife', 'Luxury'],
    duration: '8 days'
  },
  {
    id: 6,
    name: 'New York City Explorer',
    location: 'USA',
    description: 'The city that never sleeps offers endless entertainment, dining, and cultural experiences.',
    price: '$1,599',
    originalPrice: '$1,899',
    image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviews: 95,
    featured: false,
    tags: ['Urban', 'Shopping', 'Food'],
    duration: '6 days',
    discount: 'Early Bird'
  },
  {
    id: 7,
    name: 'Thai Island Hopping',
    location: 'Thailand',
    description: 'Crystal clear waters, white sandy beaches, and vibrant nightlife await in the beautiful islands of Thailand.',
    price: '$1,499',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 201,
    featured: false,
    tags: ['Beach', 'Island', 'Adventure'],
    duration: '9 days'
  },
  {
    id: 8,
    name: 'Italian Renaissance Tour',
    location: 'Italy',
    description: 'Explore the art, architecture, and cuisine of Italy\'s most beautiful cities from Rome to Florence.',
    price: '$2,299',
    originalPrice: '$2,599',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 189,
    featured: true,
    tags: ['Cultural', 'Historic', 'Food'],
    duration: '10 days'
  },
];

// Animation for floating elements
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Scroll animation component
function ScrollAnimation({ children, threshold = 0.1, ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref}>
      <Fade in={isVisible} timeout={1000}>
        {children}
      </Fade>
    </div>
  );
}

// Main Destinations Page Component
const DestinationsPage = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [otherDestinations, setOtherDestinations] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [likedCards, setLikedCards] = useState({});

  useEffect(() => {
    // Filter featured destinations
    const featured = destinations.filter(dest => dest.featured);
    const others = destinations.filter(dest => !dest.featured);
    
    setFeaturedDestinations(featured);
    setOtherDestinations(others);
  }, []);

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderPriceSection = (destination) => {
    if (destination.originalPrice) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 'bold' }}>
            {destination.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            {destination.originalPrice}
          </Typography>
          {destination.discount && (
            <Chip 
              label={destination.discount} 
              size="small" 
              sx={{ 
                backgroundColor: 'warning.main', 
                color: 'white', 
                fontSize: '0.7rem',
                height: '20px'
              }} 
            />
          )}
        </Box>
      );
    }
    
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 'bold' }}>
          {destination.price}
        </Typography>
        {destination.discount && (
          <Chip 
            label={destination.discount} 
            size="small" 
            sx={{ 
              backgroundColor: 'warning.main', 
              color: 'white', 
              fontSize: '0.7rem',
              height: '20px'
            }} 
          />
        )}
      </Box>
    );
  };

  const renderDestinationCard = (destination, isFeatured = false) => (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 24px rgba(11, 61, 46, 0.15)',
        }
      }}
    >
      <Box sx={{ position: 'relative', height: isFeatured ? 240 : 200, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="100%"
          image={destination.image}
          alt={destination.name}
          sx={{ 
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
        <Box sx={{ 
          position: 'absolute', 
          top: 12, 
          right: 12, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%'
        }}>
          <IconButton 
            onClick={() => toggleLike(destination.id)}
            sx={{ color: likedCards[destination.id] ? 'secondary.main' : 'text.secondary' }}
          >
            {likedCards[destination.id] ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
        
        {isFeatured && (
          <Chip 
            label="Featured" 
            sx={{ 
              position: 'absolute', 
              top: 12, 
              left: 12, 
              backgroundColor: 'warning.main', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '0.75rem'
            }} 
          />
        )}
        
        {destination.discount && !destination.originalPrice && (
          <Chip 
            label={destination.discount} 
            sx={{ 
              position: 'absolute', 
              bottom: 12, 
              left: 12, 
              backgroundColor: 'info.main', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '0.75rem'
            }} 
          />
        )}
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Typography variant={isFeatured ? "h6" : "subtitle1"} component="h3" color="primary.main" sx={{ 
            fontWeight: 'bold', 
            lineHeight: 1.2,
            pr: 1,
            flex: 1
          }}>
            {destination.name}
          </Typography>
          {renderPriceSection(destination)}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          <LocationOn color="info" sx={{ fontSize: '1rem', mr: 0.5 }} />
          <Typography variant="body2" color="text.primary">
            {destination.location}
          </Typography>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Rating 
              value={destination.rating} 
              readOnly 
              size="small" 
              precision={0.1}
              sx={{ color: 'warning.main', mr: 0.5 }} 
            />
            <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.8rem' }}>
              ({destination.reviews})
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.primary" sx={{ 
          mb: 2, 
          fontSize: '0.9rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flexGrow: 1
        }}>
          {destination.description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Chip 
            icon={<LocalOffer />}
            label={destination.duration}
            size="small"
            variant="outlined"
            sx={{ 
              color: 'info.main', 
              borderColor: 'info.main',
              fontSize: '0.7rem'
            }} 
          />
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {destination.tags.slice(0, 2).map((tag, i) => (
              <Chip 
                key={i} 
                label={tag} 
                size="small" 
                sx={{ 
                  backgroundColor: 'info.main', 
                  color: 'white', 
                  fontSize: '0.7rem',
                  height: '22px'
                }} 
              />
            ))}
            {destination.tags.length > 2 && (
              <Chip 
                label={`+${destination.tags.length - 2}`} 
                size="small" 
                sx={{ 
                  backgroundColor: 'primary.light', 
                  color: 'white', 
                  fontSize: '0.7rem',
                  height: '22px'
                }} 
              />
            )}
          </Box>
        </Box>
      </CardContent>
      
      <CardActions sx={{ p: 2.5, pt: 0, mt: 'auto' }}>
        <Button 
          variant="contained" 
          fullWidth
          color="secondary"
          sx={{ 
            borderRadius: 2,
            py: 1,
            fontWeight: 'bold'
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="sticky" sx={{ backgroundColor: 'primary.main', py: 1, boxShadow: '0 4px 12px rgba(11, 61, 46, 0.1)' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Wanderlust
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit" sx={{ mx: 1, fontWeight: '500' }}>Home</Button>
              <Button color="inherit" sx={{ mx: 1, fontWeight: '500' }}>Destinations</Button>
              <Button color="inherit" sx={{ mx: 1, fontWeight: '500' }}>Packages</Button>
              <Button color="inherit" sx={{ mx: 1, fontWeight: '500' }}>About</Button>
              <Button color="inherit" sx={{ mx: 1, fontWeight: '500' }}>Contact</Button>
            </Box>
            <IconButton 
              color="inherit" 
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          <Box sx={{ textAlign: 'center', py: 2, backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Wanderlust
            </Typography>
          </Box>
          <Divider />
          <List>
            {['Home', 'Destinations', 'Packages', 'About', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Hero Section */}
        <Box 
          sx={{ 
            height: '100vh', 
            background: 'linear-gradient(rgba(11, 61, 46, 0.7), rgba(11, 61, 46, 0.5)), url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            px: 2,
            position: 'relative'
          }}
        >
          <Slide in={true} direction="down" timeout={1000}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Discover Your Next Journey
            </Typography>
          </Slide>
          <Fade in={true} timeout={2000}>
            <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4, maxWidth: '600px', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              Explore the world's most breathtaking destinations with our curated travel experiences
            </Typography>
          </Fade>
          <Zoom in={true} timeout={3000}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ 
                borderRadius: '50px', 
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 16px rgba(29, 122, 133, 0.3)'
              }}
            >
              Explore Destinations
            </Button>
          </Zoom>
          <IconButton 
            color="inherit" 
            sx={{ 
              position: 'absolute', 
              bottom: '40px', 
              animation: `${floatAnimation} 2s ease-in-out infinite`,
            }}
            onClick={scrollToDestinations}
          >
            <ExpandMore sx={{ fontSize: '3rem' }} />
          </IconButton>
        </Box>

        {/* Destinations Section */}
        <Container id="destinations-section" sx={{ py: 8, backgroundColor: 'background.default' }}>
          <ScrollAnimation>
            <Typography variant="h2" component="h2" align="center" gutterBottom color="primary.main" sx={{ mb: 2 }}>
              Featured Destinations
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation>
            <Typography variant="h6" component="p" align="center" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }} color="text.primary">
              Handpicked experiences for the discerning traveler seeking unique and memorable adventures
            </Typography>
          </ScrollAnimation>

          {/* Search and Filter Bar */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}>
            <TextField
              fullWidth
              placeholder="Search destinations..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'background.paper'
                }
              }}
            />
            <Button 
              variant="outlined" 
              startIcon={<FilterList />}
              sx={{ 
                borderRadius: 2,
                minWidth: '120px',
                borderColor: 'primary.main',
                color: 'primary.main'
              }}
            >
              Filters
            </Button>
          </Box>

          <Grid container spacing={3} sx={{ display : 'flex' , alignItems: 'center' , flexWrap: 'wrap'}}>
            {featuredDestinations.map((destination) => (
              <Grid item xs={12} md={6} key={destination.id} sx={{ width: '30%'}}>
                <ScrollAnimation threshold={0.2}>
                  {renderDestinationCard(destination, true)}
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* All Destinations Section */}
        <Container sx={{ py: 8, backgroundColor: 'background.paper' }}>
          <ScrollAnimation>
            <Typography variant="h2" component="h2" align="center" gutterBottom color="primary.main" sx={{ mb: 2 }}>
              Explore Destinations
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation>
            <Typography variant="h6" component="p" align="center" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }} color="text.primary">
              Explore our complete collection of incredible travel experiences around the globe
            </Typography>
          </ScrollAnimation>



          
<Grid 
  container 
  spacing={3} 
  sx={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}
>
  {otherDestinations.map((destination) => (
    <Grid 
      item 
      xs={12} sm={6} md={3} // 4 per row on md+
      key={destination.id} 
      sx={{ display: 'flex' , width :'30%' }}
    >
      <ScrollAnimation 
        threshold={0.2} 
        style={{ width: '100%', height: '380px', display: 'flex' }}
      >
        <Box
          sx={{
            width: '100%',
            height: '380px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderDestinationCard(destination, {
            sx: {
              flex: 1,
              display: 'flex',
              // flexDirection: 'column',
              height: '100%',
            },
          })}
        </Box>
      </ScrollAnimation>
    </Grid>
  ))}
</Grid>






  

          {/* Load More Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary"
              size="large"
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 'bold'
              }}
            >
              Load More
            </Button>
          </Box>
        </Container>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            py: 12, 
            background: 'linear-gradient(rgba(29, 122, 133, 0.9), rgba(29, 122, 133, 0.8)), url(https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container>
            <ScrollAnimation>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Ready for Your Next Adventure?
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation>
              <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4, maxWidth: '600px', mx: 'auto', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                Sign up today and get 10% off your first booking. Don't miss out on exclusive deals and travel tips.
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  backgroundColor: 'warning.main', 
                  color: 'white',
                  borderRadius: '50px', 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 16px rgba(244, 162, 97, 0.3)',
                  '&:hover': {
                    backgroundColor: '#e59147',
                  }
                }}
              >
                Subscribe Now
              </Button>
            </ScrollAnimation>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 6 }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Wanderlust
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Creating unforgettable travel experiences since 2010. Your journey of a lifetime starts with us.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Destinations
                </Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Europe</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Asia</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>North America</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Africa</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>+1 (555) 123-4567</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>info@wanderlust.com</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>123 Travel Street, Paradise City</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Facebook</Typography>
                  <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Instagram</Typography>
                  <Typography variant="body2" sx={{ display: 'block', mb: 1, opacity: 0.8 }}>Twitter</Typography>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 3 }}>
              <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
                © 2023 Wanderlust Travel Agency. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Floating Action Button */}
        <Fab 
          color="secondary" 
          aria-label="scroll-to-top" 
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            right: 24,
            display: { xs: 'none', sm: 'flex' }
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ExpandMore sx={{ transform: 'rotate(180deg)' }} />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

export default DestinationsPage;
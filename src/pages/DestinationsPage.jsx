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
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  Fab,
  Tabs,
  Tab
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

// Real destinations data from the document
const destinations = [
  // Rajasthan destinations
  // {
  //   id: 1,
  //   name: 'Rajasthan with Ranthambore',
  //   location: 'Rajasthan, India',
  //   description: 'Explore the royal heritage of Rajasthan with a wildlife experience at Ranthambore National Park.',
  //   price: '₹26,999',
  //   image: 'https://i.pinimg.com/736x/2a/2f/4c/2a2f4cdcc4691acd5b4206e9b3f623d4.jpg',
  //   featured: false,
  //   tags: ['Cultural', 'Wildlife', 'Heritage'],
  //   duration: '7N-8D',
  //   itinerary: 'Jaipur - Ranthambore - Pushkar - Udaipur - Jaisalmer - Desert camp - Jodhpur',
  //   category: 'Rajasthan'
  // },
  // {
  //   id: 2,
  //   name: 'Rajasthan with Jawai',
  //   location: 'Rajasthan, India',
  //   description: 'Experience the royal state with a unique leopard safari at Jawai Bandh.',
  //   price: '₹27,999',
  //   image: 'https://i.pinimg.com/736x/fa/01/d8/fa01d8991fc8953feb71750370a7d219.jpg',
  //   featured: false,
  //   tags: ['Cultural', 'Wildlife', 'Leopard Safari'],
  //   duration: '7N-8D',
  //   itinerary: 'Jaipur - Pushkar - Jawai - Udaipur - Jaisalmer - Desert camp - Jodhpur',
  //   category: 'Rajasthan'
  // },
  // {
  //   id: 3,
  //   name: 'Rajasthan Tour',
  //   location: 'Rajasthan, India',
  //   description: 'A comprehensive tour of the Land of Kings covering major cultural destinations.',
  //   price: '₹27,499',
  //   image: 'https://i.pinimg.com/1200x/a1/ef/d0/a1efd09ad63c957bfae453ad60d6aec3.jpg',
  //   featured: false,
  //   tags: ['Cultural', 'Heritage', 'Palaces'],
  //   duration: '7N-8D',
  //   itinerary: 'Jaipur - Pushkar - Jawai - Udaipur - Jaisalmer - Desert camp - Jodhpur',
  //   category: 'Rajasthan'
  // },
  {
    id: 4,
    name: 'Udaipur Getaway',
    location: 'Udaipur, India',
    description: 'Experience the City of Lakes with its beautiful palaces and serene lakes.',
    price: '₹9,999',
    image: 'https://i.pinimg.com/736x/ba/ed/11/baed1196dafd4d39db7f93cceb4a2b8c.jpg',
    featured: false,
    tags: ['Lakes', 'Palaces', 'Romantic'],
    duration: '2N-3D',
    category: 'Rajasthan'
  },
  {
    id: 5,
    name: 'Jaisalmer Desert Experience',
    location: 'Jaisalmer, India',
    description: 'Explore the Golden City and experience the Thar Desert with a camel safari.',
    price: '₹10,999',
    image: 'https://i.pinimg.com/736x/94/a1/d8/94a1d8c09768a3477f8a352e6e1d67c4.jpg',
    featured: false,
    tags: ['Desert', 'Fort', 'Camel Safari'],
    duration: '2N-3D',
    category: 'Rajasthan'
  },
  {
    id: 6,
    name: 'Jodhpur with Jaisalmer',
    location: 'Rajasthan, India',
    description: 'Explore the Blue City and Golden City in one comprehensive tour.',
    price: '₹10,999',
    image: 'https://i.pinimg.com/1200x/c0/09/44/c00944c86e90c247fad06a28db780fc9.jpg',
    featured: false,
    tags: ['Fort', 'Desert', 'Cultural'],
    duration: '2N-3D',
    category: 'Rajasthan'
  },
  
  // Uttarakhand destinations
  {
    id: 7,
    name: 'Uttarakhand with Jim Corbett',
    location: 'Uttarakhand, India',
    description: 'Wildlife and nature experience with a safari in Jim Corbett National Park.',
    price: '₹18,999',
    image: 'https://i.pinimg.com/736x/c2/7b/65/c27b65a8085336763ce044902dd9cc3b.jpg',
    featured: false,
    tags: ['Wildlife', 'Nature', 'Safari'],
    duration: '4N-5D',
    category: 'Uttarakhand'
  },
  {
    id: 8,
    name: 'Rishikesh Retreat',
    location: 'Rishikesh, India',
    description: 'Yoga, meditation and adventure in the Yoga Capital of the World.',
    price: '₹16,999',
    image: 'https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg',
    featured: false,
    tags: ['Yoga', 'Adventure', 'Spiritual'],
    duration: '3N-4D',
    category: 'Uttarakhand'
  },
  {
    id: 9,
    name: 'Nainital with Jim Corbett',
    location: 'Uttarakhand, India',
    description: 'Lake city beauty combined with wildlife adventure.',
    price: '₹14,499',
    image: 'https://i.pinimg.com/1200x/51/e8/b3/51e8b3a9f67ef57c370377c4bcd52371.jpg',
    featured: false,
    tags: ['Lakes', 'Wildlife', 'Hills'],
    duration: '2N-3D',
    category: 'Uttarakhand'
  },
  // {
  //   id: 10,
  //   name: 'Uttarakhand Comprehensive',
  //   location: 'Uttarakhand, India',
  //   description: 'Complete Uttarakhand experience covering hill stations and spiritual sites.',
  //   price: '₹25,499',
  //   image: 'https://i.pinimg.com/1200x/82/80/d1/8280d11b934b2df7257d82c2dd846047.jpg',
  //   featured: false,
  //   tags: ['Hills', 'Spiritual', 'Nature'],
  //   duration: '6N-7D',
  //   itinerary: 'Delhi - 3N Mussoorie - Kanatal - 1N Rishikesh - Haridwar - 2N Nainital - Delhi',
  //   category: 'Uttarakhand'
  // },
  
  // Himachal destinations
  {
    id: 11,
    name: 'Shimla & Manali',
    location: 'Himachal Pradesh, India',
    description: 'Classic hill station tour covering the most popular destinations in Himachal.',
    price: '₹13,999',
    image: 'https://i.pinimg.com/736x/61/6e/69/616e698318a2f017dec714e2c452e05f.jpg',
    featured: false,
    tags: ['Hills', 'Snow', 'Adventure'],
    duration: '4N-5D',
    itinerary: 'Chandigarh - Shimla - Manali - Solang Valley - Atul Tunnel - Sissu Waterfall - Chandigarh',
    category: 'Himachal'
  },
  {
    id: 12,
    name: 'Himachal Explorer',
    location: 'Himachal Pradesh, India',
    description: 'Comprehensive Himachal tour with spiritual visit to Golden Temple.',
    price: '₹18,999',
    image: 'https://i.pinimg.com/736x/7e/43/ad/7e43adc06c1cb8353e385e87afb51a2e.jpg',
    featured: false,
    tags: ['Hills', 'Spiritual', 'Cultural'],
    duration: '6N-7D',
    itinerary: 'Chandigarh - Shimla - Manali - Kasol - Amritsar',
    category: 'Himachal'
  },
  
  // Kashmir destinations
  {
    id: 13,
    name: 'Kashmir with Amritsar',
    location: 'Kashmir & Punjab, India',
    description: 'Paradise on earth combined with spiritual experience at Golden Temple.',
    price: '₹18,999',
    image: 'https://i.pinimg.com/1200x/c9/bc/76/c9bc762fd8ca7dcca92826b2e6356956.jpg',
    featured: false,
    tags: ['Valleys', 'Spiritual', 'Scenic'],
    duration: '7N/8D',
    itinerary: 'Amritsar - Srinagar - Gulmarg - Dhoodpatri - Pahalgam',
    category: 'Kashmir'
  },
  {
    id: 14,
    name: 'Kashmir Paradise',
    location: 'Kashmir, India',
    description: 'Experience the breathtaking beauty of the Kashmir Valley.',
    price: '₹14,999',
    image: 'https://i.pinimg.com/1200x/7f/49/94/7f49944376c7d0c6d013469ca6104f4b.jpg',
    featured: false,
    tags: ['Valleys', 'Lakes', 'Scenic'],
    duration: '5N/6D',
    itinerary: 'Srinagar - Gulmarg - Dhoodpatri - Pahalgam',
    category: 'Kashmir'
  },
  
  // Sikkim destinations
  {
    id: 15,
    name: 'Sikkim Discovery',
    location: 'Sikkim, India',
    description: 'Explore the beautiful hill stations of Gangtok and Darjeeling.',
    price: '₹19,999',
    image: 'https://i.pinimg.com/1200x/34/56/d6/3456d61f91c7c0f87ffd65d63a3d7308.jpg',
    featured: false,
    tags: ['Hills', 'Tea Gardens', 'Buddhist Culture'],
    duration: '5N-6D',
    itinerary: 'Gangtok & Darjeeling',
    category: 'Sikkim'
  },
  
  // Group Tour destinations
  {
    id: 16,
    name: 'Udaipur Group Tour',
    location: 'Udaipur, India',
    description: 'Group tour to the City of Lakes with special discounted rates.',
    price: '₹7,999',
    image: 'https://i.pinimg.com/736x/ee/55/92/ee5592ebf285a29615e19abefd0ca85b.jpg',
    featured: false,
    tags: ['Group', 'Lakes', 'Budget'],
    duration: '2N-3D',
    category: 'Group Tour'
  },
  {
    id: 17,
    name: 'Jaisalmer Group Tour',
    location: 'Jaisalmer, India',
    description: 'Group tour to the Golden City with special discounted rates.',
    price: '₹7,499',
    image: 'https://i.pinimg.com/1200x/d4/a4/ff/d4a4ff4d5d3b662a5611420a262ce41b.jpg',
    featured: false,
    tags: ['Group', 'Desert', 'Budget'],
    duration: '2N-3D',
    category: 'Group Tour'
  },
  {
    id: 18,
    name: 'Jodhpur with Jaisalmer Group Tour',
    location: 'Rajasthan, India',
    description: 'Group tour covering both Jodhpur and Jaisalmer with special rates.',
    price: '₹7,999',
    image: 'https://i.pinimg.com/736x/4f/cf/a3/4fcfa3460c2d6bb4295e2745bcd83984.jpg',
    featured: false,
    tags: ['Group', 'Fort', 'Budget'],
    duration: '2N-3D',
    category: 'Group Tour'
  },
  {
    id: 19,
    name: 'Uttarakhand with Jim Corbett Group Tour',
    location: 'Uttarakhand, India',
    description: 'Group wildlife tour with special discounted rates.',
    price: '₹13,999',
    image: 'https://i.pinimg.com/736x/dd/8a/7a/dd8a7adf881510b6dde457ade09c72d3.jpg',
    featured: false,
    tags: ['Group', 'Wildlife', 'Budget'],
    duration: '4N-5D',
    category: 'Group Tour'
  },
  {
    id: 20,
    name: 'Rishikesh Group Tour',
    location: 'Rishikesh, India',
    description: 'Group spiritual and adventure tour with special rates.',
    price: '₹12,999',
    image: 'https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg',
    featured: false,
    tags: ['Group', 'Yoga', 'Budget'],
    duration: '3N-4D',
    category: 'Group Tour'
  },
  {
    id: 21,
    name: 'Nainital with Jim Corbett Group Tour',
    location: 'Uttarakhand, India',
    description: 'Group tour combining lake city and wildlife with special rates.',
    price: '₹11,499',
    image: 'https://i.pinimg.com/736x/26/89/62/268962ef40b3c86c1da6a7ebd53e1702.jpg',
    featured: false,
    tags: ['Group', 'Lakes', 'Budget'],
    duration: '2N-3D',
    category: 'Group Tour'
  },
  {
    id: 22,
    name: 'Shimla & Manali Group Tour',
    location: 'Himachal Pradesh, India',
    description: 'Group hill station tour with special discounted rates.',
    price: '₹9,999',
    image: 'https://i.pinimg.com/1200x/aa/61/a9/aa61a94a0239dc9cbc509c6b1c593e9f.jpg',
    featured: false,
    tags: ['Group', 'Hills', 'Budget'],
    duration: '4N-5D',
    itinerary: 'Chandigarh - Shimla - Manali - Solang Valley - Atul Tunnel - Sissu Waterfall - Chandigarh',
    category: 'Group Tour'
  },
  {
    id: 23,
    name: 'Himachal Group Tour',
    location: 'Himachal Pradesh, India',
    description: 'Comprehensive group tour of Himachal with spiritual visit.',
    price: '₹12,999',
    image: 'https://i.pinimg.com/736x/1b/78/76/1b7876f89f7875896097c9dedeaa9e4f.jpg',
    featured: false,
    tags: ['Group', 'Hills', 'Budget'],
    duration: '6N-7D',
    itinerary: 'Chandigarh - Shimla - Manali - Kasol - Amritsar',
    category: 'Group Tour'
  },
  {
    id: 24,
    name: 'Kashmir with Amritsar Group Tour',
    location: 'Kashmir & Punjab, India',
    description: 'Group tour to paradise with spiritual experience at special rates.',
    price: '₹15,999',
    image: 'https://i.pinimg.com/736x/d3/25/2c/d3252c30300394dd64113415308c3a07.jpg',
    featured: false,
    tags: ['Group', 'Valleys', 'Budget'],
    duration: '7N/8D',
    category: 'Group Tour'
  },
  {
    id: 25,
    name: 'Kashmir Group Tour',
    location: 'Kashmir, India',
    description: 'Group tour to Kashmir Valley with special discounted rates.',
    price: '₹12,999',
    image: 'https://i.pinimg.com/1200x/5e/bf/47/5ebf478aefc2c2bb712fb9a8d4361259.jpg',
    featured: false,
    tags: ['Group', 'Valleys', 'Budget'],
    duration: '5N/6D',
    category: 'Group Tour'
  }
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [likedCards, setLikedCards] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = activeCategory === 'All' || destination.category === activeCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Rajasthan', 'Uttarakhand', 'Himachal', 'Kashmir', 'Sikkim', 'Group Tour'];

  const renderPriceSection = (destination) => {
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

  const renderDestinationCard = (destination) => (
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
      <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
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
        
        {destination.category === 'Group Tour' && (
          <Chip 
            label="Group Tour" 
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
          <Typography variant="subtitle1" component="h3" color="primary.main" sx={{ 
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
        
        {destination.itinerary && (
          <Typography variant="body2" color="text.secondary" sx={{ 
            mb: 2, 
            fontSize: '0.8rem',
            fontStyle: 'italic',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            Itinerary: {destination.itinerary}
          </Typography>
        )}
        
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
          <a href="/contact">

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
        
          Book Now
        </Button>
                  </a>

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
              Explore India's most breathtaking destinations with our curated travel experiences
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
              Explore All Destinations
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation>
            <Typography variant="h6" component="p" align="center" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }} color="text.primary">
              Explore our complete collection of incredible travel experiences across India
            </Typography>
          </ScrollAnimation>

          {/* Search and Filter Bar */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}>
            <TextField
              fullWidth
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={handleSearchChange}
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
          </Box>

          {/* Category Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={activeCategory} 
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="destination categories"
            >
              {categories.map(category => (
                <Tab key={category} label={category} value={category} />
              ))}
            </Tabs>
          </Box>

   <Box 
  display="flex" 
  flexWrap="wrap" 
  gap={3}  // spacing between cards
>
  {filteredDestinations
    .filter(dest => !dest.featured)
    .map((destination) => (
      <Box
        key={destination.id}
        flex={{ xs: "1 1 100%", sm: "1 1 calc(50% - 24px)", md: "1 1 calc(25% - 24px)" }} 
        display="flex"
      >
        <ScrollAnimation 
          threshold={0.2} 
          style={{ width: "100%", display: "flex", height: 380 }}
        >
          {renderDestinationCard(destination)}
        </ScrollAnimation>
      </Box>
    ))}
</Box>


            {filteredDestinations.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h5" color="text.secondary">
                  No destinations found matching your criteria
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            )}
          

          {/* Load More Button */}
          {filteredDestinations.length > 0 && (
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
          )}
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
            {/* <ScrollAnimation>
              <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4, maxWidth: '600px', mx: 'auto', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                Sign up today and get 10% off your first booking. Don't miss out on exclusive deals and travel tips.
              </Typography>
            </ScrollAnimation> */}
            {/* <ScrollAnimation>
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
            </ScrollAnimation> */}
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

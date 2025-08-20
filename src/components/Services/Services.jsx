import React, { useRef, useEffect } from "react";
import { Box, Container, Typography, Card, CardContent, Chip, Button, Stack, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NatureIcon from "@mui/icons-material/Nature";
import GavelIcon from "@mui/icons-material/Gavel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Services.css";

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

const Root = styled(Box)(({ theme }) => ({
  background: PALETTE.cream,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  borderRadius: 18,
  background: PALETTE.white,
  boxShadow: "0 8px 32px rgba(11,61,46,0.10)",
  transition: "transform 220ms cubic-bezier(.4,2,.6,1), box-shadow 220ms cubic-bezier(.4,2,.6,1)",
  border: `2px solid ${alpha(PALETTE.oceanBlue, 0.08)}`,
  "&:hover": {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: `0 16px 48px ${alpha(PALETTE.oceanBlue, 0.16)}`,
    borderColor: PALETTE.sunsetOrange,
  },
}));

const services = [
  {
    icon: <FlightTakeoffIcon sx={{ color: PALETTE.oceanBlue, fontSize: 38 }} />,
    title: "Custom Itineraries",
    desc: "Personalized trip planning for every traveler—adventure, culture, or relaxation.",
    tag: "Tailored",
    tagColor: PALETTE.oceanBlue,
  },
  {
    icon: <NatureIcon sx={{ color: PALETTE.palmGreen, fontSize: 38 }} />,
    title: "Eco-Friendly Experiences",
    desc: "Sustainable stays, local guides, and nature-first adventures for conscious explorers.",
    tag: "Eco",
    tagColor: PALETTE.palmGreen,
  },
  {
    icon: <SupportAgentIcon sx={{ color: PALETTE.sunsetOrange, fontSize: 38 }} />,
    title: "24/7 Concierge",
    desc: "Real human support before, during, and after your journey—anywhere in the world.",
    tag: "Support",
    tagColor: PALETTE.sunsetOrange,
  },
  {
    icon: <ExploreIcon sx={{ color: PALETTE.deepForestGreen, fontSize: 38 }} />,
    title: "Unique Activities",
    desc: "Handpicked tours, workshops, and offbeat experiences you won’t find elsewhere.",
    tag: "Unique",
    tagColor: PALETTE.deepForestGreen,
  },
  {
    icon: <LocalOfferIcon sx={{ color: PALETTE.sunsetOrange, fontSize: 38 }} />,
    title: "Best Price Guarantee",
    desc: "Transparent pricing and exclusive deals—no hidden fees, just honest value.",
    tag: "Deals",
    tagColor: PALETTE.sunsetOrange,
  },
  {
    icon: <NatureIcon sx={{ color: PALETTE.deepForestGreen, fontSize: 38 }} />,
    title: "Nature Escapes",
    desc: "Reconnect with the wild through curated nature trips, wildlife safaris, and outdoor adventures.",
    tag: "Nature",
    tagColor: PALETTE.deepForestGreen,
  },
  {
    icon: <GavelIcon sx={{ color: PALETTE.oceanBlue, fontSize: 38 }} />,
    title: "Visa Services",
    desc: "Expert assistance for tourist, business, and student visas—hassle-free documentation.",
    tag: "Visa",
    tagColor: PALETTE.oceanBlue,
  },
];

const Services = () => {
  const scrollRef = useRef();

  // Minimize gap between cards
  const cardGap = 12;

  // Auto sliding effect (looped)
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;
    let interval;
    let isHovered = false;

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    interval = setInterval(() => {
      if (!isHovered) {
        // If at end, scroll back to start for infinite loop
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - cardGap) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 270 + cardGap, behavior: "smooth" });
        }
      }
    }, 2200);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 270 + cardGap;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Root>
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Chip
            label="Our Services"
            sx={{
              background: alpha(PALETTE.deepForestGreen, 0.12),
              color: PALETTE.deepForestGreen,
              fontWeight: 800,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              borderRadius: 999,
              fontSize: 15,
              mb: 1,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900, color: PALETTE.deepForestGreen }}>
            Travel, Your Way
          </Typography>
          <Typography variant="h6" sx={{ color: PALETTE.charcoal, opacity: 0.92, maxWidth: 700 }}>
            From custom itineraries to eco-friendly adventures, we make every journey seamless, safe, and unforgettable.
          </Typography>
        </Stack>
        <Box sx={{ position: "relative" }}>
          <IconButton
            className="services-arrow"
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: { xs: 0, md: -32 },
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              bgcolor: PALETTE.white,
              boxShadow: 2,
              display: { xs: "flex", md: "flex" },
            }}
            aria-label="Scroll left"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box
            ref={scrollRef}
            className="services-slider"
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: `${cardGap}px`,
              py: 2,
              px: 1,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {services.map((s, i) => (
              <Box
                key={s.title}
                sx={{
                  minWidth: 240,
                  maxWidth: 300,
                  flex: "0 0 auto",
                  display: "flex",
                }}
              >
                <ServiceCard className="service-card" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}>
                    <Box className="service-icon" sx={{ mb: 1 }}>{s.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: PALETTE.deepForestGreen }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: PALETTE.charcoal, opacity: 0.92 }}>
                      {s.desc}
                    </Typography>
                    <Chip
                      label={s.tag}
                      sx={{
                        mt: 1,
                        background: alpha(s.tagColor, 0.13),
                        color: s.tagColor,
                        fontWeight: 700,
                        borderRadius: 999,
                        fontSize: 13,
                      }}
                      size="small"
                    />
                  </CardContent>
                </ServiceCard>
              </Box>
            ))}
          </Box>
          <IconButton
            className="services-arrow"
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: { xs: 0, md: -32 },
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              bgcolor: PALETTE.white,
              boxShadow: 2,
              display: { xs: "flex", md: "flex" },
            }}
            aria-label="Scroll right"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: PALETTE.oceanBlue,
              color: PALETTE.white,
              px: 4,
              py: 1.5,
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 18,
              textTransform: "none",
              boxShadow: `0 6px 18px ${alpha(PALETTE.oceanBlue, 0.18)}`,
              "&:hover": { backgroundColor: PALETTE.sunsetOrange, color: PALETTE.white },
            }}
            href="/contact"
          >
            Plan My Trip
          </Button>
        </Box>
      </Container>
    </Root>
  );
};

export default Services;
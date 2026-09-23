import hero from "@/assets/solan-villa-hero.jpg";
import home from "@/assets/saproon-family-home.jpg";
import plot from "@/assets/kandaghat-plot.jpg";
import commercial from "@/assets/chambaghat-commercial.jpg";
import area from "@/assets/area.png";
import badroom from "@/assets/badroom.png";
import balcony from "@/assets/balcony.png";
import interior from "@/assets/interrior.png";
import interior2 from "@/assets/interior2.png";
import meeting from "@/assets/meeting-area.png";
import propertyFront from "@/assets/property-front.png";
import propertyFront2 from "@/assets/property-front2.png";
import propertyImg from "@/assets/property.png";
import hero1 from "@/assets/solan-villa-hero1.png";
import hero2 from "@/assets/solan-villa-hero2.png";
import hero3 from "@/assets/solan-villa-hero3.png";

export const images = { hero, home, plot, commercial, area, badroom, balcony, interior, interior2, meeting, propertyFront, propertyFront2, propertyImg, hero1, hero2, hero3 };
export const whatsappUrl = "https://wa.me/919736368695?text=Hello%2C%20I%20am%20looking%20for%20a%20property.%20Please%20share%20available%20properties.";

export const properties = [
  { title: "Modern 3 BHK Villa in Kasauli", location: "Kasauli, Himachal Pradesh", price: "₹1.85 Cr", type: "Villa", status: "For Sale", beds: 3, baths: 3, area: "2,450 sq ft", image: propertyFront, description: "A refined hillside residence with wide valley views, generous decks and contemporary interiors." },
  { title: "Mountain View Residential Plot", location: "Bhoj Nagar, Kasauli", price: "₹72 Lakh", type: "Plot", status: "For Sale", beds: 0, baths: 0, area: "400 sq yd", image: propertyImg, description: "An accessible, gently contoured plot suited to a private home or thoughtful long-term investment." },
  { title: "Premium Family Home", location: "Solan, HP", price: "₹1.35 Cr", type: "House", status: "For Sale", beds: 4, baths: 3, area: "2,100 sq ft", image: propertyFront2, description: "A spacious family address with sunlight, parking and convenient access." },
  { title: "High-Street Commercial Space", location: "Parwanoo, HP", price: "₹65,000 / month", type: "Commercial", status: "For Rent", beds: 0, baths: 2, area: "1,600 sq ft", image: meeting, description: "Visible road-facing premises suited to a showroom, office or growing local business." },
];

export const areas = [
  ["Kasauli", "Scenic hill station properties, luxury vacation homes, and plots."],
  ["Solan", "Well-connected homes, apartments and commercial opportunities close to daily conveniences."],
  ["Barog", "Quiet mountain homes, holiday residences and view-facing plots in a heritage hill setting."],
  ["Parwanoo", "Industrial land, residential plots, and commercial spaces near the state border."],
  ["Bhoj Nagar", "Peaceful residential plots and independent homes in a green hillside environment."]
] as const;

export const areaSlugs: Record<string, string> = { Kasauli: "kasauli", Solan: "solan", Barog: "barog", Parwanoo: "parwanoo", "Bhoj Nagar": "bhoj-nagar" };

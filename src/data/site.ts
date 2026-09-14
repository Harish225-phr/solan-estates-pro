import hero from "@/assets/solan-villa-hero.jpg";
import home from "@/assets/saproon-family-home.jpg";
import plot from "@/assets/kandaghat-plot.jpg";
import commercial from "@/assets/chambaghat-commercial.jpg";

export const images = { hero, home, plot, commercial };
export const whatsappUrl = "https://wa.me/?text=Hello%2C%20I%20am%20looking%20for%20a%20property%20in%20Solan.%20Please%20share%20available%20properties.";

export const properties = [
  { title: "Modern 3 BHK Villa", location: "Solan, Himachal Pradesh", price: "₹1.85 Cr", type: "Villa", status: "For Sale", beds: 3, baths: 3, area: "2,450 sq ft", image: hero, description: "A refined hillside residence with wide valley views, generous decks and contemporary interiors." },
  { title: "Mountain View Residential Plot", location: "Near Kandaghat, Solan", price: "₹72 Lakh", type: "Plot", status: "For Sale", beds: 0, baths: 0, area: "400 sq yd", image: plot, description: "An accessible, gently contoured plot suited to a private home or thoughtful long-term investment." },
  { title: "Premium Family Home", location: "Saproon, Solan", price: "₹1.35 Cr", type: "House", status: "For Sale", beds: 4, baths: 3, area: "2,100 sq ft", image: home, description: "A spacious family address with sunlight, parking and convenient access to central Solan." },
  { title: "High-Street Commercial Space", location: "Chambaghat, Solan", price: "₹65,000 / month", type: "Commercial", status: "For Rent", beds: 0, baths: 2, area: "1,600 sq ft", image: commercial, description: "Visible road-facing premises suited to a showroom, office or growing local business." },
];

export const areas = [
  ["Solan", "Well-connected homes, apartments and commercial opportunities close to daily conveniences."],
  ["Kandaghat", "Residential properties, plots and villas in a scenic corridor between Solan and Shimla."],
  ["Kumarhatti", "Homes, roadside commercial spaces and land options with strong regional connectivity."],
  ["Dharampur", "Rental homes, plots and investment opportunities near the Kalka–Shimla highway."],
  ["Barog", "Quiet mountain homes, holiday residences and view-facing plots in a heritage hill setting."],
  ["Chambaghat", "Practical residential and commercial property close to Solan’s active urban centre."],
  ["Saproon", "Family homes, apartments and rentals in an established, accessible Solan neighbourhood."],
  ["Shilli", "Peaceful residential plots and independent homes in a green hillside environment."],
  ["Nauni", "Rental housing, family homes and land around the university and surrounding communities."],
  ["Oachghat", "Emerging residential plots and houses within easy reach of Solan town."],
] as const;

export const areaSlugs: Record<string, string> = { Solan: "solan", Kandaghat: "kandaghat", Kumarhatti: "kumarhatti", Dharampur: "dharampur", Barog: "barog" };

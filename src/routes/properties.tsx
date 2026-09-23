import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/content";

export const Route = createFileRoute("/properties")({
  head: () => ({ meta: [{ title: "Properties in Solan | Raghuvanshi Real Estate Agency" }, { name: "description", content: "Explore sample houses, villas, flats, plots and commercial properties across Solan and nearby Himachal areas." }, { property: "og:title", content: "Properties in Solan" }, { property: "og:description", content: "Explore sample houses, villas, flats, plots and commercial properties across Solan and nearby Himachal areas." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/properties" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/properties" }] }),
  component: Page,
});
function Page() { return <EditorialPage title="Properties in Solan" eyebrow="Browse sample listings" intro="Explore sample houses, villas, flats, plots and commercial properties across Solan and nearby Himachal areas." sections={[{ title: "A better property search starts with clear priorities", body: "Compare location, access, everyday convenience, usable space and long-term suitability—not only photographs and asking prices." }, { title: "Useful local context", body: "Our Solan property coverage includes established neighbourhoods and nearby areas such as Kandaghat, Kumarhatti, Dharampur, Barog, Chambaghat, Saproon, Shilli, Nauni and Oachghat. Availability varies, so every shortlist should be current and requirement-led." }]} />; }

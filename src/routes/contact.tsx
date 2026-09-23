import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact a Property Consultant in Kasauli | Raghuvanshi Real Estate Agency" }, { name: "description", content: "Contact a property consultant in Kasauli to discuss buying, selling, renting or investing across the region." }, { property: "og:title", content: "Contact a Property Consultant in Kasauli" }, { property: "og:description", content: "Contact a property consultant in Kasauli to discuss buying, selling, renting or investing across the region." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/contact" }] }),
  component: Page,
});
function Page() { 
  return (
    <>
      <EditorialPage title="Contact a Property Consultant in Kasauli" eyebrow="Start with your requirement" intro="Contact a property consultant in Kasauli to discuss buying, selling, renting or investing across the region." sections={[{ title: "Tell us what would make a property right for you", body: "Share your preferred location, property type, timeline and approximate budget. You can reach out to Ashit Raghuwanshi directly via phone or WhatsApp at +91 9736368695." }, { title: "Useful local context", body: "Our primary coverage includes Kasauli, Solan, Barog, and Parwanoo. We operate from Bhoj Nagar area of Kasauli and Masulkhana (Parwanoo)." }]} />
      <section className="container-site mb-24">
        <h2 className="mb-6 font-display text-2xl font-semibold">Find us on Google Maps</h2>
        <div className="overflow-hidden rounded-xl border">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.47518659525!2d76.96358851120677!3d30.9013392743969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8921dd448963%3A0xa5ba9ce7b5887998!2sRaghuvanshi%20Real%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1790169661853!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  ); 
}

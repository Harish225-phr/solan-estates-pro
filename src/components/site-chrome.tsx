import { Link } from "@tanstack/react-router";
import { Building2, Facebook, Instagram, Linkedin, MapPin, Menu, MessageCircle, Mountain, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/site";

const nav = [
  ["Home", "/"], ["Properties", "/properties"], ["Buy", "/properties-for-sale"], ["Rent", "/properties-for-rent"],
  ["Sell", "/contact"], ["Services", "/services"], ["Locations", "/locations"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`flex items-center gap-3 ${light ? "text-primary-foreground" : "text-primary"}`} aria-label="Solan Estates home">
    <span className={`grid size-10 place-items-center border ${light ? "border-primary-foreground/35" : "border-primary/30"}`}><Mountain className="size-5" /></span>
    <span><strong className="block font-display text-xl leading-none">SOLAN ESTATES</strong><small className="text-[0.57rem] font-bold tracking-[0.22em] opacity-70">HIMACHAL PROPERTY ADVISORS</small></span>
  </Link>;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 36); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/95 py-2 shadow-sm backdrop-blur-lg" : "border-primary-foreground/15 bg-primary/75 py-4 backdrop-blur-md"}`}>
    <div className="container-site flex items-center justify-between gap-6">
      <Brand light={!scrolled} />
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">{nav.map(([label, to]) => <Link key={label} to={to} className={`text-xs font-semibold transition-colors hover:text-highlight ${scrolled ? "text-foreground" : "text-primary-foreground"}`} activeProps={{ className: "text-highlight" }}>{label}</Link>)}</nav>
      <div className="hidden lg:block"><Button asChild variant={scrolled ? "default" : "light"}><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button></div>
      <button onClick={() => setOpen(!open)} className={`grid size-11 place-items-center lg:hidden ${scrolled ? "text-primary" : "text-primary-foreground"}`} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="absolute inset-x-0 top-full border-t border-border bg-background p-5 shadow-xl lg:hidden" aria-label="Mobile navigation"><div className="container-site grid gap-1">{nav.map(([label, to]) => <Link key={label} to={to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold text-foreground">{label}</Link>)}<Button asChild className="mt-4"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button></div></nav>}
  </header>;
}

const footerGroups = [
  ["Explore", [["All Properties", "/properties"], ["Properties for Sale", "/properties-for-sale"], ["Properties for Rent", "/properties-for-rent"], ["Commercial Property", "/commercial-property-in-solan"]]],
  ["Property Types", [["Houses for Sale", "/houses-for-sale-in-solan"], ["Flats & Apartments", "/flats-for-sale-in-solan"], ["Land & Plots", "/plots-for-sale-in-solan"], ["Real Estate in Solan", "/real-estate-in-solan"]]],
  ["Company", [["Our Services", "/services"], ["About Us", "/about"], ["Locations", "/locations"], ["Contact", "/contact"]]],
] as const;

export function SiteFooter() { return <footer className="bg-primary text-primary-foreground"><div className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
  <div><Brand light /><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/70">A premium demonstration of trusted real estate services in Solan, Himachal Pradesh—helping buyers, sellers, landlords and investors navigate local property.</p><div className="mt-6 flex gap-3">{[Instagram, Facebook, Linkedin].map((Icon, i) => <span key={i} className="grid size-10 place-items-center border border-primary-foreground/20" aria-hidden="true"><Icon className="size-4" /></span>)}</div></div>
  <div className="grid gap-8 sm:grid-cols-3">{footerGroups.map(([title, links]) => <div key={title}><h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-highlight">{title}</h2><ul className="mt-5 space-y-3">{links.map(([label, to]) => <li key={label}><Link to={to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{label}</Link></li>)}</ul></div>)}</div>
</div><div className="border-t border-primary-foreground/15"><div className="container-site flex flex-col gap-3 py-6 text-xs text-primary-foreground/55 md:flex-row md:items-center md:justify-between"><p>© 2026 Solan Estates. Demonstration website — sample content only.</p><p>Real Estate Services in Solan, Himachal Pradesh</p><div className="flex gap-4"><span>Privacy Policy</span><span>Terms</span><span>Sitemap</span></div></div></div></footer>; }

export function WhatsAppFloat() { return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat about property in Solan on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"><MessageCircle className="size-6" /></a>; }

export function ContactStrip() { return <div className="grid gap-3 text-sm text-muted-foreground"><span className="flex items-center gap-3"><Phone className="size-4 text-highlight" /> Phone: Demo placeholder</span><span className="flex items-center gap-3"><MessageCircle className="size-4 text-highlight" /> WhatsApp: Demo placeholder</span><span className="flex items-center gap-3"><Building2 className="size-4 text-highlight" /> Email: enquiries@example.com</span><span className="flex items-center gap-3"><MapPin className="size-4 text-highlight" /> Office: Solan, Himachal Pradesh (placeholder)</span></div>; }

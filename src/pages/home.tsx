import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2, Eye, Glasses,
  Sun, Monitor, Wrench, Users, Star, MapPin, Mail, Clock,
  ChevronDown, Shield, Zap, Award, Smile
} from "lucide-react";
import ReviewsCarousel from "@/components/ReviewsCarousel";

import shopInterior from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.46 AM.jpeg";
import shopExterior from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.52 AM.jpeg";
import testingEquip from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.38.56 AM.jpeg";
import frameDisplay from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.38 AM.jpeg";
import frameDisplay2 from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.39 AM.jpeg";
import mensFrames from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.41 AM (2).jpeg";
import womensFrames from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.40 AM (1).jpeg";
import kidsFrames from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.41 AM.jpeg";
import sunglasses from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.15.58 AM.jpeg";
import contactLenses from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.38.54 AM.jpeg";
import premiumFrames from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.15.57 AM.jpeg";

const REVIEWS = [
  { name: "Riya Sharma", location: "Sector 18, Noida", text: "Best optical store in Noida! Got my blue-cut glasses in a day. The staff explained every lens option clearly." },
  { name: "Aman Verma", location: "Sector 62, Noida", text: "Premium frames at honest prices. The computerized eye test was thorough and the optometrist was incredibly patient." },
  { name: "Priya Mehta", location: "Greater Noida", text: "Bought sunglasses for the whole family. Genuine products, great service, beautiful store." },
  { name: "Karan Singh", location: "Sector 50, Noida", text: "My kids' frames are flexible and tough — exactly what we needed. M.S. Vision is now our family optician." },
  { name: "Deepak Joshi", location: "Sector 49, Noida", text: "Mr. Suhalin is very knowledgeable. Computer eye testing was painless and fast. Highly recommend!" },
  { name: "Sunita Yadav", location: "Noida Extension", text: "Got my progressive lenses made here. The quality is outstanding. Best optician in the area." },
  { name: "Amit Sharma", location: "Sector 76, Noida", text: "Excellent eye testing service and a great collection of frames. Highly recommended." },
  { name: "Neha Singh", location: "Sector 45, Noida", text: "Premium quality lenses and excellent customer support. Will definitely come back." },
];

const SERVICES = [
  { icon: Eye, title: "Computerized Eye Testing", desc: "Precise digital refraction with the latest auto-refractor equipment." },
  { icon: Glasses, title: "Prescription Glasses", desc: "Single-vision, bifocal & progressive lenses crafted to your script." },
  { icon: Monitor, title: "Contact Lenses", desc: "Daily, monthly, toric & coloured lenses from trusted global brands." },
  { icon: Sun, title: "Designer Sunglasses", desc: "UV-protected, polarised & fashion sunglasses from premium labels." },
  { icon: Zap, title: "Blue Cut Lenses", desc: "Anti-glare, blue-light filtering lenses for screen-heavy lifestyles." },
  { icon: Users, title: "Kids Eyewear", desc: "Flexible, durable and safe frames designed for active children." },
];

const COLLECTION = [
  { label: "Men's Frames", badge: "200+ styles", img: mensFrames },
  { label: "Women's Frames", badge: "Trending now", img: womensFrames },
  { label: "Kids Frames", badge: "Flexible & safe", img: kidsFrames },
  { label: "Sunglasses", badge: "UV 400", img: sunglasses },
  { label: "Contact Lenses", badge: "All powers", img: contactLenses },
  { label: "Premium Eyewear", badge: "Luxury brands", img: premiumFrames },
];

const WHY_US = [
  { icon: Award, title: "Experienced Staff", desc: "5+ years of optometry expertise on the floor." },
  { icon: Monitor, title: "Latest Equipment", desc: "Computerised refraction & digital lensometers." },
  { icon: Shield, title: "Affordable Pricing", desc: "Transparent prices with seasonal offers." },
  { icon: CheckCircle2, title: "Genuine Products", desc: "100% authentic frames & lenses, every time." },
  { icon: Glasses, title: "Wide Collection", desc: "500+ frames across luxury & lifestyle brands." },
  { icon: Smile, title: "Customer First", desc: "5.0/5 satisfaction across 21+ Google reviews." },
];

const FAQS = [
  { q: "How often should I get my eyes tested?", a: "Adults should have a comprehensive eye exam every 1–2 years. If you wear glasses or contacts, or have a family history of eye disease, an annual check is recommended." },
  { q: "How long does it take to get my glasses?", a: "Most prescription glasses are ready within 24–48 hours. Complex prescriptions (high power, progressive lenses) may take up to 3–5 days. We'll keep you updated at every step." },
  { q: "Do you offer blue-cut lenses?", a: "Yes. We stock high-quality blue-light filtering lenses from leading brands. They are recommended for anyone who spends extended time on screens, mobiles, or under LED lighting." },
  { q: "Can I get contact lenses without a prior prescription?", a: "For your eye health, we require a valid prescription. If you don't have one, our in-store computerized eye test takes just 15–20 minutes and is completely free." },
  { q: "Do you carry branded frames?", a: "Absolutely. Our collection includes Park Line, Ray-Ban, Versace, Hadnt, Flicker, Doctorate, Eyones and several other national and international brands." },
  { q: "What are your store hours?", a: "We are open Monday to Sunday, 10:00 AM to 9:00 PM. Walk-ins are always welcome, and no appointment is needed for a free eye test." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5"
        >
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const MAPS_EMBED =
  "https://maps.google.com/maps?q=M.S.+Vision+Opticals,+Rajput+Colony,+Baraula,+Sector+49,+Noida,+Uttar+Pradesh+201304&output=embed&z=17";

const MAPS_LINK = "https://share.google/16rmLWhJR1A0xy3nh";

export default function Home() {
  const [formName, setFormName] = React.useState("");
  const [formPhone, setFormPhone] = React.useState("");
  const [formEmail, setFormEmail] = React.useState("");
  const [formMsg, setFormMsg] = React.useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello M.S. Vision Opticals!`,
      ``,
      `Name: ${formName || "—"}`,
      `Phone: ${formPhone || "—"}`,
      formEmail ? `Email: ${formEmail}` : null,
      formMsg ? `Message: ${formMsg}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(
      `https://wa.me/919310575277?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <>
      <Helmet>
        <title>M.S. Vision Opticals — Best Optical Shop in Noida | Eye Testing Sector 49</title>
        <meta name="description" content="Visit M.S. Vision Opticals in Sector 49 Noida for computerized eye testing, premium frames, contact lenses, and progressive lenses. 5-star rated. Call 9310575277." />
        <meta property="og:title" content="M.S. Vision Opticals — Best Optical Shop in Noida" />
        <meta property="og:description" content="Computerized eye testing, premium frames, designer sunglasses and contact lenses — all under one roof in Sector 49, Noida." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
            
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-primary">
                <CheckCircle2 size={14} />
                <span className="text-sm font-medium">Trusted by families in Sector 49, Noida</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-serif font-bold leading-[1.08] text-foreground mb-5">
                Complete Eye Care<br />
                <span className="text-primary">&amp; Trendy Eyewear</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Computerized eye testing, premium frames, designer sunglasses and contact lenses — all under one roof at M.S. Vision Opticals, Noida.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="tel:+919897905759"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  data-testid="hero-call-now"
                >
                  <Phone size={16} />
                  Call now · +91 98979 05759
                </a>
                <a
                  href="https://wa.me/919310575277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border border-border text-foreground font-semibold rounded-full hover:border-primary/40 hover:bg-slate-50 transition-all shadow-sm"
                  data-testid="hero-whatsapp"
                >
                  <MessageCircle size={16} className="text-green-600" />
                  WhatsApp us
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-green-500" />
                  Genuine products
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-green-500" />
                  Same-day service*
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-foreground">5.0</span> / 5 Google rating
                </div>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[520px]">
                <img
                  src={shopInterior}
                  alt="M.S. Vision Opticals store interior in Noida"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating free eye test card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 border border-border/50"
              >
                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Eye size={22} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-0.5">Free</div>
                  <div className="text-sm font-semibold text-foreground leading-tight">Computerized eye test</div>
                  <Link href="/contact" className="text-xs text-primary font-medium mt-0.5 inline-block hover:underline">
                    Book now →
                  </Link>
                </div>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-border/50 text-center"
              >
                <div className="flex gap-0.5 justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-lg font-bold text-foreground leading-none">5.0</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">21+ Reviews</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { num: "5+", label: "Years of expertise" },
              { num: "500+", label: "Happy customers" },
              { num: "1,000+", label: "Frames in store" },
              { num: "5.0★", label: "Google rating" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="text-3xl sm:text-4xl font-serif font-bold mb-1 text-white">{s.num}</div>
                <div className="text-sm text-white/70 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What we offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              End-to-end eye care, done right
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              From precise diagnostics to fashionable eyewear — every step under qualified optometrists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  <s.icon size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── OUR COLLECTION ── */}
      <section className="py-24 bg-slate-50" id="collection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our collection</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Find the frame that fits you
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Hand-picked styles for men, women, and kids — from everyday essentials to luxury labels.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {COLLECTION.map((c, i) => (
              <motion.div
                key={c.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <Link href="/products" className="block group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3 shadow-sm">
                    <img
                      src={c.img}
                      alt={c.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <div className="text-xs text-white/80 font-medium mb-0.5">{c.badge}</div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                    {c.label}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md"
            >
              Browse full collection <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why choose us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Trusted Noida opticians since day one
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Premium products, precise diagnostics, and people who genuinely care about your vision.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn our story <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_US.map((w, i) => (
                <motion.div
                  key={w.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 text-primary">
                    <w.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP INSIDE GALLERY ── */}
      <section className="py-24 bg-slate-50" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
          >
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Step inside</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                A look at our store &amp; collection
              </h2>
              <p className="text-muted-foreground mt-2 max-w-lg">
                Modern, well-lit displays with curated frames and the latest diagnostic equipment.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary font-semibold whitespace-nowrap hover:gap-3 transition-all"
            >
              View all photos <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: shopInterior, alt: "M.S. Vision Opticals store interior" },
              { src: frameDisplay, alt: "Premium frame collection" },
              { src: frameDisplay2, alt: "Designer sunglasses" },
              { src: testingEquip, alt: "Computerized eye testing room" },
            ].map((img, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden aspect-square group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-white overflow-hidden" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Customer reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Loved by families across Noida
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground">· 21+ Google Reviews</span>
            </div>
          </motion.div>

          <ReviewsCarousel reviews={REVIEWS} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/40 hover:bg-slate-50 transition-all"
            >
              Leave a review on Google
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Questions, answered</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-sm border border-border/50 px-6 divide-y divide-border"
          >
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VISIT OR CALL ── */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Visit or call</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Get in touch with M.S. Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Walk in for a free computerized eye test or message us — we usually reply within minutes.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">Reach us</div>
                    <a href="tel:+919897905759" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 98979 05759
                    </a>
                    <a href="https://wa.me/919310575277" className="block text-muted-foreground hover:text-primary transition-colors">
                      WhatsApp chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">Our address</div>
                    <p className="text-muted-foreground leading-relaxed">
                      Main Market, near Verma Jewellers, Rajput Colony, Baraula, Sector 49, Noida, UP 201304
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">Store hours</div>
                    <p className="text-muted-foreground">Mon – Sun · 10:00 AM – 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">Email</div>
                    <a
                      href="mailto:msvisionopticals10102023@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      msvisionopticals10102023@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="tel:+919897905759"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Phone size={16} />
                  Call
                </a>
                <a
                  href="https://wa.me/919310575277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right: booking form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible(0), transition: { duration: 0.5, delay: 0.15 } } }}
              className="bg-slate-50 rounded-3xl p-8 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-500">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground">Book via WhatsApp</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in your details — tapping "Send" opens WhatsApp with your message pre-filled.
              </p>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="h-name">Your name</label>
                  <input
                    id="h-name"
                    type="text"
                    required
                    placeholder="Full name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="h-phone">Phone number</label>
                  <input
                    id="h-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="h-email">Email <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <input
                    id="h-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="h-msg">How can we help?</label>
                  <textarea
                    id="h-msg"
                    rows={3}
                    placeholder="Eye test, frames, sunglasses, lenses…"
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    data-testid="contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  data-testid="contact-submit"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Send on WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Opens WhatsApp with your message pre-filled. No data is stored.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

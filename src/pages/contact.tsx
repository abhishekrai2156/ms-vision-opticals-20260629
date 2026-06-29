import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const MAPS_EMBED =
  "https://maps.google.com/maps?q=M.S.+Vision+Opticals,+Rajput+Colony,+Baraula,+Sector+49,+Noida,+Uttar+Pradesh+201304&output=embed&z=17";

const MAPS_LINK = "https://share.google/16rmLWhJR1A0xy3nh";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello M.S. Vision Opticals!`,
      ``,
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      email ? `Email: ${email}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    const url = `https://wa.me/919310575277?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Contact &amp; Location | M.S. Vision Opticals</title>
        <meta
          name="description"
          content="Visit M.S. Vision Opticals in Sector 49 Noida. Open daily 10 AM to 9 PM. Call 9897905759 or WhatsApp us to book an appointment."
        />
      </Helmet>

      {/* Page header */}
      <section className="pt-28 pb-14 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
            Visit or call
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Walk in for a free computerized eye test or message us — we usually reply within minutes.
          </motion.p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: info */}
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Our address",
                  content: (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Main Market, near Verma Jewellers, Rajput Colony, Natthu Colony, Baraula, Sector 49, Noida, Uttar Pradesh 201304
                    </p>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call or WhatsApp",
                  content: (
                    <div className="space-y-1">
                      <a href="tel:+919897905759" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 98979 05759
                      </a>
                      <a href="tel:+919310575277" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 93105 75277 (WhatsApp)
                      </a>
                    </div>
                  ),
                },
                {
                  icon: Clock,
                  title: "Business hours",
                  content: (
                    <p className="text-sm text-muted-foreground">
                      Monday – Sunday &nbsp;·&nbsp; 10:00 AM – 9:00 PM
                    </p>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:msvisionopticals10102023@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      msvisionopticals10102023@gmail.com
                    </a>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex gap-4 p-5 rounded-2xl border border-border bg-slate-50 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-sm">{item.title}</div>
                    {item.content}
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+919897905759"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm"
                >
                  <Phone size={15} />
                  Call now
                </a>
                <a
                  href="https://wa.me/919310575277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: form */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-slate-50 rounded-3xl p-8 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-1">
                <WhatsAppIcon />
                <h2 className="font-serif text-2xl font-bold text-foreground">Book via WhatsApp</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in your details — tapping "Send" opens WhatsApp with your message pre-filled.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="c-name">
                    Your name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="c-phone">
                    Phone number
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="c-email">
                    Email <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    data-testid="contact-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="c-msg">
                    How can we help?
                  </label>
                  <textarea
                    id="c-msg"
                    rows={3}
                    placeholder="Eye test, frames, sunglasses, lenses…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    data-testid="contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  data-testid="contact-submit"
                >
                  <WhatsAppIcon />
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

      {/* Google Maps */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm" style={{ height: 420 }}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="M.S. Vision Opticals — Sector 49 Noida"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink size={14} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

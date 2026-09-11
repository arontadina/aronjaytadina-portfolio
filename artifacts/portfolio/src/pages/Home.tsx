import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Instagram, Linkedin, Mail, Phone, MessageCircle, Star,
  Share2, Calendar, Layout, Smartphone, FileText, Shirt, Megaphone, Image as ImageIcon,
  Camera, Paintbrush, PenTool, Figma, Monitor, Youtube, ChevronLeft, ChevronRight, ZoomIn,
  CheckCircle, ArrowRight, Globe
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PROJECTS = [
  {
    tag: "Sublimation Design",
    title: "Full Sublimation Jersey Designs",
    client: "Teams, schools, organizations, companies, and print shops",
    goal: "Create a jersey that feels like the team before the game even starts — bold, unified, and impossible to overlook.",
    solution: "Built custom sublimation layouts with strong color, movement, and team personality. Every graphic was composed to work beautifully from the first screen preview to the final printed jersey.",
    result: "High-energy jerseys that make teams look organized, confident, and ready to show up together.",
    approach: "I balanced visual impact with production accuracy, so the design looks exciting without losing clarity when it is printed edge to edge.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: true,
    featuredImage: "/projects/jersey_featured.png",
    images: [
      "/projects/jersey_12vO0XoJtAZhZaslhCbeJOLMjwfRYvqb6.jpg",
      "/projects/jersey_1bQN4MJge8xla_XQvGl0vBkoiS3YFR7Cd.jpg",
      "/projects/jersey_1c1Jl1QK4etdAZGD4ad0voDGLBBOAXVsE.jpg",
      "/projects/jersey_1fD1whdDj7EfKOs0zW9VsE1MRxrv3LlQ4.jpg",
      "/projects/jersey_1cQKyGDuJbonF67VMB5liZIlhYvSpg2hB.jpg",
      "/projects/jersey_1gby61LnGWGBQCPGDQS8vzHrz-IXO4nE7.jpg",
      "/projects/jersey_1GU06m_qUTYdzpheEED9kdGbMManmO3Mv.jpg",
      "/projects/jersey_1HPVHYn96R7E-7jVP0MYphTTTL9Xe-vlx.jpg",
      "/projects/jersey_1IM2xpkkIDF8-l6jQ9Tp2MI-IkQnwevaU.jpg",
      "/projects/jersey_1NmrdUm5YMpFOTjtYPH4E1RKz0H4vwidw.jpg",
      "/projects/jersey_1ORvbDazPjYAlLaCiqp2wlkCjdCej7_1A.jpg",
      "/projects/jersey_1Pwem3Z0DES11Q8DjwDsxv3fVE1KsmwXT.jpg",
      "/projects/jersey_1y5cID82ePfaiVjrV3NE-EoJGLQ-3grfg.jpg",
      "/projects/jersey_1ZzNM1oa9uyUScLPltwFMmMHomvnT3O9I.jpg",
      "/projects/jersey_16-TrMWvcYMjDU2KBD2i0dPuA1JbJBNdP.jpg",
    ]
  },
  {
    tag: "Branding",
    title: "Logo & Identity Design",
    client: "Organizations, teams, student groups, and growing brands",
    goal: "Turn an idea, community, or mission into a logo people can recognize and remember.",
    solution: "Combined meaningful symbols, confident typography, and flexible layouts to create identity systems that feel personal without being difficult to use.",
    result: "Distinctive logos that stay clear on a profile picture, stand out on a jersey, and remain strong across every brand touchpoint.",
    approach: "I focused on clarity and meaning first, then built each mark to scale smoothly from small digital uses to large-format print.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    featured: true,
    featuredImage: "/projects/logo_featured.png",
    images: [
      "/projects/logo_16FUMMNs_iybTxvSNDxvWcdA-Soy6YRcQ.jpg",
      "/projects/logo_17k_yARM1BmvlnQb0dp3Um_7s1PRY1RzD.jpg",
      "/projects/logo_1ADiGEAUhJlW4uYB5eNC-dyylz5LupWAL.jpg",
      "/projects/logo_1d2znW1bsV3zCg5eIu4dY0HZfVa5VNshL.jpg",
      "/projects/logo_1dRts9EQ5nrq0bJS_lNiQ4tsBYNtYKIJO.jpg",
      "/projects/logo_1D_u5DPCMWGM3O8Yhvm1bIxKDT5qNOlF4.jpg",
      "/projects/logo_1FhJDgoeLeYh0jbbOOoe52WDFTThOryHk.jpg",
      "/projects/logo_1fLrOKWM0FjPu9U_eVSh0BxhMBvku6qCl.jpg",
      "/projects/logo_1hI7ZCAp5d418cF6drpLKrVi3bDoEepXW.jpg",
      "/projects/logo_1IXr9G7TRmNDUKo03zyi-3i0-8uKZEVq_.jpg",
      "/projects/logo_1KEB2G7Vy-aOmx4tyVuECAmXn1tVehHMW.jpg",
      "/projects/logo_1MeBem3ZLAIS9t2TMHyi7hpMGAwFWQnur.jpg",
      "/projects/logo_1MlADDdUrp5sYNwXDGs66kDuZ8VB82cFI.jpg",
      "/projects/logo_1NSVKKUoQub5D2Bii0WZlv9xj2n-XA12o.jpg",
      "/projects/logo_1osbCcZA988wemeazCHkjllqmNEvOF86v.jpg",
    ]
  },
  {
    tag: "Print & Marketing",
    title: "Campaign Poster Designs",
    client: "Candidates, campaign teams, advocacy groups, and public initiatives",
    goal: "Make the message clear, memorable, and impossible to miss in a busy public space.",
    solution: "Created bold poster compositions that lead with the candidate, sharpen the message, and make key details easy to understand at a glance.",
    result: "Campaign visuals with stronger presence, clearer communication, and a consistent look across print and digital materials.",
    approach: "I used hierarchy, contrast, and purposeful spacing to make every poster work fast — even when viewers only have a few seconds to look.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: true,
    featuredImage: "/projects/campaign_featured.png",
    images: [
      "/projects/campaign_11UOCUJpeHYtuO5ce-DVlIN2M_R77M5Jt.jpg",
      "/projects/campaign_133jNvoPTAsJWl6fX8aOMGuspeUxPM03Z.jpg",
      "/projects/campaign_16FPI_B_bNScsOQeuw7dfvxykYX1Jol6u.jpg",
      "/projects/campaign_171TOh48y-xk8wnwAdn7Z4oEH1ZC8Icge.jpg",
      "/projects/campaign_1ArUTSOmSwikx9HaYYr61AyPYaDlO2DDE.jpg",
      "/projects/campaign_1BFubTwPtJ7_MJnSEmOMNbS3-mV6UTbxg.jpg",
      "/projects/campaign_1e7UA88btR4v7HzenqIqJPYcZM-6AivQA.jpg",
      "/projects/campaign_1eOoSzeaNRXDa2kIMuG7zdtym3KtTlvmO.jpg",
      "/projects/campaign_1iBZxq6_aXKc9LdLF0oC7KluYRfSPhjfm.jpg",
      "/projects/campaign_1JHnCcTZgy44xxwqqTY-rce0yTfabxKN8.jpg",
      "/projects/campaign_1jkueL1kdfGbe4wyGm4PKqYqHPYsR3Zf9.jpg",
      "/projects/campaign_1JtobfQm88C0z6Bz600isp6uHE11mrJAM.jpg",
      "/projects/campaign_1P2xBmjngwRu4qMRsXUZvc_CsdK8Q-iyW.jpg",
      "/projects/campaign_1Ppub29fo5jjJ2XdgOLt9W8iGITXE3c2P.jpg",
    ]
  },
  {
    tag: "Merchandise",
    title: "ID Lanyard Designs",
    client: "Schools, offices, institutions, and organizations",
    goal: "Make everyday credentials feel like a natural part of the brand.",
    solution: "Translated logos, colors, and type into compact lanyard layouts that stay readable, polished, and recognizable in motion.",
    result: "Professional lanyards that turn a practical item into a consistent brand detail.",
    approach: "I designed for small-scale readability and repeatable production, keeping every detail clean from front to finish.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    featured: false,
    featuredImage: "/projects/lanyard_10l7t9Ji6xsGCyjCGlwuaydvsDagFmh9m.jpg",
    images: [
      "/projects/lanyard_10l7t9Ji6xsGCyjCGlwuaydvsDagFmh9m.jpg",
      "/projects/lanyard_14bZrXBGCHQfIwa7JqkJB84aEc_2ZjFRl.jpg",
      "/projects/lanyard_1AZdqRcghex-oGZu1yDAyFSq4WIweC8Ph.jpg",
      "/projects/lanyard_1bk89dpsATqFvvd275tZ7KWHxqwl2VkUL.jpg",
      "/projects/lanyard_1cVjdbuhhBhjuveRvT4tA2Tvop30eVmSx.jpg",
      "/projects/lanyard_1DzvuNK4h_TiqDTWDwbtjIuuoH4SmJjqU.jpg",
      "/projects/lanyard_1eBGCc6Bv1Csl9cVVc_A3iwp3mJvUrTNP.jpg",
      "/projects/lanyard_1glClwJRzBOvcqXDNML2RBp9OMm3SEN3J.jpg",
      "/projects/lanyard_1LZWXoimS5GZs-lCZgU-hcRvRw4T_Izvt.jpg",
      "/projects/lanyard_1rOimTyzKgWj-3XorRcIJjAvVQEUtx6NX.jpg",
      "/projects/lanyard_1RzjeFk1fj146wrxvPSHBW3HM-JTvqL2Z.jpg",
      "/projects/lanyard_1SlOXAfOcFXOd8sbyWFdaSd2bnFb8FFej.jpg",
      "/projects/lanyard_1YIhD8W1FtxP5A6pxTbJzyoaQjmSGVny7.jpg",
      "/projects/lanyard_1_yOayYJgSBWAxAPhySNMVjHXAoVYRA-F.jpg",
    ]
  },
  {
    tag: "Social Media",
    title: "Social Media Graphics",
    client: "Brands, schools, publications, and digital-first organizations",
    goal: "Give every post a reason to stop the scroll and a message worth remembering.",
    solution: "Created cohesive social graphics with strong hooks, brand-led visuals, and layouts built for quick mobile reading.",
    result: "A more recognizable feed with content that feels consistent, current, and ready to be shared.",
    approach: "I paired visual energy with clear messaging, so the design catches attention without making the audience work for the point.",
    tools: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    featured: true,
    featuredImage: "/projects/social_featured.png",
    images: [
      "/projects/social_14GPshanLo7HOoIPhp5dzMccZ1Ba_3fc0.jpg",
      "/projects/social_1OmszSAmSkCPLU297CeqOBe9AbRmndUId.jpg",
      "/projects/social_1onoOV2OtHDsqQ-xE7SR7jIlCZcdvFjSn.jpg",
      "/projects/social_1UDeTRPgIbSanoFtI-kZ6lWGha1-cW05F.jpg",
      "/projects/social_1wdryzpZzUH8xhvb8uLfntKRvVvP17uW9.jpg",
      "/projects/social_12dm6ZowsjjmMyhESY7bfH8yeYKIAA8VI.jpg",
      "/projects/social_1mrc5i0M7ZFqg52NdUrpco7rc18lSSeJW.jpg",
    ]
  },
  {
    tag: "Event Design",
    title: "Tarpaulin & Event Layout Design",
    client: "Schools, event organizers, graduates, and milestone celebrations",
    goal: "Make the moment feel as important as it is — from the stage to the final photo.",
    solution: "Designed vibrant large-format layouts with bold type, personal details, and a clear visual focal point that reads from a distance.",
    result: "Event graphics that celebrate achievements, photograph well, and give the occasion a stronger visual identity.",
    approach: "I planned every layout for real-world viewing, balancing scale, spacing, and print clarity so the design holds up in the room and in the camera roll.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: false,
    featuredImage: "/projects/tarp_14Cfku3BQluGb6ZQZtaBGzy5O02w9-Zfm.jpg",
    images: [
      "/projects/tarp_14Cfku3BQluGb6ZQZtaBGzy5O02w9-Zfm.jpg",
      "/projects/tarp_1fprZU1TNwvFlNk6QS7WK7GblOvNUnPXh.jpg",
      "/projects/tarp_1TXE406tZEN5Lwtqfthhw4fUaDXLCcpn4.jpg",
      "/projects/tarp_1_vMRBLNvP1utX-X65eGLG5Mm4oSLk3rc.jpg",
      "/projects/tarp_1xxDgAL-Bo2AlA2L9zxi5skZzjEr1XoDp.jpg",
      "/projects/tarp_1H2RNwvlVAph8AeJow7gHZRG43U6ZgkHt.jpg",
    ]
  }
];

const FEATURED = PROJECTS.filter(p => p.featured);

interface LightboxState {
  projectIndex: number;
  imageIndex: number;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const images = PROJECTS[lightbox.projectIndex].images;
    const newIndex = (lightbox.imageIndex + dir + images.length) % images.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-primary selection:text-white">

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/60 hover:text-white p-2 z-10" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full z-10 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full z-10 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] mx-8" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox.imageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={PROJECTS[lightbox.projectIndex].images[lightbox.imageIndex]}
                alt="Project preview"
                className="max-w-full max-h-[85vh] object-contain"
              />
              <div className="text-center pt-3 text-white/40 text-sm">
                {lightbox.imageIndex + 1} / {PROJECTS[lightbox.projectIndex].images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/8 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-lg font-black tracking-widest cursor-pointer uppercase" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ARON TADINA<span className="text-[#FF6B00]">.</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-xs font-bold tracking-widest uppercase">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white/70 hover:text-white transition-colors">
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-[#FF6B00] text-white px-5 py-2 font-black tracking-widest text-xs hover:bg-orange-500 transition-colors">
              HIRE ME
            </button>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-2xl font-black tracking-widest uppercase">
              {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left hover:text-[#FF6B00] transition-colors border-b border-white/10 pb-6">
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 50%, rgba(255,107,0,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,107,0,0.06) 0%, transparent 50%), #0a0a0a` }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <line x1="60%" y1="0%" x2="100%" y2="60%" stroke="#FF6B00" strokeWidth="1.5"/>
            <line x1="55%" y1="0%" x2="100%" y2="70%" stroke="#FF6B00" strokeWidth="0.8"/>
            <line x1="0%" y1="40%" x2="40%" y2="100%" stroke="#FF6B00" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={STAGGER}>
            <motion.div variants={FADE_UP} className="flex justify-center mb-6">
              <span className="inline-block border border-[#FF6B00] text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase px-4 py-2 bg-[#FF6B00]/10">
                HI, I'M ARON
              </span>
            </motion.div>

            <motion.h1 variants={FADE_UP} className="font-black uppercase leading-[0.9] tracking-tight mb-6">
              <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>GRAPHIC</span>
              <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>DESIGNER</span>
              <span className="block text-[#FF6B00]" style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)" }}>FOR BUSINESSES &amp;</span>
              <span className="block text-[#FF6B00]" style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)" }}>BRANDS</span>
            </motion.h1>

            {/* Positioning statement */}
            <motion.p variants={FADE_UP} className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">
              Freelance Graphic Designer · Branding · Social Media · Print Design
            </motion.p>

            <motion.p variants={FADE_UP} className="text-white/55 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Creating professional designs for branding, social media, and print materials.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => scrollTo('portfolio')} className="flex items-center gap-3 bg-[#FF6B00] text-white px-8 py-4 font-black tracking-widest text-xs uppercase hover:bg-orange-500 transition-colors">
                VIEW MY WORK <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 font-black tracking-widest text-xs uppercase border border-white/25 text-white hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                CONTACT ME
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-16 bg-[#111111] border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={FADE_UP}
            className="text-white/60 text-base md:text-lg leading-relaxed"
          >
            I design visual materials that help brands and organizations communicate clearly and effectively
            across digital and print platforms — from logos and social media to jerseys, tarpaulins, and marketing campaigns.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-3">FEATURED WORK</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Best Projects</h2>
            </div>
            <button onClick={() => scrollTo('portfolio')} className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white/40 hover:text-[#FF6B00] transition-colors flex-shrink-0">
              SEE ALL WORK <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED.map((project, i) => (
              <button
                key={i}
                className="group relative overflow-hidden bg-white/5 text-left"
                onClick={() => scrollTo('portfolio')}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-1">{project.tag}</span>
                  <span className="text-white text-sm font-bold leading-tight block">{project.title}</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#FF6B00] p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">WHAT I OFFER</motion.p>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black uppercase mb-4">
                Services I <span className="text-[#FF6B00]">Offer</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-base max-w-lg mx-auto">
                Professional design services for organizations, businesses, and individuals — built to communicate, convert, and impress.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Social Media Graphics", desc: "Scroll-stopping posts, stories, and templates for Instagram, Facebook, and more — aligned with your brand.", icon: <Share2 className="w-6 h-6" /> },
                { title: "Logo & Branding Design", desc: "Distinctive logos and brand identities that communicate who you are and scale across all media.", icon: <Layout className="w-6 h-6" /> },
                { title: "Campaign & Event Posters", desc: "High-impact poster and banner designs for campaigns, events, and advocacy — built to be seen.", icon: <Megaphone className="w-6 h-6" /> },
                { title: "Tarpaulin & Layout Design", desc: "Print-ready large-format layouts for events, milestones, and organizational displays.", icon: <Calendar className="w-6 h-6" /> },
                { title: "Apparel & Merchandise", desc: "Custom full sublimation jersey designs, apparel graphics, and merchandise layouts built for production.", icon: <Shirt className="w-6 h-6" /> },
                { title: "Marketing Materials", desc: "Flyers, ads, brochures, and campaign visuals that drive attention and move people to action.", icon: <FileText className="w-6 h-6" /> },
                { title: "Photo Editing", desc: "Professional retouching, compositing, and layout finishing for polished, presentation-ready results.", icon: <ImageIcon className="w-6 h-6" /> },
                { title: "Print Design", desc: "ID lanyards, newsletters, publications, and any format that needs clean, print-ready design.", icon: <Smartphone className="w-6 h-6" /> },
              ].map((service, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-[#0a0a0a] border border-white/8 p-7 group hover:bg-[#FF6B00]/5 transition-colors hover:border-[#FF6B00]/40">
                  <div className="text-[#FF6B00] mb-5">{service.icon}</div>
                  <h3 className="text-sm font-black uppercase tracking-wide mb-3 text-white">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS / SKILLS ── */}
      <section id="skills" className="py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">EXPERTISE</motion.p>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black uppercase mb-4">
                Tools <span className="text-[#FF6B00]">I Use</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-base">
                Industry-standard software used across every project.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                { name: "Adobe Photoshop", percent: 80, icon: <Camera className="text-[#31A8FF] w-5 h-5" /> },
                { name: "Adobe Illustrator", percent: 80, icon: <PenTool className="text-[#FF9A00] w-5 h-5" /> },
                { name: "Canva", percent: 80, icon: <Paintbrush className="text-[#00C4CC] w-5 h-5" /> },
                { name: "Figma", percent: 50, icon: <Figma className="text-[#F24E1E] w-5 h-5" /> },
                { name: "Google Workspace", percent: 80, icon: <Share2 className="text-[#4285F4] w-5 h-5" /> },
                { name: "Nano Banana", percent: 80, icon: <Layout className="text-yellow-400 w-5 h-5" /> },
                { name: "Microsoft Power BI", percent: 50, icon: <Monitor className="text-[#F2C811] w-5 h-5" /> },
                { name: "Adobe After Effects", percent: 30, icon: <Youtube className="text-[#9999FF] w-5 h-5" /> },
              ].map((skill, i) => (
                <motion.div key={i} variants={FADE_UP}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-bold text-sm">{skill.name}</span>
                    </div>
                    <span className="text-[#FF6B00] font-black text-sm">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full bg-[#FF6B00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-28 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">PORTFOLIO</motion.p>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black uppercase mb-4">
                All <span className="text-[#FF6B00]">Projects</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-base max-w-lg mx-auto">
                A curated collection of real client and organizational projects across branding, print, digital, and event design.
              </motion.p>
            </div>

            <div className="space-y-20">
              {PROJECTS.map((project, pi) => (
                <motion.div
                  key={pi}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={STAGGER}
                  className="border border-white/5 bg-[#0a0a0a]"
                >
                  {/* Project header bar */}
                  <div className="flex flex-col items-start gap-2 p-6 text-left border-b border-white/5">
                    <span className="text-[#FF6B00] text-xs font-black tracking-[0.25em] uppercase">{project.tag}</span>
                    <h3 className="text-lg md:text-xl font-black uppercase text-white">{project.title}</h3>
                  </div>

                  <div className="p-6 space-y-10">
                    {/* Left-aligned case study details */}
                    <div className="max-w-4xl mx-auto space-y-7 text-left">
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">Built for</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">The brief</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.goal}</p>
                      </div>
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">What I designed</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">The impact</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.result}</p>
                      </div>
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">How I approached it</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.approach}</p>
                      </div>
                      <div>
                        <span className="text-[#FF6B00] text-xs font-black tracking-widest uppercase block mb-2">Tools</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, ti) => (
                            <span key={ti} className="text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-2 py-1">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Centered image grid */}
                    <div className="max-w-5xl mx-auto w-full">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {project.images.map((img, ii) => (
                          <motion.button
                            key={ii}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-square overflow-hidden bg-white/5 group/img cursor-pointer"
                            onClick={() => setLightbox({ projectIndex: pi, imageIndex: ii })}
                          >
                            <img
                              src={img}
                              alt={`${project.title} ${ii + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/50 transition-colors flex items-center justify-center">
                              <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ── */}
      <section className="py-20 bg-[#FF6B00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.3)_20px,rgba(0,0,0,0.3)_21px)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div variants={FADE_UP} className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-none">Why<br/>Choose<br/>Me?</h2>
            </motion.div>
            <motion.div variants={FADE_UP} className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {[
                "Fast and reliable delivery",
                "Creative and detail-oriented approach",
                "Designs strictly tailored to your brand",
                "Easy and transparent communication",
                "Experience in print-ready design",
                "Multiple academic and organizational projects completed"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-black/15 border border-white/10">
                  <div className="w-2 h-2 bg-white flex-shrink-0" />
                  <p className="font-bold text-sm uppercase tracking-wide text-white">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">TESTIMONIALS</motion.p>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black uppercase">
                What Clients <span className="text-[#FF6B00]">Say</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Very easy to work with and delivers high-quality designs every time.", author: "Alex R.", role: "Small Business Owner" },
                { text: "Creative, fast, and always understands exactly what I need — highly recommend.", author: "Maria L.", role: "Student" },
                { text: "His designs helped my brand get noticed. Professional quality at every step.", author: "James T.", role: "Printing Services Owner" },
              ].map((test, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-[#111111] border border-white/5 p-8 relative hover:border-[#FF6B00]/30 transition-colors">
                  <div className="text-[#FF6B00] text-6xl font-serif absolute top-2 left-5 opacity-25 leading-none">"</div>
                  <div className="flex gap-1 mb-5 text-[#FF6B00]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/65 text-base mb-7 italic leading-relaxed">"{test.text}"</p>
                  <div className="border-t border-white/8 pt-4">
                    <p className="font-black text-sm uppercase tracking-wider">{test.author}</p>
                    <p className="text-xs text-white/35 mt-1">{test.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-[#111111] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER} className="flex flex-col lg:flex-row items-start gap-16">

            {/* Photo */}
            <motion.div variants={FADE_UP} className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-[#FF6B00] translate-x-4 translate-y-4" />
                <img src="/aron-photo.jpg" alt="Aron Tadina" className="relative z-10 w-full object-cover aspect-[3/4]" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={FADE_UP} className="w-full lg:w-3/5">
              <p className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">ABOUT ME</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">
                Aron <span className="text-[#FF6B00]">Tadina</span>
              </h2>

              <div className="space-y-4 text-white/60 text-base leading-relaxed mb-10">
                <p>
                  I'm Aron, a freelance graphic designer with experience creating a wide range of visual materials including branding, social media graphics, event layouts, and print designs.
                </p>
                <p>
                  I focus on producing clean, well-structured, and visually effective designs that meet both aesthetic and functional requirements. My approach combines creativity with attention to detail to ensure each design communicates clearly and professionally.
                </p>
                <p>
                  I've worked on multiple academic and organizational projects, building experience in print-ready design, large-format layouts, and brand identity work.
                </p>
              </div>

              {/* What I Do Best */}
              <div className="mb-10">
                <h3 className="text-sm font-black uppercase tracking-widest text-white mb-5">What I Do Best</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Branding & Logo Design",
                    "Social Media Graphics",
                    "Event & Tarpaulin Layouts",
                    "Print & Marketing Materials",
                    "Apparel & Merchandise Design",
                    "Campaign Poster Design",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                      <span className="text-sm text-white/65 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => scrollTo('contact')} className="flex items-center gap-3 bg-[#FF6B00] text-white px-8 py-4 font-black tracking-widest text-xs uppercase hover:bg-orange-500 transition-colors">
                WORK WITH ME <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-[#FF6B00] text-xs font-black tracking-[0.3em] uppercase mb-4">GET IN TOUCH</motion.p>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black uppercase mb-4">
                Let's Work <span className="text-[#FF6B00]">Together</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/45 text-base max-w-md mx-auto">
                I'm available for freelance projects. Feel free to reach out for collaborations or design work.
              </motion.p>
            </div>

            <div className="max-w-2xl mx-auto">
              <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "tadina.aronjay@gmail.com", href: "mailto:tadina.aronjay@gmail.com" },
                  { icon: <Phone className="w-4 h-4" />, label: "Phone / Viber", value: "+63929 793 8784", href: "tel:+639297938784" },
                  { icon: <MessageCircle className="w-4 h-4" />, label: "Telegram", value: "@tadzgraphics", href: "https://t.me/tadzgraphics" },
                  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", value: "@aeronaurity", href: "https://instagram.com/aeronaurity" },
                  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: "Aron Jay Tadina", href: "https://www.linkedin.com/in/tadinaaronjay/" },
                  { icon: <Globe className="w-4 h-4" />, label: "OnlineJobs.ph", value: "View My Profile", href: "https://v2.onlinejobs.ph/jobseekers/info/2633671" },
                ].map((contact, i) => (
                  <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-[#111111] border border-white/5 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/5 transition-colors group"
                  >
                    <div className="text-[#FF6B00]">{contact.icon}</div>
                    <div>
                      <div className="text-xs font-black tracking-widest uppercase text-white/25 mb-0.5">{contact.label}</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#FF6B00] transition-colors">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </motion.div>

              <motion.div variants={FADE_UP} className="text-center">
                <a href="mailto:tadina.aronjay@gmail.com" className="inline-flex items-center gap-3 bg-[#FF6B00] text-white px-12 py-5 font-black tracking-widest text-xs uppercase hover:bg-orange-500 transition-colors">
                  SEND ME A MESSAGE <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-medium">© 2024 Aron Tadina. All rights reserved.</p>
          <p className="text-white/20 text-xs">Freelance Graphic Designer · Philippines</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/aeronaurity" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF6B00] transition-colors text-xs font-bold uppercase tracking-wider">Instagram</a>
            <a href="https://www.linkedin.com/in/tadinaaronjay/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF6B00] transition-colors text-xs font-bold uppercase tracking-wider">LinkedIn</a>
            <a href="mailto:tadina.aronjay@gmail.com" className="text-white/20 hover:text-[#FF6B00] transition-colors text-xs font-bold uppercase tracking-wider">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

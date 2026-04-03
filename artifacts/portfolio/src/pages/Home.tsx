import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ExternalLink, Instagram, Linkedin, Mail, Phone, MessageCircle, Star,
  Share2, Calendar, Layout, Smartphone, FileText, Shirt, Megaphone, Image as ImageIcon,
  Camera, Paintbrush, PenTool, Figma, Monitor, Youtube, ChevronLeft, ChevronRight, ZoomIn
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
    client: "Students / School Organizations / Companies / Printing Service Owners",
    goal: "Create high-quality, visually dynamic jersey designs that reflect team identity, professionalism, and brand personality.",
    solution: "Designed custom full sublimation layouts with bold color combinations, modern patterns, and detailed graphics optimized for high-quality printing and durability.",
    result: "Delivered standout jersey designs that elevate team presence and reflect brand identity.",
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
    title: "Logo Design Layouts",
    client: "School Organizations / Intramurals / Concept Brands",
    goal: "Create visually striking and meaningful logo designs that represent identity, unity, and purpose.",
    solution: "Developed custom logo layouts using clean typography, symbolic elements, and adaptable design styles suited for school events, teams, and brand identities.",
    result: "Delivered versatile and eye-catching logos that enhance recognition and can be applied across various media.",
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
    client: "Political Candidates / Campaign Teams / Advocacy Groups",
    goal: "Create impactful and persuasive campaign visuals that effectively communicate the candidate's message and connect with voters.",
    solution: "Designed strategic poster layouts using strong typography, compelling imagery, and clear information hierarchy to highlight key platforms and candidate identity.",
    result: "Produced attention-grabbing campaign materials that strengthen candidate visibility and voter appeal.",
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
    client: "Educational Institutions / Corporate Offices / Organizations",
    goal: "Create professional and visually appealing lanyard designs that reflect identity, branding, and functionality.",
    solution: "Designed custom lanyard layouts featuring brand colors, logos, and clean typography, ensuring readability and consistency across all materials while optimizing for print production.",
    result: "Delivered sleek and durable lanyard designs that strengthen organizational identity and professionalism.",
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
    tag: "Digital Assets",
    title: "Social Media Graphics",
    client: "Educational Institutions / Corporate Brands / Independent Publications",
    goal: "Create engaging and visually consistent social media content that strengthens brand presence and effectively communicates key messages.",
    solution: "Designed cohesive graphic layouts using brand-aligned colors, modern typography, and structured compositions tailored for various platforms.",
    result: "Produced high-quality, scroll-stopping content that increases engagement and brand recognition.",
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
    title: "Tarpaulin Layouts for Academic Milestones",
    client: "Board Passers / Graduating Students / Schools / Event Organizers",
    goal: "Create visually impactful tarpaulin designs that celebrate achievements and enhance event presentations.",
    solution: "Designed high-resolution layouts with balanced composition, bold typography, and personalized elements, ensuring clarity and quality for large-format printing.",
    result: "Delivered vibrant and professional tarpaulin designs that highlight milestones and create memorable event experiences.",
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
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full z-10 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full z-10 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] mx-8" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox.imageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={PROJECTS[lightbox.projectIndex].images[lightbox.imageIndex]}
                alt="Project preview"
                className="max-w-full max-h-[85vh] object-contain rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center py-2 text-white/50 text-sm">
                {lightbox.imageIndex + 1} / {PROJECTS[lightbox.projectIndex].images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="text-xl font-display font-black tracking-widest cursor-pointer uppercase"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ARON TADINA<span className="text-primary">.</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold tracking-widest uppercase">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-primary transition-colors">
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-primary text-white px-6 py-2 font-black tracking-widest hover:bg-orange-500 transition-colors">
              HIRE ME
            </button>
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left hover:text-primary transition-colors border-b border-white/10 pb-6">
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION — matches reference screenshot */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark geometric background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 70% 50%, rgba(255,107,0,0.12) 0%, transparent 60%),
                radial-gradient(ellipse at 30% 80%, rgba(255,107,0,0.06) 0%, transparent 50%),
                #0a0a0a
              `
            }}
          />
          {/* Hex/diamond grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <pattern id="diag" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="120" y2="120" stroke="white" strokeWidth="0.5"/>
                <line x1="120" y1="0" x2="0" y2="120" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#diag)" opacity="0.5" />
          </svg>
          {/* Large diagonal accent lines (like in screenshot) */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <line x1="60%" y1="0%" x2="100%" y2="60%" stroke="#FF6B00" strokeWidth="1.5"/>
            <line x1="55%" y1="0%" x2="100%" y2="70%" stroke="#FF6B00" strokeWidth="0.8"/>
            <line x1="65%" y1="0%" x2="95%" y2="55%" stroke="white" strokeWidth="0.5"/>
            <line x1="0%" y1="40%" x2="40%" y2="100%" stroke="#FF6B00" strokeWidth="1"/>
            <line x1="5%" y1="30%" x2="45%" y2="100%" stroke="#FF6B00" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* Hero content — CENTERED like reference */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={STAGGER}>

            {/* "HI, I'M ARON" badge — exactly as in reference */}
            <motion.div variants={FADE_UP} className="flex justify-center mb-6">
              <span className="inline-block border border-primary text-primary text-xs font-black tracking-[0.3em] uppercase px-4 py-2 bg-primary/10">
                HI, I'M ARON
              </span>
            </motion.div>

            {/* Main headline — matches reference typography */}
            <motion.h1 variants={FADE_UP} className="font-display font-black uppercase leading-[0.88] tracking-tight mb-8">
              <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}>
                GRAPHIC
              </span>
              <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}>
                DESIGNER
              </span>
              <span className="block text-primary" style={{ fontSize: "clamp(2.8rem, 10vw, 7.5rem)" }}>
                FOR BUSINESSES &amp;
              </span>
              <span className="block text-primary" style={{ fontSize: "clamp(2.8rem, 10vw, 7.5rem)" }}>
                BRANDS
              </span>
            </motion.h1>

            {/* Subtitle — centered, muted gray */}
            <motion.p variants={FADE_UP} className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              I create clean, high-impact designs that help businesses stand out,
              attract customers, and grow their brand.
            </motion.p>

            {/* CTA buttons — exactly matching reference */}
            <motion.div variants={FADE_UP} className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('portfolio')}
                className="flex items-center gap-3 bg-primary text-white px-8 py-4 font-black tracking-widest text-sm uppercase hover:bg-orange-500 transition-colors"
              >
                VIEW MY WORK <span className="text-lg">&#8594;</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 font-black tracking-widest text-sm uppercase border border-white/30 text-white hover:border-primary hover:text-primary transition-colors bg-transparent"
              >
                HIRE ME
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">WHAT I OFFER</motion.p>
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-black uppercase mb-4">
                What I Can Do <span className="text-primary">For You</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-lg max-w-xl mx-auto">
                Designs tailored to elevate your brand and connect with your audience.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {[
                { title: "Social Media Graphics", desc: "Eye-catching posts, stories, and templates for Instagram, Facebook, and more.", icon: <Share2 className="w-7 h-7" /> },
                { title: "Event Design", desc: "Posters, banners, invitations, and event materials that make an impact.", icon: <Calendar className="w-7 h-7" /> },
                { title: "Branding Design", desc: "Complete brand identities — logos, color systems, and visual guidelines.", icon: <Layout className="w-7 h-7" /> },
                { title: "Web & UI Graphics", desc: "Clean, modern graphics and UI assets optimized for digital platforms.", icon: <Smartphone className="w-7 h-7" /> },
                { title: "Publication Materials", desc: "Newsletters, brochures, magazines, and formatted editorial layouts.", icon: <FileText className="w-7 h-7" /> },
                { title: "Print & Merchandise", desc: "Apparel graphics, sublimation layouts, tees, hoodies, and full merch drops.", icon: <Shirt className="w-7 h-7" /> },
                { title: "Marketing Materials", desc: "Flyers, ads, and campaign visuals that drive attention and conversions.", icon: <Megaphone className="w-7 h-7" /> },
                { title: "Photo Editing", desc: "Professional photo retouching, compositing, and polished layout designs.", icon: <ImageIcon className="w-7 h-7" /> },
              ].map((service, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-[#0a0a0a] p-8 group hover:bg-primary/5 transition-colors border-t-2 border-transparent hover:border-primary">
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h3 className="text-base font-black uppercase tracking-wide mb-3">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">EXPERTISE</motion.p>
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-black uppercase mb-4">
                Tools <span className="text-primary">I Use</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-lg">
                Industry-standard software to bring ideas to life.
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
                <motion.div key={i} variants={FADE_UP} className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-bold tracking-wide text-sm uppercase">{skill.name}</span>
                    </div>
                    <span className="text-primary font-black text-sm">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
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

      {/* PORTFOLIO SECTION — with real images + lightbox */}
      <section id="portfolio" className="py-32 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">PORTFOLIO</motion.p>
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-black uppercase mb-4">
                Selected <span className="text-primary">Work</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-lg max-w-xl mx-auto">
                A curated collection of real client projects across various design disciplines.
              </motion.p>
            </div>

            <div className="space-y-24">
              {PROJECTS.map((project, pi) => (
                <motion.div key={pi} variants={FADE_UP} className="group">
                  {/* Project header */}
                  <div className="mb-6 pb-4 border-b border-white/10">
                    <span className="text-primary text-xs font-black tracking-[0.3em] uppercase">{project.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase mt-1">{project.title}</h3>
                  </div>

                  {/* Project details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                    <div>
                      <span className="text-primary font-black uppercase tracking-wider text-xs block mb-1">Client</span>
                      <p className="text-white/50 leading-relaxed">{project.client}</p>
                    </div>
                    <div>
                      <span className="text-primary font-black uppercase tracking-wider text-xs block mb-1">Goal & Solution</span>
                      <p className="text-white/50 leading-relaxed">{project.goal}</p>
                    </div>
                    <div>
                      <span className="text-primary font-black uppercase tracking-wider text-xs block mb-1">Result</span>
                      <p className="text-white/50 leading-relaxed">{project.result}</p>
                    </div>
                  </div>

                  {/* Image grid — click to open lightbox */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
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
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.3)_20px,rgba(0,0,0,0.3)_21px)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div variants={FADE_UP} className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-none text-white">
                Why<br/>Choose<br/>Me?
              </h2>
            </motion.div>
            <motion.div variants={FADE_UP} className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {[
                "Fast and reliable delivery",
                "Creative and detail-oriented approach",
                "Designs strictly tailored to your brand",
                "Easy and transparent communication"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-black/20 border border-white/10">
                  <div className="w-2 h-2 bg-white flex-shrink-0" />
                  <p className="font-black text-base uppercase tracking-wide text-white">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">TESTIMONIALS</motion.p>
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-black uppercase">
                What Clients <span className="text-primary">Say</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Very easy to work with and delivers high-quality designs.", author: "Alex R.", role: "Small Business Owner" },
                { text: "Creative, fast, and understands exactly what I need.", author: "Maria L.", role: "Student" },
                { text: "His designs helped my brand get noticed online.", author: "James T.", role: "Full Sublimation & Printing Services Owner" },
              ].map((test, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-[#111111] border border-white/5 p-8 relative hover:border-primary/30 transition-colors">
                  <div className="text-primary text-6xl font-serif absolute top-2 left-6 opacity-30 leading-none">"</div>
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/70 text-base mb-8 italic leading-relaxed">"{test.text}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-black text-sm uppercase tracking-wider">{test.author}</p>
                    <p className="text-xs text-white/40 mt-1">{test.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-32 bg-[#111111] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={FADE_UP} className="w-full lg:w-1/2">
              <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4"></div>
                <img src="/aron-photo.jpg" alt="Aron Tadina" className="relative z-10 w-full object-cover aspect-[3/4]" />
              </div>
            </motion.div>
            <motion.div variants={FADE_UP} className="w-full lg:w-1/2">
              <p className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">ABOUT ME</p>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8">
                Aron <span className="text-primary">Tadina</span>
              </h2>
              <div className="space-y-5 text-base text-white/50 leading-relaxed">
                <p>I'm Aron, a freelance graphic designer passionate about creating visually compelling designs that communicate ideas effectively.</p>
                <p>I specialize in modern, clean, and streetwear-inspired visuals that help brands stand out in a competitive market.</p>
                <p>I focus on delivering designs that are not only visually appealing but also purposeful and aligned with client goals.</p>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="mt-10 flex items-center gap-3 bg-primary text-white px-8 py-4 font-black tracking-widest text-sm uppercase hover:bg-orange-500 transition-colors"
              >
                WORK WITH ME <span>&#8594;</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <div className="text-center mb-16">
              <motion.p variants={FADE_UP} className="text-primary text-sm font-black tracking-[0.3em] uppercase mb-4">GET IN TOUCH</motion.p>
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-black uppercase mb-4">
                Let's Work <span className="text-primary">Together</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/40 text-lg max-w-xl mx-auto">
                Ready to elevate your brand? Let's create something great together.
              </motion.p>
            </div>

            <div className="max-w-2xl mx-auto">
              <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "tadina.aronjay@gmail.com", href: "mailto:tadina.aronjay@gmail.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone / Viber", value: "+63929 793 8784", href: "tel:+639297938784" },
                  { icon: <MessageCircle className="w-5 h-5" />, label: "Telegram", value: "@tadzgraphics", href: "https://t.me/tadzgraphics" },
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", value: "@aeronaurity", href: "https://instagram.com/aeronaurity" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Aron Jay Tadina", href: "https://www.linkedin.com/in/tadinaaronjay/" },
                  { icon: <ExternalLink className="w-5 h-5" />, label: "Onlinejobs.ph", value: "View Profile", href: "https://v2.onlinejobs.ph/jobseekers/info/2633671" },
                ].map((contact, i) => (
                  <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-[#111111] border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="text-primary">{contact.icon}</div>
                    <div>
                      <div className="text-xs font-black tracking-widest uppercase text-white/30 mb-0.5">{contact.label}</div>
                      <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </motion.div>

              <motion.div variants={FADE_UP} className="text-center">
                <a
                  href="mailto:tadina.aronjay@gmail.com"
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 font-black tracking-widest text-sm uppercase hover:bg-orange-500 transition-colors"
                >
                  HIRE ME NOW <span className="text-lg">&#8594;</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">© 2024 Aron Tadina. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/aeronaurity" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-primary transition-colors text-sm font-medium">Instagram</a>
            <a href="https://www.linkedin.com/in/tadinaaronjay/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
            <a href="mailto:tadina.aronjay@gmail.com" className="text-white/20 hover:text-primary transition-colors text-sm font-medium">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

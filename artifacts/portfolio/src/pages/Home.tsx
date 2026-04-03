import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, X, ExternalLink, Instagram, Linkedin, Mail, Phone, MessageCircle, Star,
  Share2, Calendar, Layout, Smartphone, FileText, Shirt, Megaphone, Image as ImageIcon, Briefcase, Camera, Paintbrush, PenTool, Figma, Monitor, Youtube
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-wider cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ARON TADINA<span className="text-primary">.</span>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors">
              HIRE ME
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-xl font-display tracking-wider">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left hover:text-primary transition-colors border-b border-border pb-4"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Abstract Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-4xl"
          >
            <motion.h1 variants={FADE_UP} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] uppercase text-foreground mb-6">
              Hi, I'm Aron <br/>
              <span className="text-primary">Graphic Designer</span><br/>
              For Brands.
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I create clean, high-impact designs that help businesses stand out, attract customers, and grow their brand.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('portfolio')} className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold tracking-wide hover:bg-primary/90 transition-transform hover:-translate-y-1">
                VIEW MY WORK
              </button>
              <button onClick={() => scrollTo('contact')} className="border border-border bg-card/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white hover:text-black transition-colors hover:-translate-y-1">
                HIRE ME
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-card relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase">
              What I Can Do <span className="text-primary">For You</span>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg mb-16 max-w-2xl">
              Designs tailored to elevate your brand and connect with your audience.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Social Media Graphics", desc: "Eye-catching posts, stories, and templates for Instagram, Facebook, and more.", icon: <Share2 className="w-8 h-8" /> },
                { title: "Event Design", desc: "Posters, banners, invitations, and event materials that make an impact.", icon: <Calendar className="w-8 h-8" /> },
                { title: "Branding Design", desc: "Complete brand identities — logos, color systems, and visual guidelines.", icon: <Layout className="w-8 h-8" /> },
                { title: "Web & UI Graphics", desc: "Clean, modern graphics and UI assets optimized for digital platforms.", icon: <Smartphone className="w-8 h-8" /> },
                { title: "Publication Materials", desc: "Newsletters, brochures, magazines, and formatted editorial layouts.", icon: <FileText className="w-8 h-8" /> },
                { title: "Print & Merch", desc: "Apparel graphics, sublimation layouts, tees, hoodies, and full merch drops.", icon: <Shirt className="w-8 h-8" /> },
                { title: "Marketing Materials", desc: "Flyers, ads, and campaign visuals that drive attention and conversions.", icon: <Megaphone className="w-8 h-8" /> },
                { title: "Photo Editing", desc: "Professional photo retouching, compositing, and polished layout designs.", icon: <ImageIcon className="w-8 h-8" /> },
              ].map((service, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-background border border-border p-8 hover:border-primary/50 transition-colors group">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase">
                Tools <span className="text-primary">I Use</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-lg">
                Industry-standard software to bring ideas to life.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                { name: "Adobe Photoshop", percent: 80, icon: <Camera className="text-[#31A8FF]" /> },
                { name: "Adobe Illustrator", percent: 80, icon: <PenTool className="text-[#FF9A00]" /> },
                { name: "Canva", percent: 80, icon: <Paintbrush className="text-[#00C4CC]" /> },
                { name: "Figma", percent: 50, icon: <Figma className="text-[#F24E1E]" /> },
                { name: "Google Workspace", percent: 80, icon: <Share2 className="text-[#4285F4]" /> },
                { name: "Nano Banana", percent: 80, icon: <Layout className="text-yellow-400" /> },
                { name: "Microsoft Power BI", percent: 50, icon: <Monitor className="text-[#F2C811]" /> },
                { name: "Adobe After Effects", percent: 30, icon: <Youtube className="text-[#9999FF]" /> },
              ].map((skill, i) => (
                <motion.div key={i} variants={FADE_UP} className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-bold tracking-wide">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground font-mono">{skill.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-card rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-bold mb-16 uppercase text-center">
              Selected <span className="text-primary">Work</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  img: "/jersey.png",
                  tag: "Sublimation Design",
                  title: "Full Sublimation Jersey Designs",
                  client: "Students / School Organizations / Companies / Printing Service Owners",
                  goal: "Create high-quality, visually dynamic jersey designs that reflect team identity, professionalism, and brand personality",
                  solution: "Designed custom full sublimation layouts with bold color combinations, modern patterns, and detailed graphics optimized for high-quality printing and durability",
                  result: "Delivered standout jersey designs that elevate team presence",
                  link: "https://drive.google.com/drive/folders/1QV4FgOBO8kU4vXfLzol1GMpb4xnCoG6q?usp=drive_link"
                },
                {
                  img: "/logos.png",
                  tag: "Branding",
                  title: "Logo Design Layouts",
                  client: "School Organizations / Intramurals / Concept Brands",
                  goal: "Create visually striking and meaningful logo designs that represent identity, unity, and purpose",
                  solution: "Developed custom logo layouts using clean typography, symbolic elements, and adaptable design styles",
                  result: "Delivered versatile and eye-catching logos that enhance recognition",
                  link: "https://drive.google.com/drive/folders/1W_AganBCNycQaw0ojUBp_Mvavs_0BYHW?usp=drive_link"
                },
                {
                  img: "/poster.png",
                  tag: "Print & Marketing",
                  title: "Campaign Poster Designs",
                  client: "Political Candidates / Campaign Teams / Advocacy Groups",
                  goal: "Create impactful and persuasive campaign visuals that effectively communicate the candidate's message",
                  solution: "Designed strategic poster layouts using strong typography, compelling imagery, and clear information hierarchy",
                  result: "Produced attention-grabbing campaign materials",
                  link: "https://drive.google.com/drive/folders/14XL_0Us4ZnjgepE06rIE9Y4YKYTVWpLg?usp=drive_link"
                },
                {
                  img: "/lanyard.png",
                  tag: "Merchandise",
                  title: "ID Lanyard Designs",
                  client: "Educational Institutions / Corporate Offices / Organizations",
                  goal: "Create professional and visually appealing lanyard designs that reflect identity, branding, and functionality",
                  solution: "Designed custom lanyard layouts featuring brand colors, logos, and clean typography",
                  result: "Delivered sleek and durable lanyard designs",
                  link: "https://drive.google.com/drive/folders/1TnOsEW1CtMy4sNeHL8G6my8GlcUd0hDn?usp=drive_link"
                },
                {
                  img: "/social.png",
                  tag: "Digital Assets",
                  title: "Social Media Graphics",
                  client: "Educational Institutions / Corporate Brands / Independent Publications",
                  goal: "Create engaging and visually consistent social media content that strengthens brand presence",
                  solution: "Designed cohesive graphic layouts using brand-aligned colors, modern typography, and structured compositions",
                  result: "Produced high-quality, scroll-stopping content",
                  link: "https://drive.google.com/drive/folders/1pE-KaacQs0CmgalZp8PIQyFiOMm4Nm2a?usp=drive_link"
                },
                {
                  img: "/tarpaulin.png",
                  tag: "Event Design",
                  title: "Tarpaulin Layouts for Academic Milestones",
                  client: "Board Passers / Graduating Students / Schools / Event Organizers",
                  goal: "Create visually impactful tarpaulin designs that celebrate achievements and enhance event presentations",
                  solution: "Designed high-resolution layouts with balanced composition, bold typography, and personalized elements",
                  result: "Delivered vibrant and professional tarpaulin designs",
                  link: "https://drive.google.com/drive/folders/1rveWXk56sBQ_k5Zb8yemp19VJOv6uoRc?usp=drive_link"
                }
              ].map((project, i) => (
                <motion.div key={i} variants={FADE_UP} className="group flex flex-col bg-background border border-border overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/9] bg-muted">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-bold uppercase mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-secondary mb-6 font-medium">Client: {project.client}</p>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider block mb-1">Goal</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.goal}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider block mb-1">Solution</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider block mb-1">Result</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.result}</p>
                      </div>
                    </div>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between w-full border-t border-border pt-4 group/btn">
                      <span className="font-bold tracking-wide group-hover/btn:text-primary transition-colors">VIEW FULL PROJECT IN DRIVE</span>
                      <ExternalLink className="w-5 h-5 group-hover/btn:text-primary transition-colors group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <motion.div variants={FADE_UP} className="lg:w-1/3">
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-none mb-6">
                Why Choose <br/>Me?
              </h2>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                "Fast and reliable delivery",
                "Creative and detail-oriented approach",
                "Designs strictly tailored to your brand",
                "Easy and transparent communication"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="mt-1 bg-white text-primary rounded-full p-1">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="font-bold text-lg leading-tight">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-6xl font-display font-bold mb-16 uppercase text-center">
              What Clients <span className="text-primary">Say</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "Very easy to work with and delivers high-quality designs.", author: "Alex R.", role: "Small Business Owner" },
                { text: "Creative, fast, and understands exactly what I need.", author: "Maria L.", role: "Student" },
                { text: "His designs helped my brand get noticed online.", author: "James T.", role: "Full Sublimation & Printing Services Owner" },
              ].map((test, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-card border border-border p-8 relative">
                  <div className="text-primary opacity-20 absolute top-4 left-4 text-6xl font-serif">"</div>
                  <div className="flex gap-1 mb-6 text-secondary relative z-10">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg mb-8 relative z-10 italic">"{test.text}"</p>
                  <div className="border-t border-border pt-4 relative z-10">
                    <p className="font-bold">{test.author}</p>
                    <p className="text-sm text-muted-foreground">{test.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <motion.div variants={FADE_UP} className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4"></div>
                <img src="/profile.png" alt="Aron Tadina" className="relative z-10 w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm Aron, a freelance graphic designer passionate about creating visually compelling designs that communicate ideas effectively.
                </p>
                <p>
                  I specialize in modern, clean, and streetwear-inspired visuals that help brands stand out in a competitive market. 
                </p>
                <p>
                  I focus on delivering designs that are not only visually appealing but also purposeful and aligned with client goals.
                </p>
              </div>
              <div className="mt-10">
                <img src="/logos.png" alt="Logos" className="h-16 w-auto opacity-50 grayscale" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-[20vw] font-display font-bold text-white/5 leading-none pointer-events-none select-none">
          HELLO
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={FADE_UP} className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
              Let's Work <span className="text-primary">Together</span>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-xl text-muted-foreground mb-16">
              Ready to elevate your brand? Let's create something great together.
            </motion.p>

            <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
              <a href="mailto:tadina.aronjay@gmail.com" className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="bg-primary/10 text-primary p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-wider">Email</p>
                  <p className="font-medium text-lg">tadina.aronjay@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+639297938784" className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="bg-primary/10 text-primary p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-wider">Phone / Viber</p>
                  <p className="font-medium text-lg">+63929 793 8784</p>
                </div>
              </a>
              
              <a href="https://t.me/tadzgraphics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="bg-primary/10 text-primary p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-wider">Telegram</p>
                  <p className="font-medium text-lg">@tadzgraphics</p>
                </div>
              </a>
              
              <a href="https://instagram.com/aeronaurity" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary transition-colors group">
                <div className="bg-primary/10 text-primary p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-wider">Instagram</p>
                  <p className="font-medium text-lg">@aeronaurity</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <a href="mailto:tadina.aronjay@gmail.com" className="inline-block bg-primary text-primary-foreground text-2xl font-display font-bold uppercase tracking-widest px-12 py-6 hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95">
                HIRE ME NOW
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-display font-bold tracking-wider">
            ARON TADINA<span className="text-primary">.</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 Aron Tadina. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://instagram.com/aeronaurity" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tadinaaronjay/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://v2.onlinejobs.ph/jobseekers/info/2633671" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Briefcase className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

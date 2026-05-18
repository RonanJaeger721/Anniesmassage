import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Instagram, Facebook, MapPin, 
  MessageCircle, Clock, Star, CheckCircle2, ChevronRight,
  Sparkles, Wind, Fingerprint, Flame, Flower2, Footprints,
  Settings, LogOut, Plus, Trash2, Edit2, Save
} from 'lucide-react';
import { INITIAL_SERVICES, INITIAL_FACIALS, INITIAL_PACKAGES, INITIAL_PROMOTIONS, INITIAL_TESTIMONIALS, INITIAL_GALLERY } from './data';
import { Service, Facial, Package, Promotion, Testimonial, GalleryImage } from './types';

// --- Components ---

const Sidebar = () => (
  <aside className="hidden lg:flex w-[300px] bg-spa-deep-green text-white flex-col justify-between p-10 h-screen sticky top-0 overflow-y-auto">
    <div>
      <div className="text-3xl font-bold tracking-[0.2em] font-serif uppercase">ANNIE'S</div>
      <div className="text-[10px] opacity-70 uppercase tracking-[0.3em] font-sans mt-2">Massage & Beauty</div>
      
      <div className="mt-16">
        <div className="text-[11px] uppercase tracking-widest text-spa-gold font-bold mb-3 font-sans">Location</div>
        <div className="text-sm font-sans opacity-80 leading-relaxed italic">
          21 Wynne Road, Riverside<br />
          Bulawayo, Zimbabwe
        </div>
      </div>
      
      <div className="mt-8">
        <div className="text-[11px] uppercase tracking-widest text-spa-gold font-bold mb-3 font-sans">Contact</div>
        <div className="text-sm font-sans opacity-80 flex flex-col gap-1">
          <a href="https://wa.me/263789965090" target="_blank" rel="noopener noreferrer" className="hover:text-spa-gold transition-colors">+263 78 996 5090</a>
          <a href="https://wa.me/263773675648" target="_blank" rel="noopener noreferrer" className="hover:text-spa-gold transition-colors">+263 77 367 5648</a>
        </div>
      </div>
    </div>
    
    <div>
      <div className="italic opacity-60 text-sm mb-6 leading-relaxed">"Healing for the mind, body, and soul."</div>
      <div className="h-[1px] bg-white/20 w-full mb-8"></div>
      <div className="text-[10px] uppercase font-bold tracking-widest font-sans opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        FOLLOW @ANNIESMASSAGE
      </div>
    </div>
  </aside>
);

const Navbar = ({ onAdminClick, isAdminMode }: { onAdminClick: () => void, isAdminMode: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Treatments', href: '#facials' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed lg:static top-0 left-0 lg:left-0 right-0 z-50 transition-all duration-300 lg:bg-transparent ${isScrolled || isMobileMenuOpen ? 'bg-spa-deep-green text-white py-3 shadow-lg' : 'bg-transparent py-5 lg:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
        {/* Logo - only visible on mobile/smaller desktops where sidebar is hidden */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-widest">ANNIE'S</span>
            <span className="text-[8px] tracking-[0.2em] font-medium leading-none opacity-70">MASSAGE & BEAUTY</span>
          </div>
        </div>

        {/* Global Nav Links */}
        <div className="hidden lg:flex items-center ml-auto gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[13px] font-sans font-bold uppercase tracking-[0.15em] text-spa-deep-green hover:text-spa-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <span className="text-[13px] font-sans font-bold uppercase tracking-[0.15em] text-spa-gold cursor-pointer hover:underline">Gift Vouchers</span>
          <button 
            onClick={onAdminClick}
            className="p-2 rounded-full text-spa-deep-green hover:bg-spa-deep-green/10 transition-all"
          >
            {isAdminMode ? <LogOut size={18} /> : <Settings size={18} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <button onClick={onAdminClick} className={isScrolled || isMobileMenuOpen ? 'text-white' : 'text-spa-deep-green'}>
            {isAdminMode ? <LogOut size={20} /> : <Settings size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled || isMobileMenuOpen ? 'text-white' : 'text-spa-deep-green'}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-spa-deep-green text-white p-10 shadow-2xl lg:hidden flex flex-col gap-8 text-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif tracking-widest hover:text-spa-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Book Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center p-6 md:p-14 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="relative z-10"
        >
          <div className="pill">Est. Bulawayo 2023</div>
          <h1 className="font-serif text-6xl md:text-[5.5rem] text-spa-deep-green mb-8 leading-[0.95] tracking-tighter">
            Relax.<br />
            Heal.<br />
            <span className="italic opacity-90">Reconnect.</span>
          </h1>
          <p className="text-spa-ink/70 text-lg md:text-xl font-serif italic max-w-sm mb-12 leading-relaxed">
            Professional massage and beauty treatments designed to help you recover, and feel your best.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#booking" className="btn-primary w-full sm:w-auto text-center">
              Book Session
            </a>
            <a href="#packages" className="btn-outline w-full sm:w-auto text-center">
              View Packages
            </a>
          </div>
        </motion.div>

        {/* The creative grid from the design */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]"
        >
          <div className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-spa-deep-green/5">
             <div className="text-spa-gold text-3xl mb-4">✦</div>
             <div className="font-sans font-bold text-xs uppercase tracking-widest text-spa-deep-green">Swedish Massage</div>
             <div className="text-[11px] opacity-60 font-serif mt-2">Relaxing & Gentle</div>
          </div>
          <div className="card-gold rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-xl">
             <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4 opacity-70">Featured Facial</div>
             <div className="font-sans font-bold text-lg uppercase tracking-widest mb-2">GLOW FACIAL</div>
             <div className="text-2xl font-serif text-spa-gold">$15</div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-spa-deep-green/5">
             <div className="text-spa-gold text-3xl mb-4">✦</div>
             <div className="font-sans font-bold text-xs uppercase tracking-widest text-spa-deep-green">Body Scrubs</div>
             <div className="text-[11px] opacity-60 font-serif mt-2">Natural Exfoliation</div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-spa-deep-green/5">
             <div className="text-spa-gold text-3xl mb-4">✦</div>
             <div className="font-sans font-bold text-xs uppercase tracking-widest text-spa-deep-green">Hotstone Therapy</div>
             <div className="text-[11px] opacity-60 font-serif mt-2">Deep Muscle Relief</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-[10%] right-[-10%] opacity-[0.03] pointer-events-none rotate-12">
        <Wind size={600} />
      </div>
    </section>
  );
};


const SectionHeading = ({ subtitle, title, light = false, centered = true }: { subtitle: string, title: string, light?: boolean, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="pill !mb-4">
      {subtitle}
    </span>
    <h2 className={`font-serif text-4xl md:text-6xl leading-[0.95] tracking-tight ${light ? 'text-white' : 'text-spa-deep-green'}`}>
      {title}
    </h2>
    {!centered && <div className="h-[2px] w-16 bg-spa-gold mt-6 opacity-40"></div>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=800" 
                alt="Spa Interior" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-spa-sage/10 rounded-[3rem] -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 border border-spa-gold rounded-[3rem] -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading centered={false} subtitle="Our Essence" title="About Annie’s Massage & Beauty Treats" />
            <div className="space-y-6 text-spa-ink/80 text-lg leading-relaxed font-serif italic">
              <p>
                Annie’s Massage & Beauty Treats offers professional massage therapy and beauty treatments in a calm, healing environment designed to help clients relax, recharge, and feel restored.
              </p>
              <p>
                Based in Bulawayo, our sanctuary specializes in a range of holistic experiences including Swedish and Deep Tissue massage, therapeutic facials, precise waxing, and indulgent pedicure treatments.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-10">
              <div className="flex flex-col">
                <span className="text-4xl font-serif text-spa-gold mb-1">5+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-spa-deep-green font-bold">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-spa-gold/20"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-serif text-spa-gold mb-1">1000+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-spa-deep-green font-bold">Happy Clients</span>
              </div>
              <div className="w-[1px] h-12 bg-spa-gold/20"></div>
               <div className="flex flex-col">
                <span className="text-4xl font-serif text-spa-gold mb-1">12+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-spa-deep-green font-bold">Specialties</span>
              </div>
            </div>

            <div className="mt-12">
               <a href="#booking" className="btn-primary">Our Story</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const iconMap: Record<string, any> = {
  Sparkles, Wind, Fingerprint, Flame, Flower2, Footprints
};

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section id="services" className="py-24 bg-spa-cream px-4 md:px-14">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Pure Wellbeing" title="Indulge in Our Exclusive Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-2 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-spa-deep-green/5 overflow-hidden"
              >
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-8">
                  <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-spa-deep-green/10"></div>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-spa-gold"><Icon size={24} /></div>
                    <h3 className="text-2xl font-serif text-spa-deep-green">{service.name}</h3>
                  </div>
                  <p className="text-spa-ink/60 text-sm font-serif italic mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#booking" className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-widest text-spa-gold hover:text-spa-deep-green transition-colors">
                    Book Service <ChevronRight size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Facials = ({ facials }: { facials: Facial[] }) => {
  return (
    <section id="facials" className="py-24 bg-white relative overflow-hidden px-4 md:px-14">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <SectionHeading centered={false} subtitle="Skin Radiance" title="A Guide To Our Facials" />
            <p className="text-spa-ink/70 text-lg mb-10 max-w-xl font-serif italic leading-relaxed">
              Let us help you choose the ideal facial based on your skin type and concerns. Each treatment is tailored to deliver visible results and ultimate relaxation.
            </p>
            <div className="flex items-center gap-6 p-8 bg-spa-cream rounded-[2.5rem] border border-spa-deep-green/5 shadow-sm">
               <img src="https://images.unsplash.com/photo-1512290923902-8a9f81eb233c?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 rounded-[2rem] object-cover border border-spa-gold shadow-md" alt="Skin Care" />
               <div>
                  <h4 className="font-serif text-xl mb-1">Bespoke Consultations</h4>
                  <p className="text-xs text-spa-ink/60 font-sans tracking-wide">Unsure what your skin needs? Our experts guide you to your perfect radiance.</p>
               </div>
            </div>
          </div>
          <div className="h-full rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800" className="w-full h-[500px] object-cover" alt="Facial treatment" />
            <div className="absolute inset-0 bg-spa-deep-green/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facials.map((facial, index) => (
            <motion.div
              key={facial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-spa-deep-green/10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all flex flex-col h-full items-center text-center group"
            >
              <div className="text-spa-gold text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">✦</div>
              <h3 className="font-serif text-2xl leading-tight mb-2 uppercase tracking-tight">{facial.name}</h3>
              <div className="text-xl font-serif text-spa-gold mb-6">${facial.price}</div>
              <p className="text-spa-ink/60 text-sm mb-8 font-serif italic flex-grow leading-relaxed">{facial.description}</p>
              
              <ul className="space-y-3 mb-10 w-full">
                {facial.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center justify-center text-[10px] text-spa-deep-green font-bold uppercase tracking-widest opacity-80">
                    <span className="w-1 h-1 bg-spa-gold rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="btn-outline w-full !text-[10px] !py-3">
                 Select Treatment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = ({ packages }: { packages: Package[] }) => {
  return (
    <section id="packages" className="py-24 bg-spa-deep-green relative overflow-hidden px-4 md:px-14">
       {/* Subtle background texture */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_white_0%,_transparent_60%)]"></div>
       </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading light subtitle="Ultimate Pampering" title="Curated Spa Packages" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-[3rem] shadow-2xl group overflow-hidden"
            >
              <div className="bg-[#1B3022]/40 rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="relative h-64 -mx-10 -mt-10 mb-10 overflow-hidden">
                  <img src={pkg.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={pkg.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022] to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-10">
                    <h3 className="text-3xl font-serif text-white tracking-tight">{pkg.name}</h3>
                  </div>
                </div>

                <div className="flex-grow">
                   <div className="flex items-baseline gap-2 mb-8">
                     <span className="text-4xl font-serif text-spa-gold">${pkg.price}</span>
                     <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Per Session</span>
                   </div>
                   
                   <ul className="space-y-4">
                     {pkg.treatments.map((item, i) => (
                       <li key={i} className="flex items-start text-white/70 text-sm font-serif italic">
                         <div className="w-1 h-1 bg-spa-gold rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>

                <button className="mt-12 w-full bg-spa-gold text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-spa-deep-green transition-all shadow-xl active:scale-95">
                   Book Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Promotions = ({ promos }: { promos: Promotion[] }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading subtitle="Special Treats" title="Everything Is Better Together" />
        <p className="text-center text-spa-deep-green/60 max-w-2xl mx-auto -mt-10 mb-16 text-lg">
           Enjoy these exclusive seasonal offers designed for couples, friends, and special occasions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {promos.map((promo, index) => (
             <motion.div
               key={promo.id}
               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex flex-col sm:flex-row bg-spa-cream rounded-3xl overflow-hidden shadow-lg border border-spa-beige/30"
             >
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                   <img src={promo.image} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" alt={promo.title} />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <span className="w-fit bg-spa-gold/10 text-spa-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {promo.category} Promo
                  </span>
                  <h3 className="font-serif text-2xl mb-3 text-spa-deep-green leading-tight">{promo.title}</h3>
                  <p className="text-spa-deep-green/60 text-sm mb-6">{promo.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-bold text-spa-deep-green">Only <span className="text-spa-gold">{promo.price}</span></span>
                    <button className="bg-spa-deep-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spa-gold transition-colors active:scale-95">
                      Check Offer
                    </button>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = ({ images }: { images: GalleryImage[] }) => {
  return (
    <section id="gallery" className="py-24 bg-spa-cream">
       <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading subtitle="Visual Serenity" title="Step Into Our Sanctuary" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg brightness-95 hover:brightness-100 transition-all ${i % 3 === 0 ? 'row-span-2' : ''}`}
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-spa-deep-green/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                 <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-spa-deep-green">
                    {img.category}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
};

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading subtitle="Client Love" title="What They Say About Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-spa-cream/50 p-10 rounded-[3rem] shadow-xl relative"
            >
              <div className="flex gap-1 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < t.rating ? '#c5a358' : 'none'} className={i < t.rating ? 'text-spa-gold' : 'text-spa-beige'} />
                 ))}
              </div>
              <p className="text-spa-deep-green text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-spa-gold/20 flex items-center justify-center font-bold text-spa-gold">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-spa-deep-green">{t.name}</h4>
                    <span className="text-xs text-spa-deep-green/40 uppercase tracking-widest font-semibold">Verified Client</span>
                 </div>
              </div>
              <div className="absolute -top-6 -right-6 text-spa-gold/10 pointer-events-none">
                 <Wind size={100} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = ({ services, packages }: { services: Service[], packages: Package[] }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Annie’s Massage & Beauty Treats,
I would like to book:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/263789965090?text=${encodedText}`, '_blank');
  };

  const allServices = [...services.map(s => s.name), ...packages.map(p => p.name)];

  return (
    <section id="booking" className="py-24 bg-spa-deep-green text-white relative px-4 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
           <SectionHeading light centered={false} subtitle="Ready to Relax?" title="Book Your Luxury Session Today" />
           <p className="text-white/60 text-lg mb-14 leading-relaxed max-w-xl font-serif italic">
             Whether you need a quick refresh or a full day of pampering, we're here to help you feel your best. Fill out the form or message us directly via WhatsApp.
           </p>
           
           <div className="space-y-10">
              <div className="flex items-center gap-8">
                 <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-spa-gold">
                    <Phone size={22} />
                 </div>
                 <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-1">Call Us Directly</p>
                    <a href="https://wa.me/263789965090" target="_blank" rel="noopener noreferrer" className="text-xl font-serif tracking-wide hover:text-spa-gold transition-colors">+263 78 996 5090</a>
                 </div>
              </div>
              
              <div className="flex items-center gap-8">
                 <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-spa-gold">
                    <MapPin size={22} />
                 </div>
                 <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-1">Our Sanctuary</p>
                    <p className="text-xl font-serif tracking-wide">21 Wynne Road, Bulawayo</p>
                 </div>
              </div>

              <div className="flex items-center gap-8">
                 <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-spa-gold">
                    <Clock size={22} />
                 </div>
                 <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-1">Opening Hours</p>
                    <p className="text-xl font-serif tracking-wide">Mon - Sat: 08:30 - 18:00</p>
                 </div>
              </div>
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] p-12 md:p-16 text-spa-deep-green shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                 <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-spa-deep-green/40">Full Name</label>
                 <input 
                   required
                   type="text" 
                   value={formData.name}
                   onChange={e => setFormData({...formData, name: e.target.value})}
                   className="w-full bg-spa-cream px-8 py-5 rounded-full outline-none border border-spa-deep-green/5 focus:border-spa-gold transition-all font-serif" 
                   placeholder="Your Name"
                 />
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-spa-deep-green/40">Phone Number</label>
                 <input 
                   required
                   type="tel" 
                   value={formData.phone}
                   onChange={e => setFormData({...formData, phone: e.target.value})}
                   className="w-full bg-spa-cream px-8 py-5 rounded-full outline-none border border-spa-deep-green/5 focus:border-spa-gold transition-all font-serif" 
                   placeholder="+263..."
                 />
               </div>
            </div>

            <div className="space-y-3">
                 <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-spa-deep-green/40">Select Service</label>
                 <select 
                   required
                   value={formData.service}
                   onChange={e => setFormData({...formData, service: e.target.value})}
                   className="w-full bg-spa-cream px-8 py-5 rounded-full outline-none border border-spa-deep-green/5 focus:border-spa-gold transition-all font-serif appearance-none cursor-pointer"
                 >
                   <option value="">Select a treatment</option>
                   {allServices.map(s => <option key={s} value={s}>{s}</option>)}
                 </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                 <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-spa-deep-green/40">Preferred Date</label>
                 <input 
                   required
                   type="date" 
                   value={formData.date}
                   onChange={e => setFormData({...formData, date: e.target.value})}
                   className="w-full bg-spa-cream px-8 py-5 rounded-full outline-none border border-spa-deep-green/5 focus:border-spa-gold transition-all font-serif" 
                 />
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-spa-deep-green/40">Preferred Time</label>
                 <input 
                   required
                   type="time" 
                   value={formData.time}
                   onChange={e => setFormData({...formData, time: e.target.value})}
                   className="w-full bg-spa-cream px-8 py-5 rounded-full outline-none border border-spa-deep-green/5 focus:border-spa-gold transition-all font-serif" 
                 />
               </div>
            </div>

            <button 
              type="submit"
              className="btn-primary w-full shadow-xl"
            >
               Confirm Booking
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
         <SectionHeading subtitle="Location & Socials" title="Visit Our Sanctuary" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-spa-cream rounded-3xl p-8 text-center flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-spa-gold mb-6 shadow-md">
              <Phone size={28} />
           </div>
           <h4 className="font-serif text-2xl mb-4">Phone Numbers</h4>
           <div className="space-y-2 flex flex-col">
             <a href="https://wa.me/263789965090" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-spa-gold transition-colors">+263 78 996 5090</a>
             <a href="https://wa.me/263773675648" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-spa-gold transition-colors">+263 77 367 5648</a>
           </div>
           <div className="flex gap-4 mt-8">
             <a href="tel:+263789965090" className="text-spa-gold font-bold uppercase tracking-widest text-xs hover:underline">Call #1</a>
             <span className="text-spa-gold opacity-30">|</span>
             <a href="tel:+263773675648" className="text-spa-gold font-bold uppercase tracking-widest text-xs hover:underline">Call #2</a>
           </div>
        </div>

        <div className="bg-spa-cream rounded-3xl p-8 text-center flex flex-col items-center border-[3px] border-spa-gold/30">
           <div className="w-16 h-16 rounded-full bg-spa-gold text-white flex items-center justify-center mb-6 shadow-xl">
              <MapPin size={28} />
           </div>
           <h4 className="font-serif text-2xl mb-4">Location</h4>
           <p className="text-lg">21 Wynne Road, Riverside</p>
           <p className="text-lg">Bulawayo, Zimbabwe</p>
           <button className="mt-8 bg-spa-gold text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg transition-all active:scale-95">Open Maps</button>
        </div>

        <div className="bg-spa-cream rounded-3xl p-8 text-center flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-spa-gold mb-6 shadow-md">
              <Instagram size={28} />
           </div>
           <h4 className="font-serif text-2xl mb-4">Follow Us</h4>
           <p className="text-lg mb-6">@Anniesmassage</p>
           <div className="flex gap-4">
              <a href="#" className="p-3 bg-white rounded-2xl text-spa-deep-green hover:text-spa-gold transition-colors"><Instagram /></a>
              <a href="#" className="p-3 bg-white rounded-2xl text-spa-deep-green hover:text-spa-gold transition-colors"><Facebook /></a>
           </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 rounded-3xl overflow-hidden h-96 shadow-2xl border-4 border-spa-beige/30">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14906.593510528522!2d28.61868!3d-20.150645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5535567554909%3A0x600334129128685c!2sBulawayo%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1715510000000!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={true} 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-spa-deep-green pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div className="text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-spa-gold flex items-center justify-center bg-white/5 p-2">
                 <img src="https://ais-pre-7j3jp4v7wbxxc3zo2mkyzk-553982460099.europe-west2.run.app/favicon.ico" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <div>
                <h2 className="font-serif text-3xl tracking-tight">Annie's Massage</h2>
                <p className="text-spa-gold font-medium tracking-[0.2em] text-[10px] uppercase">& Beauty Treats</p>
              </div>
           </div>
           <p className="text-white/40 max-w-sm text-sm leading-relaxed">
             Bulawayo's leading sanctuary for professional massage therapy and premium beauty treatments. Healing hands, relaxing vibes.
           </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 uppercase text-xs tracking-[0.2em] font-bold">
           <a href="#about" className="hover:text-spa-gold transition-colors">About</a>
           <a href="#services" className="hover:text-spa-gold transition-colors">Services</a>
           <a href="#facials" className="hover:text-spa-gold transition-colors">Facials</a>
           <a href="#packages" className="hover:text-spa-gold transition-colors">Packages</a>
           <a href="#contact" className="hover:text-spa-gold transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-spa-deep-green transition-all"><Instagram size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-spa-deep-green transition-all"><Facebook size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full bg-spa-gold text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(197,163,88,0.5)] transition-all"><MessageCircle size={20} /></a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
         <p>© 2024 Annie'S Massage & Beauty Treats. All Rights Reserved.</p>
         <div className="flex gap-8">
            <p>Relaxation • Healing • Beauty</p>
         </div>
      </div>
    </footer>
  );
};

// --- Admin Section ---

const AdminDashboard = ({ 
  services, setServices, 
  packages, setPackages,
  facials, setFacials,
  promos, setPromos,
  gallery, setGallery,
  onClose 
}: { 
  services: Service[], setServices: any,
  packages: Package[], setPackages: any,
  facials: Facial[], setFacials: any,
  promos: Promotion[], setPromos: any,
  gallery: GalleryImage[], setGallery: any,
  onClose: () => void 
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'services' | 'facials' | 'promos' | 'gallery'>('packages');

  const addItem = (type: string) => {
    switch (type) {
      case 'packages':
        setPackages([...packages, { id: Date.now().toString(), name: 'New Package', price: 0, treatments: ['New Treatment'], image: '' }]);
        break;
      case 'facials':
        setFacials([...facials, { id: Date.now().toString(), name: 'New Facial', price: 0, description: 'New Description', benefits: ['Benefit'] }]);
        break;
      case 'promos':
        setPromos([...promos, { id: Date.now().toString(), title: 'New Promo', description: '', price: '$0', category: 'Massage', image: '' }]);
        break;
    }
  };

  const deleteItem = (id: string, type: string) => {
    if (!window.confirm('Are you sure?')) return;
    switch (type) {
      case 'packages': setPackages(packages.filter(i => i.id !== id)); break;
      case 'facials': setFacials(facials.filter(i => i.id !== id)); break;
      case 'promos': setPromos(promos.filter(i => i.id !== id)); break;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-spa-cream/95 backdrop-blur-xl overflow-y-auto pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
           <h2 className="font-serif text-4xl">Admin Dashboard</h2>
           <button onClick={onClose} className="p-4 bg-spa-deep-green text-white rounded-full"><X /></button>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {['packages', 'services', 'facials', 'promos', 'gallery'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-spa-gold text-white shadow-xl' : 'bg-white text-spa-deep-green hover:bg-spa-beige'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-spa-beige">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-serif capitalize">{activeTab} Manager</h3>
            <button 
              onClick={() => addItem(activeTab)}
              className="bg-spa-deep-green text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-spa-gold transition-colors font-bold uppercase text-xs tracking-widest"
            >
              <Plus size={18} /> Add {activeTab === 'gallery' ? 'Image' : 'Item'}
            </button>
          </div>

          <div className="space-y-8">
            {activeTab === 'packages' && packages.map((pkg) => (
              <div key={pkg.id} className="p-8 bg-spa-cream rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                 <input 
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige" 
                   value={pkg.name} 
                   onChange={e => setPackages(packages.map(p => p.id === pkg.id ? {...p, name: e.target.value} : p))}
                 />
                 <input 
                   type="number"
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige" 
                   value={pkg.price} 
                   onChange={e => setPackages(packages.map(p => p.id === pkg.id ? {...p, price: Number(e.target.value)} : p))}
                 />
                 <input 
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige" 
                   value={pkg.image} 
                   placeholder="Image URL"
                   onChange={e => setPackages(packages.map(p => p.id === pkg.id ? {...p, image: e.target.value} : p))}
                 />
                 <button 
                   onClick={() => deleteItem(pkg.id, 'packages')}
                   className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors place-self-end"
                 >
                   <Trash2 />
                 </button>
              </div>
            ))}

            {activeTab === 'facials' && facials.map((f) => (
              <div key={f.id} className="p-8 bg-spa-cream rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                 <input 
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige" 
                   value={f.name} 
                   onChange={e => setFacials(facials.map(i => i.id === f.id ? {...i, name: e.target.value} : i))}
                 />
                 <input 
                   type="number"
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige" 
                   value={f.price} 
                   onChange={e => setFacials(facials.map(i => i.id === f.id ? {...i, price: Number(e.target.value)} : i))}
                 />
                 <textarea 
                   className="bg-white px-6 py-3 rounded-xl w-full border border-spa-beige md:col-span-1" 
                   value={f.description} 
                   onChange={e => setFacials(facials.map(i => i.id === f.id ? {...i, description: e.target.value} : i))}
                 />
                 <button 
                   onClick={() => deleteItem(f.id, 'facials')}
                   className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors place-self-end"
                 >
                   <Trash2 />
                 </button>
              </div>
            ))}
            
            {/* Gallery, Promos and Services follow similar pattern */}
            <div className="p-12 text-center text-spa-deep-green/40 border-2 border-dashed border-spa-beige rounded-3xl">
               Editing other tabs available in full version.
            </div>
          </div>
          
          <div className="mt-12 flex justify-end">
            <button 
               onClick={onClose}
               className="bg-spa-gold text-white px-12 py-4 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95 text-lg"
            >
               Save All Changes
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BookingStatusBar = () => (
  <div className="bg-[#E9EDEA] py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-spa-deep-green/5">
    <div className="flex items-center gap-4">
      <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse"></div>
      <div className="font-sans text-sm font-medium text-spa-ink">Available Now for WhatsApp Bookings</div>
    </div>
    <a href="https://wa.me/263789965090" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-spa-deep-green uppercase tracking-widest hover:text-spa-gold transition-colors">
      TEXT US: +263 78 996 5090
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Data persistence via localStorage
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('spa_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [facials, setFacials] = useState<Facial[]>(() => {
    const saved = localStorage.getItem('spa_facials');
    return saved ? JSON.parse(saved) : INITIAL_FACIALS;
  });

  const [packages, setPackages] = useState<Package[]>(() => {
    const saved = localStorage.getItem('spa_packages');
    return saved ? JSON.parse(saved) : INITIAL_PACKAGES;
  });

  const [promos, setPromos] = useState<Promotion[]>(() => {
    const saved = localStorage.getItem('spa_promos');
    return saved ? JSON.parse(saved) : INITIAL_PROMOTIONS;
  });

  const [gallery, setGallery] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem('spa_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  useEffect(() => {
    localStorage.setItem('spa_services', JSON.stringify(services));
    localStorage.setItem('spa_facials', JSON.stringify(facials));
    localStorage.setItem('spa_packages', JSON.stringify(packages));
    localStorage.setItem('spa_promos', JSON.stringify(promos));
    localStorage.setItem('spa_gallery', JSON.stringify(gallery));
  }, [services, facials, packages, promos, gallery]);

  const toggleAdmin = () => {
    if (!isAdmin) {
      const password = window.prompt('Enter Admin Password (Hint: admin)');
      if (password === 'admin') {
        setIsAdmin(true);
        setIsAdminOpen(true);
      } else {
        alert('Access Denied');
      }
    } else {
      setIsAdmin(false);
      setIsAdminOpen(false);
    }
  };

  return (
    <div className="flex bg-spa-cream min-h-screen selection:bg-spa-gold selection:text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Navbar onAdminClick={toggleAdmin} isAdminMode={isAdmin} />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Services services={services} />
          <Facials facials={facials} />
          <Packages packages={packages} />
          <Promotions promos={promos} />
          <Gallery images={gallery} />
          <WhyChooseUs />
          <Testimonials testimonials={INITIAL_TESTIMONIALS} />
          <BookingSection services={services} packages={packages} />
          <Contact />
          <BookingStatusBar />
        </main>

        <Footer />
      </div>

      <AnimatePresence>
        {isAdminOpen && (
          <AdminDashboard 
            services={services} setServices={setServices}
            packages={packages} setPackages={setPackages}
            facials={facials} setFacials={setFacials}
            promos={promos} setPromos={setPromos}
            gallery={gallery} setGallery={setGallery}
            onClose={() => setIsAdminOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const WhyChooseUs = () => {
  const points = [
    { title: 'Professional Care', desc: 'Expert therapists dedicated to your wellbeing.', icon: Sparkles },
    { title: 'Relaxing Environment', desc: 'A calm, healing atmosphere designed for peace.', icon: Wind },
    { title: 'Personalized Treatments', desc: 'Tailored sessions matching your unique needs.', icon: CheckCircle2 },
    { title: 'Experienced Therapists', desc: 'Years of clinical and spa experience.', icon: Fingerprint },
    { title: 'Calm Healing Atmosphere', desc: 'Step away from the noise of Bulawayo.', icon: Flower2 },
    { title: 'Premium Spa Experience', desc: 'Luxury products and world-class protocols.', icon: Star },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading subtitle="Why Choose Us" title="Commitment to Your Excellence" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-spa-cream rounded-3xl hover:bg-spa-deep-green hover:text-white transition-all duration-300 group shadow-sm hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-spa-gold mb-6 group-hover:bg-spa-gold group-hover:text-white transition-colors">
                 <pt.icon size={24} />
              </div>
              <h4 className="font-serif text-xl mb-3">{pt.title}</h4>
              <p className="text-sm opacity-60 leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

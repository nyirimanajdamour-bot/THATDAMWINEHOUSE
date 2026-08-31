import { FormEvent, useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Facebook, MapPin, Menu, MessageCircle, Music2, Phone, X } from 'lucide-react';

const contact = {
  phone: '021 217 368',
  phoneHref: 'tel:+85621217368',
  whatsapp: '+856 20 56 456 244',
  whatsappHref: 'https://wa.me/8562056456244',
  tiktok: '@thatdam_winehouse_2003',
  tiktokHref: 'https://www.tiktok.com/@thatdam_winehouse_2003',
  facebook: 'Thatdam Wine House Restaurant - ຮ້ານອາຫານ ທາດດຳ ວາຍເຮົາສ໌',
  facebookHref: 'https://www.facebook.com/search/pages/?q=Thatdam%20Wine%20House%20Restaurant%20Vientiane',
};

const images = {
  hero: '/images/hero/image.png',
  dish: '/images/gallery/image.png',
  salad: '/images/gallery/image copy.png',
  wine: '/images/menu/image.png',
  stupa: '/images/gallery/image copy 2.png',
};

const menuItems = [
  { name: 'Seasonal salad', description: 'Garden greens, avocado, prawns & citrus dressing', price: '—', image: images.salad, tag: 'Fresh' },
  { name: 'House selection', description: 'A considered plate to share with the table', price: '—', image: images.dish, tag: 'To share' },
  { name: 'Chef’s seasonal dish', description: 'Prepared with the best ingredients of the day', price: '—', image: images.dish, tag: 'Seasonal' },
];

const gallery = [
  { image: images.hero, label: 'Interior', size: 'tall' },
  { image: images.dish, label: 'Food', size: 'wide' },
  { image: images.wine, label: 'Wine', size: 'small' },
  { image: images.salad, label: 'Food', size: 'small' },
  { image: images.stupa, label: 'Vientiane', size: 'wide' },
];

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Starters');
  const categories = ['Starters', 'Main courses', 'Sharing plates', 'Desserts'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Back to top"><span>THATDAM</span><small>WINE HOUSE</small></button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {['Our Story', 'Menu', 'Wine', 'Gallery', 'Contact'].map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}>{item}</button>)}
          <button className="mobile-reserve" onClick={() => scrollTo('reservations')}>Reserve a table <ArrowRight size={15} /></button>
        </nav>
        <button className="nav-reserve" onClick={() => scrollTo('reservations')}>Reserve a table <ArrowRight size={15} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="hero" style={{ backgroundImage: `url("${images.hero}")` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker"><span /> Wine · Dining · Atmosphere <span /></p>
            <h1>Good wine.<br /><em>Great food.</em><br />Unforgettable evenings.</h1>
            <p className="hero-copy">A place to gather, discover, and enjoy beautiful moments over carefully selected wine and exceptional food.</p>
            <div className="hero-actions"><button className="button button-light" onClick={() => scrollTo('reservations')}>Reserve a table <ArrowRight size={16} /></button><button className="text-button" onClick={() => scrollTo('menu')}>Explore the menu <ArrowRight size={16} /></button></div>
          </div>
          <div className="hero-foot"><span>Vientiane · Laos</span><button onClick={() => scrollTo('experience')}><ArrowDown size={18} /> Scroll to discover</button><span className="hero-index">01 <i /> 04</span></div>
        </section>

        <section id="experience" className="experience section-pad">
          <div className="section-number">01 <span /></div>
          <div className="experience-grid">
            <div className="experience-image image-wrap"><img src={images.dish} alt="Beautifully plated dish at Thatdam Wine House" /></div>
            <div className="experience-copy"><SectionHeading eyebrow="The experience" title="More than dinner. It's an experience." /><p>Good food invites conversation. Good wine slows the evening down. At Thatdam Wine House, every detail is an invitation to stay a little longer — from the first pour to the last shared plate.</p><button className="outline-button" onClick={() => scrollTo('our-story')}>Discover our story <ArrowRight size={16} /></button><div className="location-note"><MapPin size={16} /> Vientiane · Laos</div></div>
          </div>
        </section>

        <section id="our-story" className="story section-pad dark-section">
          <div className="section-number section-number-light">02 <span /></div>
          <div className="story-layout"><div className="story-copy"><SectionHeading light eyebrow="Our story" title="The story behind Thatdam Wine House" /><p>A warm room, a thoughtfully poured glass, and a table made for sharing. Thatdam Wine House is a place for evenings that unfold naturally — bringing together food, wine, hospitality, and the people who make a night memorable.</p><p className="muted">This is a space for the restaurant’s story to grow. Add the details, people, and moments that make Thatdam yours.</p><button className="text-button text-button-light" onClick={() => scrollTo('menu')}>Read more <ArrowRight size={16} /></button></div><div className="story-image image-wrap"><img src={images.hero} alt="Warm wood interior and wine bar" /><span className="image-caption">A place to slow down</span></div></div>
        </section>

        <section id="menu" className="menu-section section-pad">
          <div className="section-number">03 <span /></div><SectionHeading eyebrow="The kitchen" title="From our kitchen" />
          <div className="menu-top"><p>Simple, generous cooking designed to sit beautifully beside a good glass of wine. Our menu changes with the mood of the season.</p><button className="text-button">View full menu <ArrowRight size={16} /></button></div>
          <div className="category-tabs">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          <div className="menu-grid">{menuItems.map((item) => <article className="menu-card" key={item.name}><div className="menu-card-image"><img src={item.image} alt={item.name} /><span>{item.tag}</span></div><div className="menu-card-content"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="price">{item.price}</span></div></article>)}</div>
          <p className="edit-note">Menu preview · details and prices are editable for the final restaurant menu</p>
        </section>

        <section id="wine" className="wine-section">
          <div className="wine-image" style={{ backgroundImage: `url("${images.wine}")` }}><div className="wine-image-overlay" /><span className="vertical-label">Wine, poured with intention</span></div>
          <div className="wine-content"><SectionHeading light eyebrow="The cellar" title="Discover the wine" /><p>A carefully considered selection for evenings worth remembering. Let the bottle set the pace, or ask us to find the right glass for your table.</p><div className="wine-categories">{['Red', 'White', 'Rosé', 'Sparkling'].map((item, index) => <button key={item}><span>0{index + 1}</span>{item}<ArrowRight size={16} /></button>)}</div><button className="button button-outline-light">Explore our wine selection <ArrowRight size={16} /></button></div>
        </section>

        <section className="features section-pad"><SectionHeading eyebrow="The feeling" title="Made for memorable moments" /><div className="feature-grid">{[['01', 'Wine & dining', 'Thoughtfully paired food and wine experiences.'], ['02', 'Beautiful atmosphere', 'A warm setting designed for relaxed evenings and good conversation.'], ['03', 'Private moments', 'A place for intimate dinners, celebrations, and memorable gatherings.'], ['04', 'Good company', 'Come together over food, wine, and conversation.']].map(([number, title, text]) => <article className="feature" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={18} /></article>)}</div></section>

        <section id="gallery" className="gallery-section section-pad"><div className="gallery-heading"><SectionHeading eyebrow="The atmosphere" title="A glimpse inside" /><p>Come for the wine. Stay for the feeling.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item ${item.size}`} key={item.image + index} onClick={() => setActiveGallery(index)}><img src={item.image} alt={`${item.label} at Thatdam Wine House`} /><span>{item.label} <ArrowUpRight size={15} /></span></button>)}</div></section>

        <section id="reservations" className="reservation-section section-pad dark-section"><div className="section-number section-number-light">04 <span /></div><div className="reservation-grid"><div className="reservation-intro"><SectionHeading light eyebrow="Reservations" title="Your table awaits" /><p>Planning an evening at Thatdam Wine House? Reserve your table and make it one to remember.</p><div className="direct-contact"><span>Prefer to contact us directly?</span><a href={contact.phoneHref}><Phone size={16} /> {contact.phone}</a><a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp · {contact.whatsapp}</a><a href={contact.tiktokHref} target="_blank" rel="noreferrer"><Music2 size={16} /> TikTok · {contact.tiktok}</a></div></div><div className="reservation-form-wrap">{submitted ? <div className="confirmation"><span className="confirm-icon"><Check /></span><h3>Thank you for your request.</h3><p>Your reservation enquiry has been noted for this demo. The restaurant team can connect this form to their preferred booking channel.</p><button className="text-button text-button-light" onClick={() => setSubmitted(false)}>Send another request <ArrowRight size={16} /></button></div> : <form className="reservation-form" onSubmit={submitReservation}><div className="form-row"><label>Your name<input required placeholder="Enter your name" /></label><label>Phone<input required placeholder="+856 ..." /></label></div><div className="form-row"><label>Email<input type="email" placeholder="you@example.com" /></label><label>Date<input type="date" required /></label></div><div className="form-row"><label>Preferred time<select defaultValue=""><option value="" disabled>Select a time</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option></select></label><label>Guests<select defaultValue="2"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label></div><label>Special request<textarea placeholder="Anything we should know?" rows={3} /></label><button className="button button-light" type="submit">Request a reservation <ArrowRight size={16} /></button><small>This is a demo enquiry form. A booking confirmation will be handled directly by the restaurant.</small></form>}</div></div></section>

        <section id="contact" className="location-section section-pad"><div className="location-copy"><SectionHeading eyebrow="Visit us" title="Find us in Vientiane" /><p>We look forward to welcoming you at Thatdam Wine House Restaurant.</p><div className="contact-list"><div><MapPin size={18} /><span><b>Location</b>Vientiane, Laos</span></div><div><MessageCircle size={18} /><span><b>Services</b>Dine-in · Outdoor seating · Curbside pickup</span></div><div><Phone size={18} /><span><b>Contact</b><a className="contact-link" href={contact.phoneHref}>{contact.phone}</a><br /><a className="contact-link" href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsapp}</a></span></div></div><button className="outline-button">Get directions <ArrowRight size={16} /></button></div><div className="map-placeholder"><img src={images.stupa} alt="That Dam landmark in Vientiane" /><div className="map-card"><MapPin size={18} /><div><b>Thatdam Wine House</b><span>Vientiane · Laos</span></div></div><span className="map-label">Vientiane · Laos</span></div></section>

        <section className="social-section"><div className="social-head"><SectionHeading eyebrow="Follow along" title="Follow the experience" /><a className="text-button" href={contact.tiktokHref} target="_blank" rel="noreferrer">TikTok <ArrowRight size={16} /></a></div><div className="social-grid">{[images.hero, images.dish, images.wine, images.salad].map((image, index) => <a href={contact.tiktokHref} target="_blank" rel="noreferrer" key={image + index}><img src={image} alt="Thatdam Wine House atmosphere" /><span><Music2 size={18} /> {contact.tiktok}</span></a>)}</div></section>
      </main>

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><button className="wordmark wordmark-footer" onClick={() => scrollTo('home')}><span>THATDAM</span><small>WINE HOUSE</small></button><p>Wine, dining, and memorable evenings in Vientiane.</p></div><div className="footer-links"><span>Explore</span>{['Home', 'Our Story', 'Menu', 'Wine', 'Gallery', 'Reservations', 'Contact'].map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}>{item}</button>)}</div><div className="footer-contact"><span>Contact</span><p>Thatdam Wine House Restaurant<br />Vientiane, Laos</p><a className="footer-phone" href={contact.phoneHref}>{contact.phone}</a><a className="footer-phone" href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsapp}</a><div><a href={contact.tiktokHref} target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={17} /></a><a href={contact.facebookHref} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a></div></div></div><div className="footer-bottom"><span>© 2026 Thatdam Wine House. All rights reserved.</span><span>Wine · Dining · Atmosphere</span></div></footer>

      {activeGallery !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveGallery(null)}><button className="lightbox-close" onClick={() => setActiveGallery(null)} aria-label="Close gallery"><X /></button><img src={gallery[activeGallery].image} alt={gallery[activeGallery].label} onClick={(event) => event.stopPropagation()} /><span>{gallery[activeGallery].label}</span></div>}
      <button className="mobile-sticky-reserve" onClick={() => scrollTo('reservations')}>Reserve a table <ArrowRight size={16} /></button>
    </div>
  );
}

export default App;

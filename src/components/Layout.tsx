import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#f0f4f8] flex flex-col" style={{ background: 'radial-gradient(at top left, #e0eafc, #cfdef3), radial-gradient(at bottom right, #fdfcfb, #e2d1c3)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/20 px-6 py-4 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight text-slate-800 uppercase">
          <BookOpen className="w-8 h-8" />
          <span>CPE FORMATION</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-indigo-600 uppercase tracking-widest text-sm ${
                location.pathname === link.path ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 uppercase tracking-widest text-xs"
          >
            Nous contacter
          </Link>
        </div>
        {/* Mobile Menu Button - Keeping it simple for now, can expand later if needed */}
        <div className="md:hidden flex items-center">
           <Link to="/contact" className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Inspired by the bottom section of the image */}
      <footer className="bg-slate-900 text-white mt-12 rounded-t-[3rem] overflow-hidden shadow-2xl border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-8">
              <BookOpen className="w-8 h-8" />
              <span>CPE FORMATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
              Commencez votre<br />
              préparation avec nous<br />
              <span className="font-bold">dès aujourd'hui !</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 opacity-80" />
              <div>
                <p className="font-semibold opacity-80 text-sm uppercase tracking-wider">E-mail</p>
                <a href="mailto:CPE_FORMATION@gmail.com" className="hover:underline">CPE_FORMATION@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 opacity-80" />
              <div>
                <p className="font-semibold opacity-80 text-sm uppercase tracking-wider">Téléphone</p>
                <p>06 07 08 08 09</p>
                <p className="text-sm opacity-80">Anthony & SOPHIE</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 opacity-80" />
              <div>
                <p className="font-semibold opacity-80 text-sm uppercase tracking-wider">Localisation</p>
                <p>100% en ligne (PARIS RP)</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

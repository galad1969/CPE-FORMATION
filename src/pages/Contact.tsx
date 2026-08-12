import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    // Simulate form submission
    setTimeout(() => {
      setFormState({ status: 'success' });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState({ status: 'idle' }), 5000);
    }, 1500);
  };

  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Contactez <span className="text-indigo-600">notre équipe</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Vous avez des questions sur nos fiches ou nos entretiens blancs ? 
              Anthony et Sophie sont à votre disposition pour vous orienter.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 bg-white/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-sm">
              <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Par e-mail</h3>
                <a href="mailto:CPE_FORMATION@gmail.com" className="font-bold text-slate-800 text-sm hover:text-indigo-600 transition-colors">
                  CPE_FORMATION@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-sm">
              <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Par téléphone</h3>
                <p className="font-bold text-slate-800 text-sm">06 07 08 08 09</p>
                <p className="text-xs text-slate-500 mt-1">Demandez Anthony ou Sophie</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white/40 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-sm">
              <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Localisation</h3>
                <p className="font-bold text-slate-800 text-sm">PARIS RP</p>
                <p className="text-xs text-slate-500 mt-1">Services dispensés 100% en ligne</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex-1 flex flex-col"
        >
          <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Prénom</label>
                <input 
                  type="text" 
                  id="firstName" 
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Nom</label>
                <input 
                  type="text" 
                  id="lastName" 
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Email Professionnel</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="jean.dupont@exemple.fr"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Sujet</label>
              <select 
                id="subject"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
              >
                <option value="infos" className="text-slate-900">Demande d'informations</option>
                <option value="fiches" className="text-slate-900">Achat de fiches d'apprentissage</option>
                <option value="entretien" className="text-slate-900">Réserver un entretien blanc</option>
                <option value="autre" className="text-slate-900">Autre demande</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 block">Votre Message</label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
                placeholder="Dites-nous en plus sur votre projet..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formState.status !== 'idle'}
              className="w-full bg-white text-slate-900 font-bold py-4 mt-2 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-white/5 uppercase text-xs tracking-widest disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {formState.status === 'submitting' ? (
                'Envoi en cours...'
              ) : formState.status === 'success' ? (
                'Message envoyé !'
              ) : (
                <>Envoyer la demande <Send className="w-4 h-4" /></>
              )}
            </button>
            
            {formState.status === 'success' && (
              <p className="text-center text-green-400 font-medium text-sm mt-4">
                Merci ! Nous vous recontacterons très vite.
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </div>
  );
}

import { ArrowRight, CheckCircle2, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import personStudyingImg from '../assets/images/person_studying_1786538411046.jpg';

export default function Home() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Réussissez votre <br />
            <span className="font-bold text-indigo-600">diplôme de CPE</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Nous vous accompagnons vers la réussite avec des fiches de formation, 
            des conseils experts et un soutien personnalisé.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
          >
            Commencer maintenant <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-lg rounded-[3rem] p-8 md:p-12 shadow-sm border border-white/40 relative overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] flex flex-col justify-end group"
        >
          <img 
            src={personStudyingImg} 
            alt="Personne révisant des cours" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
          
          <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm">
            <p className="text-2xl font-bold text-indigo-600 mb-2">Un accompagnement sur-mesure</p>
            <p className="text-slate-600 font-medium">100% en ligne, adapté à votre rythme et à vos besoins spécifiques pour le concours.</p>
          </div>
        </motion.div>
      </section>

      {/* Stats/Highlights inspired by "Notre entreprise aujourd'hui" */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 text-center shadow-sm"
        >
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold mb-4 text-slate-800">100%</h3>
          <p className="font-medium text-slate-500 text-sm">Fiches de révision optimisées pour le programme officiel.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 text-center shadow-sm"
        >
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold mb-4 text-slate-800">2</h3>
          <p className="font-medium text-slate-500 text-sm">Formateurs dévoués, Anthony & Sophie, à votre écoute.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-10 text-center shadow-sm"
        >
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold mb-4 text-slate-800">Top</h3>
          <p className="font-medium text-slate-500 text-sm">Préparation intensive avec des examens et entretiens blancs.</p>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 rounded-l-[5rem]" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nos services <br />
              <span className="text-indigo-600">clés en main</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Une méthode éprouvée pour maximiser vos chances de réussite au diplôme de Conseiller Principal d'Éducation.
            </p>
            <Link to="/services" className="text-indigo-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Découvrir nos offres <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="lg:col-span-3 grid gap-4">
            {['Fiches d’apprentissage synthétiques et complètes', 'Aide et conseils personnalisés en visio', 'Entraînements aux entretiens et examens blancs'].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-indigo-600 rounded-xl p-2 text-white shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-slate-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

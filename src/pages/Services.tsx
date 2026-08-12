import { motion } from 'motion/react';
import { FileText, MessageCircle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Fiches d'apprentissage",
      description: "Gagnez un temps précieux avec nos fiches de révision synthétiques. Elles couvrent l'intégralité du programme, mettent en lumière les concepts clés et sont conçues pour faciliter la mémorisation rapide avant les épreuves.",
      color: "bg-white/40"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Aide et conseils personnalisés",
      description: "Vous n'êtes jamais seul face à vos doutes. Profitez d'échanges réguliers en visio pour poser vos questions, débloquer des points incompris et structurer votre planning de révision de manière optimale.",
      color: "bg-white/40"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Entretien et examens blancs",
      description: "La clé de la réussite à l'oral, c'est la pratique. Nous organisons des mises en situation réelles avec des jurys blancs pour vous entraîner à la prise de parole, la gestion du stress et la structuration de votre discours.",
      color: "bg-white/40"
    }
  ];

  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Notre offre de <br />
            <span className="text-indigo-600">soutien complet</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Trois piliers fondamentaux pour sécuriser votre parcours et aborder 
            le diplôme de CPE avec sérénité et assurance.
          </p>
        </motion.div>
      </section>

      {/* Services Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-sm flex flex-col h-full border border-white/40 hover:border-white/60 transition-colors"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-white/40 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl"
        >
          {/* Abstract background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à accélérer votre préparation ?
            </h2>
            <p className="text-slate-300 mb-10">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et définir ensemble le plan d'action qui vous mènera au succès.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-50 transition-colors shadow-lg shadow-white/5"
            >
              Demander un entretien <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <section className="max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            L'histoire de <br />
            <span className="text-indigo-600">notre mission</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nés de la passion pour l'éducation et la transmission, nous avons créé CPE Formation 
            pour offrir un accompagnement humain et efficace à tous les candidats.
          </p>
        </motion.div>
      </section>

      {/* Main Content Area - Asymmetrical split like reference design */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col - Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Qui sommes-nous ?</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous sommes Anthony et Sophie, experts de l'accompagnement éducatif. Forts de notre 
              expérience sur le terrain et de notre connaissance pointue des exigences du concours, 
              nous avons décidé d'unir nos forces.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Notre constat était simple : de nombreux candidats brillants échouent par manque de 
              méthodologie ou de préparation aux oraux. C'est ce vide que nous comblons aujourd'hui.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
             <BookOpen className="w-10 h-10 mb-6 text-indigo-400" />
             <p className="text-xl font-medium leading-relaxed italic">
               "Notre objectif est de transformer votre stress en confiance, et vos connaissances en compétences d'examen."
             </p>
             <p className="mt-6 font-bold">— Anthony & Sophie</p>
          </div>
        </motion.div>

        {/* Right Col - Visual/Mission */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7 bg-white/60 backdrop-blur-lg border border-white/40 rounded-[3rem] overflow-hidden shadow-sm flex flex-col h-full min-h-[500px]"
        >
          <div className="bg-white/20 p-12 flex-grow flex items-center justify-center relative overflow-hidden">
             {/* Decorative abstract elements */}
             <div className="absolute top-10 right-10 w-32 h-32 bg-white/60 rounded-full blur-2xl" />
             <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-2xl" />
             
             <h3 className="text-3xl md:text-4xl font-bold text-slate-800 text-center relative z-10 max-w-lg">
               Une approche <span className="text-indigo-600">100% en ligne</span> pour s'adapter à votre vie.
             </h3>
          </div>
          <div className="p-10 md:p-12 border-t border-white/20">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Notre philosophie</h3>
            <p className="text-lg font-medium text-slate-600 leading-relaxed">
              Nous croyons qu'un accompagnement réussi repose sur des outils clairs (nos fiches) 
              et une écoute attentive (nos entretiens). Nous ne sommes pas qu'une plateforme, 
              nous sommes vos partenaires de révision, basés à Paris, connectés partout.
            </p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

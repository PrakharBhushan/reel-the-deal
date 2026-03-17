import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.25, 0.1, 0, 1] } }
            }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-amber-500 text-xs font-semibold tracking-wider uppercase mb-6">
              Premium Visual Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
              Elevating Brands Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic font-light">Cinematic</span> Storytelling.
            </h1>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.25, 0.1, 0, 1] } }
            }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Based in Mumbai, delivering world-class photography, videography, and post-production services for diverse, high-end projects globally.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.25, 0.1, 0, 1] } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-zinc-950 text-base font-semibold hover:bg-amber-400 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Book an Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-transparent border border-zinc-700 text-white text-base font-medium hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 w-full sm:w-auto justify-center text-center"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

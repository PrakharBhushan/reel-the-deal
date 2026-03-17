import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Gear</h2>
          <p className="text-zinc-400 text-lg font-light">
            We use industry-leading equipment to capture your vision in stunning detail, ensuring every frame meets the highest professional standards.
          </p>
        </div>

        {/* High-Impact Custom Gear Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-amber-500 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.2)]"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-20 h-20 shrink-0 rounded-full bg-zinc-950 flex items-center justify-center text-amber-500 shadow-xl">
              <Lightbulb size={40} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mb-4 tracking-tight uppercase">
                We Can Arrange <span className="text-white drop-shadow-md">ANY</span> Camera & Lighting Setup
              </h3>
              <p className="text-zinc-900 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                We scale our gear to match your exact vision. From ARRI and RED cinema cameras to massive Profoto or Aputure lighting arrays—if your project demands it, we'll provide it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

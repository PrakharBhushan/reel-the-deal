import { motion } from 'motion/react';
import { Calendar, PhoneCall, Camera, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book an Appointment',
    description: 'Select a convenient date, time, and the specific service you require through our seamless booking portal.',
  },
  {
    icon: PhoneCall,
    title: 'Discovery Call',
    description: 'We connect with you to dive deep into your project specifics, creative vision, and unique requirements.',
  },
  {
    icon: Camera,
    title: 'Execution',
    description: 'Our expert team arrives on-location for the shoot, or we receive your raw files for dedicated post-production.',
  },
  {
    icon: PackageCheck,
    title: 'Delivery',
    description: 'Receive your premium, meticulously crafted final assets, ready to elevate your brand presence.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Workflow</h2>
          <p className="text-zinc-400 text-lg font-light">
            A streamlined, professional process designed to bring your vision to life with minimal friction and maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-zinc-800 via-amber-500/50 to-zinc-800 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-amber-500/50 group-hover:bg-zinc-800 transition-all duration-500 shadow-xl">
                <step.icon size={32} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <div className="text-amber-500 font-mono text-sm mb-3 opacity-60">Step 0{index + 1}</div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-100">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

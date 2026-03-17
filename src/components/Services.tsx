import { motion } from 'motion/react';
import { Image as ImageIcon, Users, Video, Film, LayoutGrid, Scissors, Mic, Plane, PartyPopper, Shirt, Home } from 'lucide-react';

const services = [
  {
    icon: ImageIcon,
    title: 'Product Photoshop & Retouching',
    description: 'Flawless, high-end retouching to make your products stand out in e-commerce and print.',
    price: '₹2,500 / image',
  },
  {
    icon: Users,
    title: 'Portrait Photoshoot',
    description: 'Professional portraiture capturing personality and essence for corporate or personal branding.',
    price: '₹5,000 / image',
  },
  {
    icon: Video,
    title: 'Full Length Video Shoot',
    description: 'Cinematic video production tailored for commercials, documentaries, and brand stories.',
    price: '₹10,000 / video',
  },
  {
    icon: Film,
    title: 'Social Media Reel',
    description: 'Highly engaging, trend-aware short-form videos optimized for Instagram and TikTok.',
    price: '₹5,000 / reel',
  },
  {
    icon: LayoutGrid,
    title: 'Social Media Post',
    description: 'Curated, visually cohesive static graphics and photos to maintain a premium grid aesthetic.',
    price: '₹2,500 / post',
  },
  {
    icon: Scissors,
    title: 'Video Editing (Reel)',
    description: 'Expert post-production for short-form content, including pacing, captions, and trending audio.',
    price: '₹3,000 / reel',
  },
  {
    icon: Film,
    title: 'Video Editing (Full Length)',
    description: 'Comprehensive editing for long-form videos including color grading, sound design, and VFX.',
    price: '₹6,000 / video',
  },
  {
    icon: Mic,
    title: 'Professional VoiceOver',
    description: 'Studio-quality voiceover recordings to add narrative depth to your visual content.',
    price: '₹5,000 (AI) / ₹10,000 (Human)',
  },
  {
    icon: Plane,
    title: 'Drone Shoot (Full Length Video)',
    description: 'Breathtaking 4K aerial cinematography and photography for unique, expansive perspectives.',
    price: '₹10,000',
  },
  {
    icon: PartyPopper,
    title: 'Multi-Camera Setup Events with Live Edit',
    description: 'Comprehensive coverage of events with multiple angles and real-time live editing for immediate delivery.',
    price: '₹40,000',
  },
  {
    icon: Home,
    title: 'Real Estate Shoot (Drone, VO, Edited)',
    description: 'Complete real estate package featuring drone footage, professional voiceover, and full editing.',
    price: '₹20,000',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-900/30 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Premium Services</h2>
            <p className="text-zinc-400 text-lg font-light">
              A comprehensive suite of visual media services, executed with uncompromising quality and attention to detail.
            </p>
          </div>
          <a href="#contact" className="text-amber-500 hover:text-amber-400 font-medium flex items-center gap-2 transition-colors">
            Request Custom Quote <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-zinc-950 border border-zinc-800/80 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
              
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-zinc-100 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8 h-16">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50">
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Starting at</span>
                <span className="text-lg font-medium text-amber-500">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

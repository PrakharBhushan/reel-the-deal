import { motion } from 'motion/react';

// UPDATE IMAGE URLS HERE
// Replace the Unsplash URLs with your actual portfolio image URLs
const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Watch Campaign',
    category: 'Product Photography',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Urban Fashion Editorial',
    category: 'Fashion Shoot',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Corporate Identity',
    category: 'Portraiture',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Coastal Drone Survey',
    category: 'Aerial Cinematography',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    title: 'Modern Villa Walkthrough',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 6,
    title: 'Tech Launch Event',
    category: 'Event Coverage',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Selected Works</h2>
          <p className="text-zinc-400 text-lg font-light">
            A curated showcase of our finest visual narratives, demonstrating our commitment to aesthetic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-xl font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 text-white text-base font-medium hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              Discuss Your Project
            </a>
        </div>
      </div>
    </section>
  );
}

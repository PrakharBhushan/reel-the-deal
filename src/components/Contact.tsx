import { motion } from 'motion/react';
import { CalendarIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-900/30 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's Create <br/><span className="text-amber-500 italic font-light">Together.</span></h2>
              <p className="text-zinc-400 text-lg font-light mb-10 max-w-md">
                Ready to elevate your brand's visual identity? Fill out the form to request a discovery call and secure your booking.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-2">Base Location</h4>
                  <p className="text-zinc-200 text-lg">Mumbai, India</p>
                  <p className="text-zinc-500 text-sm mt-1">Available for travel globally.</p>
                </div>
                <div>
                  <h4 className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-2">Direct Contact</h4>
                  <p className="text-zinc-200 text-lg">thepbdesigns@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">Service Needed</label>
                  <select 
                    id="service" 
                    defaultValue=""
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="product">Product Photoshop & Retouching</option>
                    <option value="portrait">Portrait Photoshoot</option>
                    <option value="video">Full Length Video Shoot</option>
                    <option value="reels">Social Media Reel</option>
                    <option value="static">Social Media Post</option>
                    <option value="editing-reel">Video Editing (Reel)</option>
                    <option value="editing-full">Video Editing (Full Length)</option>
                    <option value="voiceover">Professional VoiceOver</option>
                    <option value="drone">Drone Shoot (Full Length Video)</option>
                    <option value="event">Full Night Event (Reels & Full Length)</option>
                    <option value="realestate">Real Estate Shoot (Drone, VO, Edited)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-zinc-400">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
                      required
                    />
                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Project Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your vision, requirements, and any specific deliverables..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-white text-zinc-950 text-base font-bold hover:bg-amber-500 hover:text-white transition-all duration-300 mt-4"
              >
                Request Call & Book
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

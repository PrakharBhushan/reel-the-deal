import { Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950 text-sm font-bold">RTD</span>
              Reel The <span className="text-amber-500 font-light">Deal</span>
            </a>
            <p className="text-zinc-500 text-sm max-w-xs font-light">
              Premium visual storytelling and media production based in Mumbai, serving clients globally.
            </p>
          </div>

          <div className="flex gap-4">
            {/* UPDATE SOCIAL LINKS HERE */}
            <a 
              href="https://youtube.com/@bullfam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
              aria-label="YouTube - bullfam"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://instagram.com/programmingwale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
              aria-label="Instagram - programmingwale"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-light">
          <p>&copy; {new Date().getFullYear()} Reel The Deal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

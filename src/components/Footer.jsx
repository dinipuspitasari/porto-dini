import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-[3px] border-neo-black py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <h2 className="font-h2 text-3xl font-bold">Dini Puspitasari</h2>
        
        <div className="flex gap-4">
          <a href="mailto:aphantor@gmail.com" className="neo-border neo-shadow neo-shadow-hover p-3 bg-white hover:bg-neo-yellow transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com/dinipuspitasari" className="neo-border neo-shadow neo-shadow-hover p-3 bg-white hover:bg-neo-salmon transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dini-puspitasari/" className="neo-border neo-shadow neo-shadow-hover p-3 bg-white hover:bg-neo-green transition-colors">
            <Linkedin size={24} />
          </a>
          {/* <a href="#" className="neo-border neo-shadow neo-shadow-hover p-3 bg-white hover:bg-neo-yellow transition-colors">
            <Terminal size={24} />
          </a> */}
        </div>

        <p className="font-body text-neo-black/60 text-sm">
          © 2026 Dini Puspitasari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

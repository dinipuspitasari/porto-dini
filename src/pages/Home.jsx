import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code, Mail, Terminal, Database, CloudUpload, Github, Linkedin, MessageSquare, GraduationCap, Briefcase, Users } from 'lucide-react';

export default function Home() {
  const stack = [
    { name: 'JavaScript', icon: <Terminal size={18} />, color: 'bg-neo-yellow' },
    { name: 'React', icon: <Code size={18} />, color: 'bg-neo-green' },
    { name: 'PHP', icon: <Terminal size={18} />, color: 'bg-neo-salmon' },
    { name: 'Laravel', icon: <Code size={18} />, color: 'bg-neo-salmon' },
    { name: 'Netlify', icon: <CloudUpload size={18} />, color: 'bg-white' },
    { name: 'Vercel', icon: <CloudUpload size={18} />, color: 'bg-neo-yellow' },
    { name: 'AppSheet', icon: <Database size={18} />, color: 'bg-neo-green' },
    { name: 'Tailwind CSS', icon: <Code size={18} />, color: 'bg-neo-salmon' },
    { name: 'HTML', icon: <Code size={18} />, color: 'bg-neo-yellow' },
    { name: 'Python', icon: <Terminal size={18} />, color: 'bg-neo-green' },
    { name: 'Vite', icon: <Terminal size={18} />, color: 'bg-neo-yellow' },
    { name: 'WordPress', icon: <Code size={18} />, color: 'bg-white' },
    { name: 'MySQL', icon: <Database size={18} />, color: 'bg-neo-salmon' },
    { name: 'Canva', icon: <Code size={18} />, color: 'bg-neo-green' },
    { name: 'Git', icon: <Github size={18} />, color: 'bg-white' },
    { name: 'Figma', icon: <Code size={18} />, color: 'bg-neo-salmon' },
    { name: 'CSS', icon: <Code size={18} />, color: 'bg-neo-yellow' },
  ];

  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-12">
        <div className="flex-1 flex flex-col gap-6">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-h1 text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm Dini Puspitasari.<br />Front End Developer & Project Manager.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-xl text-neo-black/70 max-w-2xl"
          >
            Front-End Web Developer passionate about crafting intuitive and impactful digital experiences. Currently focusing on building responsive interfaces with Laravel while growing expertise as a Project Manager through structured planning, collaboration, and project execution.
          </motion.p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/projects" className="neo-border neo-shadow neo-shadow-hover bg-neo-yellow px-8 py-4 font-label text-lg uppercase font-bold flex items-center gap-2">
              <Code size={20} /> Explore Projects
            </Link>
            <Link to="/contact" className="neo-border neo-shadow neo-shadow-hover bg-white px-8 py-4 font-label text-lg uppercase font-bold flex items-center gap-2 text-neo-black">
              <Mail size={20} /> Get In Touch
            </Link>
          </div>
        </div>

        <div className="flex-1 relative hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full aspect-square bg-neo-salmon neo-border neo-shadow p-6 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white z-0 m-8 neo-border" />
            <img 
              src="/foto.png" 
              alt="Dini Puspitasari" 
              className="w-full h-full object-cover neo-border z-10 relative grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* About Me Section (Timeline) */}
      <section className="flex flex-col gap-8">
        <h2 className="font-h2 text-4xl md:text-5xl font-bold border-b-[5px] border-neo-black inline-block self-start pb-2">
          About Me
        </h2>
        
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[5px] bg-neo-black md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {[
              {
                type: 'Education',
                title: 'Universitas Bina Sarana Informatika (BSI)',
                desc: 'Information Technology Student (2021-2025)',
                icon: <GraduationCap size={24} />,
                color: 'bg-neo-yellow',
                align: 'left'
              },
              {
                type: 'Education',
                title: 'Infinite Learning',
                desc: 'Web Development (Aug - Dec 2023)',
                icon: <GraduationCap size={24} />,
                color: 'bg-neo-yellow',
                align: 'right'
              },
              {
                type: 'Experience',
                title: 'Pusdiklat Kominfo',
                desc: ' Web Developer - Pusdikat - Internship (Sep - Dec 2024)',
                icon: <Briefcase size={24} />,
                color: 'bg-neo-salmon',
                align: 'left'
              },
              {
                type: 'Experience',
                title: 'PT Kaliandra Setyatama',
                desc: 'Web Developer - Freelance (Dec 2024 - Jan 2025)',
                icon: <Briefcase size={24} />,
                color: 'bg-neo-salmon',
                align: 'right'
              },
              {
                type: 'Organization',
                title: 'BEM Fakultas Teknik dan Informatika',
                desc: 'Media Coordinator (Oct 2023 - Jun 2024)',
                icon: <Users size={24} />,
                color: 'bg-neo-green',
                align: 'left'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  item.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-[-42px] md:left-1/2 top-4 md:top-auto w-10 h-10 ${item.color} neo-border md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[3px_3px_0px_#111111]`}>
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] bg-white neo-border neo-shadow p-6 ${
                  item.align === 'left' ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <span className={`inline-block px-3 py-1 ${item.color} neo-border font-label text-xs font-bold uppercase mb-3`}>
                    {item.type}
                  </span>
                  <h3 className="font-h3 text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="font-body text-neo-black/60 italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="flex flex-col gap-8">
        <h2 className="font-h2 text-4xl md:text-5xl font-bold border-b-[5px] border-neo-black inline-block self-start pb-2">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4">
          {stack.map((item, index) => (
            <motion.span 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${item.color} neo-border px-4 py-2 font-label text-sm font-bold uppercase tracking-widest flex items-center gap-2`}
            >
              {item.icon} {item.name}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="flex flex-col gap-8">
        <h2 className="font-h2 text-4xl md:text-5xl font-bold border-b-[5px] border-neo-black inline-block self-start pb-2">
          Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://github.com/dinipuspitasari" className="bg-white neo-border neo-shadow neo-shadow-hover p-8 flex items-center justify-between group">
            <div className="flex flex-col gap-1">
              <span className="font-h3 text-3xl font-bold">GitHub</span>
              <span className="font-body text-neo-black/60">View My Repositories</span>
            </div>
            <div className="bg-neo-yellow p-4 neo-border group-hover:bg-neo-salmon transition-colors">
              <Github size={32} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dini-puspitasari/" className="bg-white neo-border neo-shadow neo-shadow-hover p-8 flex items-center justify-between group">
            <div className="flex flex-col gap-1">
              <span className="font-h3 text-3xl font-bold">LinkedIn</span>
              <span className="font-body text-neo-black/60">Professional Network</span>
            </div>
            <div className="bg-neo-yellow p-4 neo-border group-hover:bg-neo-green transition-colors">
              <Linkedin size={32} />
            </div>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neo-yellow neo-border neo-shadow p-12 md:p-24 flex flex-col items-center text-center gap-8">
        <h2 className="font-h2 text-4xl md:text-6xl font-bold">Interested in working with me?</h2>
        <p className="font-body text-xl max-w-3xl">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a specific proposal or just want to say hi, let's talk!
        </p>
        <Link to="/contact" className="bg-white neo-border neo-shadow neo-shadow-hover px-12 py-6 font-h3 text-2xl font-bold flex items-center gap-4 mt-4">
          <MessageSquare size={32} /> Open for Discussion
        </Link>
      </section>
    </div>
  );
}

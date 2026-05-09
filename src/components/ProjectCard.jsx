import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectCard({ title, image, tech, description, link, color }) {
  return (
    <motion.article 
      whileHover={{ y: -5, x: -5 }}
      style={{ backgroundColor: color }}
      className="neo-border neo-shadow flex flex-col h-full group"
    >
      <div className="h-56 border-b-[3px] border-neo-black overflow-hidden bg-white">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow gap-4">
        <h3 className="font-h3 text-2xl font-bold">{title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span 
              key={t} 
              className="neo-border bg-white px-2 py-1 text-xs font-label font-bold uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
        
        <p className="font-body text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="neo-border neo-shadow neo-shadow-hover bg-white py-2 px-4 font-label text-sm uppercase font-bold flex items-center justify-center gap-2 mt-4"
        >
          Visit Website <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}

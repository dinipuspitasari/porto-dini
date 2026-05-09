import { motion } from 'motion/react';

export default function CertificateCard({ title, image, color }) {
  return (
    <motion.article 
      whileHover={{ y: -5, x: -5 }}
      style={{ backgroundColor: color }}
      className="neo-border neo-shadow flex flex-col h-full group"
    >
      <div className="aspect-[4/3] border-b-[3px] border-neo-black overflow-hidden bg-white">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow items-center justify-center text-center">
        <h3 className="font-h3 text-xl font-bold leading-tight">{title}</h3>
      </div>
    </motion.article>
  );
}

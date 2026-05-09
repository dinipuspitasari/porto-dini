import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';
import projectData from '../data/projects.json';
import certificateData from '../data/certificates.json';

export default function ProjectsPage() {
  return (
    <div className="py-12 flex flex-col gap-24 pt-24">
      {/* Projects Section */}
      <section className="flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-h1 text-5xl md:text-7xl font-bold"
          >
            Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xl text-neo-black/70 max-w-2xl"
          >
            A collection of recent technical work, focusing on robust architecture and clear interfaces.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-h2 text-4xl md:text-6xl font-bold border-b-[5px] border-neo-black inline-block self-start pb-2"
          >
            Certificates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-xl text-neo-black/70 max-w-2xl"
          >
            A recognition of my continuous learning journey and technical proficiency.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

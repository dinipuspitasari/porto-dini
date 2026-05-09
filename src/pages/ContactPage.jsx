import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/aphantor@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New Message from ${formData.name} - Portfolio`,
            _template: "table" // Menggunakan template table yang rapi dari formsubmit
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 flex flex-col items-center gap-12 pt-24 min-h-[80vh]">
      <header className="text-center flex flex-col gap-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-h1 text-5xl md:text-7xl font-bold"
        >
          Let's Collaborate
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-xl text-neo-black/70"
        >
          Drop a message and let's build something structurally sound.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-2xl bg-white neo-border neo-shadow p-8 md:p-12 relative"
      >
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-neo-salmon neo-border neo-shadow" />
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label text-sm font-bold uppercase tracking-widest">Name</label>
            <input 
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full neo-border p-4 bg-neo-cream font-body focus:bg-white focus:shadow-[7px_7px_0px_#111111] transition-all outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label text-sm font-bold uppercase tracking-widest">Email</label>
            <input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full neo-border p-4 bg-neo-cream font-body focus:bg-white focus:shadow-[7px_7px_0px_#111111] transition-all outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label text-sm font-bold uppercase tracking-widest">No. handphone/whatsapp</label>
            <input 
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full neo-border p-4 bg-neo-cream font-body focus:bg-white focus:shadow-[7px_7px_0px_#111111] transition-all outline-none"
              placeholder="+62..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label text-sm font-bold uppercase tracking-widest">Message</label>
            <textarea 
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full neo-border p-4 bg-neo-cream font-body focus:bg-white focus:shadow-[7px_7px_0px_#111111] transition-all outline-none resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-neo-green neo-border p-4 flex items-center gap-3 font-bold mt-2">
              <CheckCircle size={24} /> Message sent successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-neo-salmon neo-border p-4 flex items-center gap-3 font-bold mt-2">
              <AlertCircle size={24} /> Failed to send message. Please try again.
            </div>
          )}

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full neo-border neo-shadow neo-shadow-hover bg-neo-yellow py-6 font-h3 text-2xl font-bold uppercase flex items-center justify-center gap-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neo-salmon transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={24} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

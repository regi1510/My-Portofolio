import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "What is your typical project timeline?", a: "Most projects take between 6 to 12 weeks, depending on the complexity and scope. We ensure every detail is perfected before launch." },
  { q: "Do you work with international clients?", a: "Yes, we work with clients globally. Our digital-first approach allows us to collaborate seamlessly across time zones." },
  { q: "What technologies do you use?", a: "We specialize in React, Next.js, WebGL, Three.js, and integrate Gemini AI for advanced workflows and dynamic content." },
  { q: "How do we start a project?", a: "Simply reach out via our contact form. We'll schedule a discovery call to understand your vision and see if we're a good fit." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#050503] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif">Common <span className="italic text-purple-300">Questions</span></h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a080c]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium">{faq.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-purple-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

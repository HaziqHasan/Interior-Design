import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-6 text-[#2c2c2c]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Client Testimonials
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Hear from those who trusted us with their spaces
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 border border-gray-200 hover:border-[#d4af37] transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p
                className="text-gray-700 mb-6 italic text-lg leading-relaxed"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p
                  className="font-semibold text-[#2c2c2c] text-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-sm text-gray-500"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all ${
                index === currentIndex ? 'w-8 bg-[#d4af37]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

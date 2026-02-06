import { motion } from 'framer-motion';
import { aboutContent, milestones } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl mb-6 text-[#2c2c2c]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {aboutContent.headline}
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl mb-4 text-[#d4af37]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Story
              </h3>
              <p
                className="text-gray-700 leading-relaxed text-lg"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {aboutContent.story}
              </p>
            </div>
            <div>
              <h3
                className="text-2xl mb-4 text-[#d4af37]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Philosophy
              </h3>
              <p
                className="text-gray-700 leading-relaxed text-lg"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {aboutContent.philosophy}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl mb-4 text-[#d4af37]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Approach
            </h3>
            <p
              className="text-gray-700 leading-relaxed text-lg mb-8"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {aboutContent.approach}
            </p>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                alt="Design process"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="text-3xl mb-12 text-center text-[#2c2c2c]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Journey
          </h3>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div
                  className="text-4xl font-bold text-[#d4af37] min-w-[100px]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {milestone.year}
                </div>
                <div className="flex-1 border-l-2 border-[#d4af37] pl-8 pb-8">
                  <h4
                    className="text-2xl mb-2 text-[#2c2c2c]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {milestone.title}
                  </h4>
                  <p
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

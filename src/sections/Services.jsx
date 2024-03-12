import { services } from '../constants';
import ServiceCard from '../ui/ServiceCard';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      className="max-container flex flex-wrap justify-center gap-9"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {services.map((service) => (
        <ServiceCard key={service.heading} {...service} />
      ))}
    </motion.div>
  );
}

export default Services;

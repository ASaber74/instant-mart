import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
function SuperQuality() {
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
      ref={ref}
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col "
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold capitalize text-grey-6 lg:max-w-lg">
          We Provide You <span className="text-brand-6">Super Quality </span>
          Books
        </h1>
        <br className="hidden sm:flex" />
        <p className="text-md mt-2 leading-6 text-grey-4 lg:max-w-lg lg:leading-8">
          we believe that every reader deserves the finest quality books that
          not only entertain but also inspire. That's why we meticulously curate
          our collection, hand-selecting each title for its literary merit,
          craftsmanship, and enduring appeal. From beautifully bound hardcovers
          to meticulously printed paperbacks.
        </p>
        <p className="text-md mt-2 leading-6 text-grey-4 lg:max-w-lg lg:leading-8">
          our commitment to quality shines through in every book we offer. With
          each turn of the page, immerse yourself in the richness of
          storytelling and experience the difference that exceptional quality
          makes. Welcome to a world where every book is a masterpiece waiting to
          be discovered.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          alt="reading svg"
          src="..\images\undraw_book_lover_re_rwjy.svg"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </motion.div>
  );
}

export default SuperQuality;

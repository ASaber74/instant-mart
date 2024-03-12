import { reviews } from '../constants';
import ReviewCard from '../ui/ReviewCard';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function CustomerReviews() {
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
      className="max-container"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h1 className="text-center text-4xl font-bold text-grey-6">
        What Our <span className="text-brand-6">Customers</span> Say?
      </h1>
      <p className="m-auto mt-4 max-w-lg text-center text-grey-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default CustomerReviews;

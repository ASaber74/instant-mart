import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Subscribe() {
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
      className="max-container flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h3 className="text-4xl font-bold leading-[68px] text-grey-6 lg:max-w-md">
        Sign Up for <span className="text-brand-6">Updates </span>& Newsletter
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-grey-3 lg:max-h-16 lg:max-w-[40%] ">
        <input
          type="text"
          placeholder="subscribe@instantmart.com"
          className="border bg-transparent pl-5 text-base leading-normal text-grey-5 outline-none max-sm:w-full max-sm:rounded-full max-sm:border-grey-5 max-sm:p-5 sm:flex-1 sm:border-none"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <button className=" flex w-full items-center justify-center gap-2 rounded-full border border-brand-6 bg-brand-6 px-7 py-4 text-lg leading-none text-brand-0.5 hover:bg-brand-7">
            Sign Up
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Subscribe;

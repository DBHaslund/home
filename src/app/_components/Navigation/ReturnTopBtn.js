'use client';
import { useEffect } from 'react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const ReturnTopBtn = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      console.log(latestValue)
      if (latestValue > 0.5) {
        controls.start('show');
      } 
      if (latestValue < 0.5) {
        controls.start('hide');
      }
    });
  }, [scrollYProgress, controls]);

  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <motion.button
      className='fixed bottom-32 right-12 p-2 border-cteal border-2 rounded-full'
      variants={ScrollToTopContainerVariants}
      initial='hide'
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ReturnTopBtn;

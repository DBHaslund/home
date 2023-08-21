'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const ReturnTopBtn = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const router = useRouter();

  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.5) {
        controls.start('show');
      }
      if (latestValue < 0.5) {
        controls.start('hide');
      }
    });
  }, [scrollYProgress, controls]);

  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = async () => {    
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

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

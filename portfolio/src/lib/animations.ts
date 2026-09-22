export const fadeUp = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeIn = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const slideInLeft = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const slideInRight = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const scaleIn = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 24, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const tapScale = {
  scale: 0.95,
};

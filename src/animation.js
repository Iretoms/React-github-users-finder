export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
    translateY: 100,
  },
  show: {
    opacity: 1,
    scale:1,
    translateY: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};
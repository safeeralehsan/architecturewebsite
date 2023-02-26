import { FC, useRef } from "react";
import { motion, Variants, HTMLMotionProps, useInView } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  tailwindclasses: string;
  lowerLetterByPixels: number;
  delay?: number;
  delayChildrenBy?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  delayChildrenBy = 0.1,
  duration = 0.1,
  lowerLetterByPixels,
  tailwindclasses
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delayChildrenBy, delay: delay }
    })
  };

  const child: Variants = {
    hidden: {
      opacity: 1,
      y: 60,
      // transition: {
      //     type: "spring",
      //     damping: 10,
      //     stiffness: 2
      // }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "easeIn",
        // damping: 300,
      }
    },
  };

  return (
    <motion.span
      // ref={ref}
      className="flex overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter) => (
        <motion.span key={`${Math.random()}`} variants={child} className={tailwindclasses}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WavyText;

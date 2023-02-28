import { FC, useRef } from "react";
import { motion, Variants, HTMLMotionProps, useInView } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  tailwindclasses: string;
  lowerLetterByPixels: number;
  bringLettersUpto?: number;
  delay?: number;
  delayChildrenBy?: number;
  duration?: number;
  childrenTransitionDuration?: number,
  viewportIntersection?: number | "some" | "all"
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  delayChildrenBy = 0.1,
  duration = 0.1,
  childrenTransitionDuration = 0.3,
  lowerLetterByPixels,
  bringLettersUpto = 0,
  tailwindclasses,
  viewportIntersection = "some"
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
      y: lowerLetterByPixels,
      // transition: {
      //     type: "spring",
      //     damping: 10,
      //     stiffness: 2
      // }
    },
    visible: {
      opacity: 1,
      y: bringLettersUpto,
      transition: {
        type: "easeIn",
        duration: childrenTransitionDuration,
        // damping: 300,
      }
    },
  };

  return (
    <motion.span
      // ref={ref}
      className="flex overflow-hidden h-fit"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportIntersection }}
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

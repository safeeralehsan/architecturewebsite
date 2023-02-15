import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  tailwindclasses: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  tailwindclasses
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
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
      className="flex overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className={tailwindclasses}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WavyText;

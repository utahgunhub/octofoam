import { motion, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
      mass: 0.8,
    },
  },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const bounceVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export type RevealVariant = "default" | "slideLeft" | "slideRight" | "bounce";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  amount?: number;
  once?: boolean;
}

const variantMap = {
  default: defaultVariants,
  slideLeft: slideLeftVariants,
  slideRight: slideRightVariants,
  bounce: bounceVariants,
};

export const ScrollReveal = ({
  children,
  className = "",
  variant = "default",
  delay = 0,
  amount = 0.2,
  once = true,
}: ScrollRevealProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={variantMap[variant]}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ScrollRevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

export const ScrollRevealStagger = ({
  children,
  className = "",
  staggerDelay = 0.08,
  amount = 0.1,
}: ScrollRevealStaggerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          staggerDirection: 1,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScrollRevealItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={defaultVariants}
    className={className}
  >
    {children}
  </motion.div>
);

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0,
  hover = true 
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
    >
      <Card className={`glass-card ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;

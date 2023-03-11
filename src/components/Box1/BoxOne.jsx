import { motion } from "framer-motion";
import { useState } from "react";

const BoxOne = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        style={{ opacity: 0.2 }}
        animate={{
          x: isAnimating ? 1200 : 0,
          opacity: isAnimating ? 1 : 0.4,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          //   damping: 9,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default BoxOne;

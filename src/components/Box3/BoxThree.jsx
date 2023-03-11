import { motion } from "framer-motion";

const BoxThree = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVarian = {
    hidden: {
      x: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="box"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li className="boxItem" variants={listVarian}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BoxThree;

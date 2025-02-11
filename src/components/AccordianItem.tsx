"use client";
import MinusIcon from "../assets/icons/minus.svg";
import PlusIcon from "../assets/icons/plus.svg";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const AccordianItem = ({ item, index }: { item: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center cursor-pointer">
        <span className="flex-1 text-lg font-bold">{item.question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            key={`${index}-${item.answer}`}
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordianItem;

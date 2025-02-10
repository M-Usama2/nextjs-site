"use client";
import MinusIcon from "../assets/icons/minus.svg";
import PlusIcon from "../assets/icons/plus.svg";
import { useState } from "react";
import clsx from "clsx";

const AccordianItem = ({ item, index }: { item: any; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div
        key={index}
        className="py-7 border-b border-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center cursor-pointer">
          <span className="flex-1 text-lg font-bold">{item.question}</span>
          { isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
        <div
          className={clsx("mt-4", {
            hidden: !isOpen,
            "": isOpen === true,
          })}
        >
          {item.answer}
        </div>
      </div>
    );
  };

  export default AccordianItem
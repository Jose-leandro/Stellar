import Image from "next/image";
import React from "react";

type Button = {
  nameButton: string;
  src: string;
};

// Render multiple buttons based on props
const ButtonFilter = ({ buttons }: { buttons: Button[] }) => {
  return (
    <>
      {buttons.map((element, index) => (
        <div key={index}>
          <button className="flex items-center gap-2">
            <Image src={element.src} alt={element.nameButton} width={20} height={20} />
            {element.nameButton}
          </button>
        </div>
      ))}
    </>
  );
};

// Props for FilterProducts
type FilterProductsProps = {
  titleOfFilter: string[];
  typeOfButton: Button[][]; // Each title might have its own button list
};

// Main component
export default function FilterProducts({ titleOfFilter, typeOfButton }: FilterProductsProps) {
  return (
    <>
      {titleOfFilter.map((title, index) => (
        <div key={index} className="flex-col mb-6">
          <h2 className="text-2xl mb-2">{title}</h2>
          <ButtonFilter buttons={typeOfButton[index]} />
        </div>
      ))}
    </>
  );
}

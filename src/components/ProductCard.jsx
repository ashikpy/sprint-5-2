/* eslint-disable react/prop-types */

import { BiBlock } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function ProductCard({
  title,
  desc,
  price,
  category,
  rating,
  inStock,
}) {
  const categoryColors = {
    Electronics: [
      "bg-[#FFE5B4]/80",
      "border-[#FFB347]/30",
      "bg-[#FFB347]/30",
      "fill-[#FFB347]",
    ],
    Books: [
      "bg-[#E6E6FA]/80",
      "border-[#D8BFD8]/30",
      "bg-[#D8BFD8]/30",
      "fill-[#D8BFD8]",
    ],
    Clothing: [
      "bg-[#D0F0C0]/80",
      "border-green-400/30",
      "bg-green-400/30",
      "fill-green-400",
    ],
  };

  return (
    <div
      className={`border flex items-center justify-between  p-5  rounded-lg ${categoryColors[category][0]} ${categoryColors[category][1]}`}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-black/60 font-medium text-sm mt-1">{desc}</p>
        <p
          className={`text-[10px] font-semibold mt-3 p-[2px] w-max px-2 border rounded-full ${categoryColors[category][1]} ${categoryColors[category][2]}`}
        >
          {category}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-4xl md:text-5xl font-bold ">${price}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
              if (rating >= star) {
                return (
                  <FaStar key={star} className={categoryColors[category][3]} />
                );
              } else if (rating >= star - 0.5) {
                return (
                  <FaStarHalfAlt
                    key={star}
                    className={categoryColors[category][3]}
                  />
                );
              } else {
                return (
                  <FaRegStar
                    key={star}
                    className={categoryColors[category][3]}
                  />
                );
              }
            })}
          </div>
          <p
            className={`text-[10px] font-mono p-[2px] w-max px-2 border rounded-full ${categoryColors[category][1]} ${categoryColors[category][2]}`}
          >
            {rating.toFixed(1)}
          </p>
        </div>
        {!inStock && (
          <p
            className={`font-mono text-red-500 text-[10px] mt-4  border border-red-500/30 p-1 flex items-center px-2  uppercase rounded-full bg-red-100/50`}
          >
            <BiBlock className="inline-block mr-2" />
            Out of Stock
          </p>
        )}
      </div>
    </div>
  );
}

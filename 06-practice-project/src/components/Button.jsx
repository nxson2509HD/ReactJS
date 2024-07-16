import React from "react";

export default function Button({ children, ...props }) {
  const className =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-500";

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

import React from "react";

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-5 relative py-2 text-lg font-semibold border border-primary text-primary bg-tranparent rounded-[5px] transition-colors overflow-hidden before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-button before:transition-all before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-[2]">
      {children}
    </button>
  );
}

export default SecondaryButton;

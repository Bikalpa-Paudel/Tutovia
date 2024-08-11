import React from "react";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-5 relative py-2 text-lg font-semibold text-[#ffff] bg-button hover:bg-transparent hover:border border-primary  rounded-[5px] transition-all  overflow-hidden before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#fff]  before:transition-all before:duration-300 before:content-[''] hover:text-primary before:hover:scale-y-[2]">
      {children}
    </button>
  );
}

export default PrimaryButton;

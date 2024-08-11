function TertiaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-5 py-2 text-lg font-semibold border border-[#ffffff] hover:border-tertiary transition-all text-[#ffffff] hover:text-tertiary bg-button rounded-[5px]">
      {children}
    </button>
  );
}

export default TertiaryButton;

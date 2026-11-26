export const BrandLogo = ({ light = false }) => (
  <div className="flex items-center gap-3 select-none">
    <div className="flex items-center gap-[3px] h-9 px-2.5 rounded-xl bg-gradient-to-tr from-[#5B72A6]/10 to-[#64C4C3]/20 border border-[#64C4C3]/30">
      {[12, 22, 16, 28, 18, 24, 14].map((height, idx) => (
        <span
          key={idx}
          style={{ height: `${height}px` }}
          className={`w-[3px] rounded-full transition-all duration-300 ${
            idx % 2 === 0
              ? light
                ? 'bg-[#8CE0DF]'
                : 'bg-[#48B2B0]'
              : light
              ? 'bg-white'
              : 'bg-[#4E6599]'
          }`}
        />
      ))}
    </div>
    <div className="flex flex-col">
      <span
        className={`text-lg sm:text-xl font-bold tracking-tight leading-none ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        Asya Ayyıldız
      </span>
      <span
        className={`text-[11px] font-medium tracking-wider uppercase mt-1 ${
          light ? 'text-teal-200' : 'text-[#4E6599]'
        }`}
      >
        Dil ve Konuşma Merkezi
      </span>
    </div>
  </div>
);


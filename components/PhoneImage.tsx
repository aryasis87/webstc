import Image from "next/image";

interface PhoneImageProps {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  /** 'cover' (default) memenuhi layar & memotong; 'contain' menampilkan gambar utuh. */
  fit?: "cover" | "contain";
}

export default function PhoneImage({ src, alt, label, priority = false, fit = "cover" }: PhoneImageProps) {
  return (
    <div className="relative mx-auto select-none" style={{ width: 280, height: 590 }}>
      {/* Ambient glow */}
      <div className="absolute inset-10 rounded-[36px] bg-blue-500/15 blur-3xl" />
      {/* Outer shadow ring */}
      <div className="absolute inset-0 rounded-[44px] shadow-2xl shadow-black/12" />

      {/* Chassis */}
      <div className="relative h-full rounded-[44px] border-[8px] border-zinc-900/[0.08] bg-zinc-950 overflow-hidden">

        {/* Dynamic island */}
        <div className="absolute top-3 inset-x-0 z-10 flex justify-center pointer-events-none">
          <div className="w-28 h-[22px] bg-zinc-950 rounded-full" />
        </div>

        {/* Screen */}
        <div className="absolute inset-[2px] rounded-[37px] overflow-hidden bg-zinc-950">
          <Image
            src={src}
            alt={alt}
            fill
            className={fit === "contain" ? "object-contain" : "object-cover object-top"}
            sizes="272px"
            priority={priority}
          />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center z-10 pointer-events-none">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Side buttons */}
        <div className="absolute -right-[10px] top-28 w-[4px] h-10 bg-zinc-800 rounded-r-sm" />
        <div className="absolute -left-[10px] top-24 w-[4px] h-6 bg-zinc-800 rounded-l-sm" />
        <div className="absolute -left-[10px] top-36 w-[4px] h-10 bg-zinc-800 rounded-l-sm" />
      </div>

      {label && (
        <p className="text-center text-[11px] text-zinc-400 mt-4 font-medium tracking-wide">{label}</p>
      )}
    </div>
  );
}

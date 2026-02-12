"use client";

import { useRevealer } from "@/src/hooks/useRevealer";
import Image from "next/image";

export default function Home() {
	useRevealer();

  return (
    <>
			<div className="revealer fixed inset-0 bg-black origin-top z-999" />
      <div className="w-full h-svh overflow-hidden bg-var(--bg)">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="text-[12vw] text-center font-black">Stranger Things</div>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[95%] h-[50vh] overflow-hidden">
       <Image
					src="/assets/stranger-things.jpg"
					alt="Imagem do Stranger Things com o mundo invertido"
					width={1200}
					height={675}
					className="w-full h-auto object-cover"
			/>

      </div>
    </>
  );
}

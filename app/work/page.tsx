"use client";

import { useRevealer } from "@/src/hooks/useRevealer";
import Image from "next/image"

const Work = () => {
	useRevealer();

  return (
    <>
			<div className="revealer fixed inset-0 bg-black origin-top z-999" />
      <div className="text-center py-[15em] px-[1em] flex flex-col items-center gap-8 bg-var(--bg)">
        <div className="text-5xl font-bold">Selected Work</div>

        <div className="w-[25%] flex flex-col gap-16">
          <Image
						src="/assets/01.jpg"
						alt="Imagem 1"
						width={800}
						height={1000}
						className="aspect-4/5 object-cover"
					/>

					<Image
						src="/assets/01.jpg"
						alt="Imagem 2"
						width={800}
						height={1000}
						className="aspect-4/5 object-cover"
					/>

					<Image
						src="/assets/01.jpg"
						alt="Imagem 3"
						width={800}
						height={1000}
						className="aspect-4/5 object-cover"
					/>

					<Image
						src="/assets/01.jpg"
						alt="Imagem 4"
						width={800}
						height={1000}
						className="aspect-4/5 object-cover"
					/>
        </div>
      </div>
    </>
  );
};

export default Work;

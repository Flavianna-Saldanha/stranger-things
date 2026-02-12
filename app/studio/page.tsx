"use client";

import { useRevealer } from "@/src/hooks/useRevealer";
import Image from "next/image";

const Studio = () => {
	useRevealer();

  return (
    <>
			<div className="revealer fixed inset-0 bg-black origin-top z-999" />
      <div className="py-60 px-4 flex gap-4 bg-var(--bg)">
        <div className="flex-1">
          <h2>Our Story</h2>
        </div>
        <div className="flex-2 flex flex-col gap-8">
          <h2>
            Aplicação web voltada para fãs de Stranger Things, desenvolvida para
            centralizar informações da série como personagens, temporadas,
            vilões, teorias e referências culturais. O projeto explora
            componentização, boas práticas de front-end e uma interface imersiva
            inspirada no Upside Down.
          </h2>

          <div>
            <Image
							src="/assets/01.jpg"
							alt="Descrição da imagem"
							width={800}
							height={600}
						/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-svh overflow-hidden bg-var(--bg)">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-[30.5vw] text-center">Stranger Things</h1>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[95%] h-[50vh] overflow-hidden">
        <img
          src="/assets/stranger-things.jpg"
          alt="Imagem do Stranger Things com o mundo invertido"
        />
      </div>
    </>
  );
}

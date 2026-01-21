import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-svh overflow-hidden bg-var(--bg)">
        <div>
          <h1>Stranger Things</h1>
        </div>
      </div>

      <div>
        <img
          src="/assets/stranger-things.jpg"
          alt="Imagem do Stranger Things com o mundo invertido"
        />
      </div>
    </>
  );
}

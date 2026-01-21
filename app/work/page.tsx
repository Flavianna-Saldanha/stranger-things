const Work = () => {
  return (
    <>
      <div className="text-center py-[15em] px-[1em] flex flex-col gap-8 bg-var(--bg)">
        <h1>Selected Work</h1>

        <div className="w-[32%] my-0 mx-auto flex flex-col gap-16">
          <img src="/assets/01.jpg" alt="" className="aspect-4/5" />
          <img src="/assets/01.jpg" alt="" className="aspect-4/5" />
          <img src="/assets/01.jpg" alt="" className="aspect-4/5" />
          <img src="/assets/01.jpg" alt="" className="aspect-4/5" />
        </div>
      </div>
    </>
  );
};

export default Work;

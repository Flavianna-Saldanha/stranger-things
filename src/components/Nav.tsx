import Link from "next/link";

const Nav = () => {
  return (
    <div className="sticky top-0 w-full h-20 px-6 flex items-center justify-between z-50 bg-[var(--bg)]">
      <div className="flex-1">
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="flex-2 flex justify-between">
        <div>
          <div>
            <Link href="/work">Work</Link>
          </div>
          <div>
            <Link href="/studio">Studio</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p>Jaguaribara, CE</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

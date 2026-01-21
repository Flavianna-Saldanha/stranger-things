import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-screen p-4 flex gap-4 z-10">
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

import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div>
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

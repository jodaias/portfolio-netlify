import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="menu">
          <li className="menuItem">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="menuItem">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="menuItem">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="menuItem">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

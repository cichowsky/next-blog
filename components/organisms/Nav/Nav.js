import Link from 'next/link';
import { useRouter } from 'next/router';
import { SNavLink } from './Nav.styles';

const navLinks = [
  { path: '/', label: 'Home', id: 1 },
  { path: '/portfolio', label: 'Portfolio', id: 2 },
  { path: '/blog', label: 'Blog', id: 3 },
];

const Nav = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path} passHref>
              <SNavLink className={router.pathname === link.path ? 'active' : ''}>
                {link.label}
              </SNavLink>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

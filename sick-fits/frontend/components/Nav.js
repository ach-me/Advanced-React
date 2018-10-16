import Link from 'next/link';

const Nav = () => (
  <div>
    {/* En lugar de redireccionar de la siguiente manera: */}
    {/* <a href="/sell">Sell!</a> */}
    {/* De esta manera se evita refrescar la pagina */}
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
    <Link href="/">
      <a>Home!</a>
    </Link>
  </div>
);

export default Nav;

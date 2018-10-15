import Link from 'next/link';

const Sell = props => (
  <div>
    <p>Sell!</p>
    {/* En lugar de redireccionar de la siguiente manera: */}
    {/* <a href="/sell">Sell!</a> */}
    {/* De esta manera se evita refrescar la pagina */}
    <Link href="/">
      <a>Home!</a>
    </Link>
  </div>
)

export default Sell;
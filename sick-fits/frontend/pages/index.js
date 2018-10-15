// No es necesario importar React porque Next se encarga de eso
import Link from 'next/link';

// Stateless component
const Home = props => (
  <div>
    <p>Hey!</p>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
)

export default Home;
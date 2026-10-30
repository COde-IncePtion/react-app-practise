import { Link } from 'react-router-dom';
import './style.css';

const Home = ({ routes }) => (
  <div className="home">
    {routes.map(({ path, name }) => (
      <Link key={path} to={path} className="home__card">
        {name}
      </Link>
    ))}
  </div>
);

export default Home;

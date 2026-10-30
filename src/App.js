import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookSearch from './components/BookSearch';
import BookSearchV2 from './components/BookSearchV2';
import CountryCapitalGame from './components/CountryCapitalGame';
import RatingsList from './components/Ratings';
import TicTacToe from './components/TicTacToe';

const countryCapitals = { India: 'Delhi', Germany: 'Berlin', Japan: 'Tokyo' };

const ratings = [
  { name: 'Alice', rate: 4, content: 'Great product' },
  { name: 'Bob', rate: 2, content: 'Could be better' }
];

const routes = [
  { path: '/booksearch', name: 'BookSearch', element: <BookSearch /> },
  { path: '/booksearchv2', name: 'BookSearchV2', element: <BookSearchV2 /> },
  { path: '/countrycapitalgame', name: 'CountryCapitalGame', element: <CountryCapitalGame data={countryCapitals} /> },
  { path: '/ratings', name: 'Ratings', element: <RatingsList ratings={ratings} /> },
  { path: '/tictactoe', name: 'TicTacToe', element: <TicTacToe /> }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home routes={routes} />} />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { getTrending } from 'API/API';
import css from './Home.module.css';
const Home = () => {
  const [results, setResults] = useState();
  const location = useLocation();
  useEffect(() => {
    getTrending().then(response => {
      const data = response.results;
      setResults(
        data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })
      );
    });
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>{results}</ul>;
    </>
  );
};
export default Home;

import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending, getImages } from 'API/API';
import css from './Home.module.css';
const Home = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    getTrending().then(response => {
      const data = response.results;
      console.log(data);
      setResults(
        data.map(({ backdrop_path, id, title }) => {
          return (
            <li key={id}>
              <Link>{title}</Link>
              {/* <img
                alt={title}
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              /> */}
            </li>
          );
        })
      );
    });
  }, []);
  return <ul className={css.list}>{results}</ul>;
};
export default Home;

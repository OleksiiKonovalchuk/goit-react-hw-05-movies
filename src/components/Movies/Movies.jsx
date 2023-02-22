import { useEffect, useState, memo } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'API/API';
import css from './Movies.module.css';
const Movies = () => {
  const location = useLocation();
  const [search, setSearch] = useState();
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const elements = items?.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));
  useEffect(() => {
    searchMovies(search).then(({ results }) => {
      setItems(results);
    });
  }, [searchParams, search, setItems]);

  return (
    <>
      <form
        className={css.form}
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query: search });
        }}
      >
        <input
          className={css.input}
          onChange={({ target }) => {
            setSearchParams({ query: target.value });
            search === ''
              ? setSearch(searchParams.query)
              : setSearch(target.value);
          }}
          type="text"
          name="search"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul>{elements}</ul>
    </>
  );
};
export default Movies;

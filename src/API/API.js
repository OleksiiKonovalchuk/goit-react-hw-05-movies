import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '9403572a0ca29edc08cf527581f60a81',
  },
});

const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export { getTrending };

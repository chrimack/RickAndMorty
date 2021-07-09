import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setData({});
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (query) {

      axios.get(query)
        .then(res => {
          setData(res.data);
          setLoading(false);
          if (!res.data.info.next) {
            setHasMore(false);
          }
        })
        .catch(e => console.log(e));

    }
  }, [query]);

  return { loading, error, data, hasMore };
};

export default useFetch;
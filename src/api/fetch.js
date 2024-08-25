import { useCallback, useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = useCallback(async (path, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    const baseUrl = `http://localhost:3000/${path}`;

      try {
          const options = {
              method,
              headers: {
                  'Content-Type': 'application/json',
                  ...headers
              }
          };

          if (body) {
              options.body = JSON.stringify(body);
          }

          const response = await fetch(baseUrl, options);
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }

          const result = await response.json();
          setData(result);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
  }, []);

  return { data, error, loading, fetchData };
}

export default useFetch;

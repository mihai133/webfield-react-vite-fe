import { useEffect, useState } from "react";

export default function useFetch(
  path = "",
  options = {},
  method = "GET"
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = `http://localhost:3000/${path}`;

  useEffect(() => {
    if (loading) {
      fetch(baseUrl, { method: method, ...options })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json()
        })
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, options]);

  return { data, error, loading };
}
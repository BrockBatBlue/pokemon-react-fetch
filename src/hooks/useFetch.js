import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    // fetch the data (vanilla fetch)
    const fetchData = async () => {
      setData({});
      setError(null);
      setIsLoading(true);
      try {
        console.log(`Fetching: ${url}`);
        const response = await fetch(url);
        if (ignore) {
          return;
        }
        if (response.ok === false) {
          throw new Error("Error grabbing data");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);
  return { data, isLoading, error };
};

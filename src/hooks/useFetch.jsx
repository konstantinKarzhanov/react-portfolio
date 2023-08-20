import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    console.log("mounted");
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const request = await fetch(url);
        const response = await request.json();
        if (isMounted) {
          setData(response);
          setFetchError(null);
        }
      } catch ({ name, message }) {
        if (isMounted) {
          setData(null);
          setFetchError({ name, message });
        }
      } finally {
        isMounted &&
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
      }
    };

    fetchData(url);

    const cleanUp = () => {
      console.log("cleaned up");
      isMounted = false;
    };
    return cleanUp;
  }, [url]);

  return { isLoading, fetchError, data };
};

export default useFetch;

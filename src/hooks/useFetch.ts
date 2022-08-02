import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string, options: any = null ) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const abortController = new AbortController();
  const signal = abortController.signal;
  const doFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("fetching ", url);
      const json = await axios.get(url, options);
        setData(json.data);
    } catch (e: any) {
        console.log("Error: ");
        setError(e);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    doFetch();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading, doFetch };
};
export default useFetch;

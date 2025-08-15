import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((respData) => setData(respData))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading, error];
}

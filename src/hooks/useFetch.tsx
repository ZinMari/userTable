import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setData(null);

    fetch(url)
      .then((res) => res.json())
      .then((respData) => setData(respData))
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading];
}

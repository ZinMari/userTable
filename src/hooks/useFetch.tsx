import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => setData(result.users));
  }, []);

  return data;
}

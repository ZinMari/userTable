import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => setData(result.users))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return data;
}

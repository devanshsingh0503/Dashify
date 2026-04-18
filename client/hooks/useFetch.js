import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(url).then((res) => setData(res.data));
  }, [url]);

  return data;
}
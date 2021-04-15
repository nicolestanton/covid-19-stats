import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("IDLE");

  useEffect(() => {
    async function handleRequest() {
      try {
        setStatus("FETCHING");
        const response = await axios.get(url);
        setData(response.data);
        setStatus("SUCCESS");
      } catch {
        setStatus("ERROR");
        setData(null);
      }
    }
    handleRequest();
  }, [url]);
  return [data, status];
};

export default useFetch;

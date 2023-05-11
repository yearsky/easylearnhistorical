import { useState, useEffect } from "react";

const apiResponse = (apiEndpoint, pollingInterval) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } else {
        // Handle error response
        console.error("Error:", response.status);
        setIsLoading(false);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Fetch Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const fetchInterval = setInterval(fetchData, pollingInterval);

    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return { isLoading, data };
};

export default apiResponse;

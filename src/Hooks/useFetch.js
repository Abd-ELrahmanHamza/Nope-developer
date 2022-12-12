// Import hooks
import { useState, useEffect } from "react";

// Import contexts
import { useAuth } from "../Authentication/Authentication";

/**
 * Custom hook that fetches data
 *
 * @param {String} url
 * @param {String} type Type of request
 * @returns {Object} data received (string), isPending (bool), error (boolean)
 */
const useFetch = (url, type = "GET") => {
  // State that stores fetched data
  const [data, setData] = useState(null);

  // State that stores the state of request
  const [isPending, setIsPending] = useState(true);

  // State that stores the error in request
  const [error, setError] = useState(null);

  // Used for authentication
  const auth = useAuth();

  const fetchResponse = (response) => {
    if (!response.ok) {
      throw Error("Couldn't fetch data please try again");
    }
    return response.json();
  };

  const setResponse = (data) => {
    setData(data);
    setIsPending(false);
    setError(null);
  };

  const handleFetchError = (error) => {
    if (error.name === "AbortError") return;
    setError(error.message);
    setIsPending(false);
  };

  useEffect(() => {
    const abortController = new AbortController();
    // console.log(auth.getToken());
    fetch(
      url,
      {
        method: type,
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + auth.getToken(),
        },
      },
      { signal: abortController.signal }
    )
      .then(fetchResponse)
      .then(setResponse)
      .catch(handleFetchError);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

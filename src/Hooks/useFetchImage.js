import { useState, useEffect } from "react";
import { useAuth } from "../Authentication/Authentication";

function useFetchImage(url, type = "GET") {
  const [image, setImage] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const auth = useAuth();

  const handleFetchError = (error) => {
    if (error.name === "AbortError") return;
    setError(error.message);
    setIsPending(false);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const response = await fetch(
        url,
        {
          method: type,
          headers: {
            "Content-Type": "Application/json",
            Authorization: "Bearer " + auth.getToken(),
          },
        },
        { signal: abortController.signal }
      );
      if (!response.ok) {
        throw Error("Couldn't fetch data please try again");
      }
      const imageBlob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        setImage(base64data);
        setIsPending(false);
        setError(null);
      };
    };
    fetchData().catch(handleFetchError);
    return () => abortController.abort();
  }, [url]);
  return { image, isPending, error };
}

export default useFetchImage;

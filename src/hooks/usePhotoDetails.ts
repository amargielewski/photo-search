import { useEffect, useState } from "react";

//api
import { photosDetails } from "api";

//types
import { PhotoModalTypes } from "types/PhotoModalTypes";

export const usePhotoDetails = (id: string | null) => {
  const [data, setData] = useState<PhotoModalTypes | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    photosDetails(id)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, error, isLoading };
};

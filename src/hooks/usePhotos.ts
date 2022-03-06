import { useEffect, useState } from "react";

//api
import { photosGET } from "api";

//types
import { SearchPhotoTypes } from "types/SearchPhotoTypes";

export const usePhotos = (search: string | undefined) => {
  const [data, setData] = useState<SearchPhotoTypes[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    photosGET(search)
      .then((RES) => {
        setData(RES.data.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [search]);

  return { isLoading, error, data };
};

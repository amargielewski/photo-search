import { apiService } from "services";

const requestUrl = "/search/photos";

export const photosGET = (searchTerm: string | undefined) =>
  apiService.get(`${requestUrl}?query=${searchTerm}&per_page=50`, {});

import { apiService } from "services";

const requestUrl = "/photos";

export const photosDetails = (id: string | null) =>
  apiService.get(`${requestUrl}/${id}`);

import { request } from "./apiCore.js";

export const getAlbulm = (params) => {
  return request({
    url: "api/albums/getAlbumList",
    method: "POST",
    data: {...params}
  });
};
export const getAlbumById = (params) => {
  return request({
    url: "api/albums/getAlbumById",
    method: "POST",
    data: {...params}
  });
};

export const getAlbumByName = (params) => {
  return request({
    url: "api/albums/getAlbumByName",
    method: "POST",
    data: {...params}
  });
};


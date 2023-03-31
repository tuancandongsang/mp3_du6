import { request } from "./apiCore.js";

export const getSingerList = (params) => {
  return request({
    url: "/api/singers/getSingerList",
    method: "POST",
    data: {...params}
  });
};
export const getSingerById = (params) => {
  return request({
    url: "/api/singers/getSingerById",
    method: "POST",
    data: {...params}
  });
};
export const getSingerByAlbumId = (params) => {
  return request({
    url: "/api/singers/getSingerByAlbumId",
    method: "POST",
    data: {...params}
  });
};
export const addSinger = (params) => {
  return request({
    url: "/api/singers/addSinger",
    method: "POST",
    data: {...params}
  });
};

import { request } from "./apiCore.js";

export const getListSong = (params) => {
  return request({
    url: "api/songs/getSongList",
    method: "POST",
    data: {...params}
  });
};
export const searchSong = (params) => {
    return request({
      url: "api/songs/getSongById",
      method: "POST",
      data: {...params}
    });
  };

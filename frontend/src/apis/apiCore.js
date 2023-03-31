import axios  from "axios";


const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});


request.interceptors.request.use((request ) => {
  const tokenAuthor = window.localStorage.getItem("tokenzing")
  if (tokenAuthor) {
    request.headers["Authorization"] = `Bearer ${tokenAuthor}`;
  }
  return request;
});

// after send request
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { request };

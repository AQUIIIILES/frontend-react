// src/helpers/apiUrl.js

export const apiUrl = (path) => {
  const base = import.meta.env.VITE_API_URL;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

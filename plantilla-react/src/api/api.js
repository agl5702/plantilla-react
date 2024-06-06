import axios from "axios";

// Configuración base de Axios
const baseApi = axios.create({
  baseURL: "https://api.chucknorris.io/",
  headers: {
    "Content-Type": "application/json", // Corregido: 'aplication/json' a 'application/json'
  },
});

// Función genérica para realizar peticiones
export const makeRequest = (method, url, data = null) => {
  const config = {
    method,
    url,
  };

  if (data) {
    config.data = data;
  }

  return baseApi(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

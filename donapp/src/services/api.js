import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

/* Endereços para cada emulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

const api = axios.create({
  baseURL: "http://192.168.1.18:3333",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("@app:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

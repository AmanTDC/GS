import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
export const fetchInstance = async (path: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
    const response = await res.json();
    return Promise.resolve(response?.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
export default axiosInstance;

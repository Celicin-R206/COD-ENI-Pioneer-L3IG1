/** @format */

// hooks/useService.js
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchService = async () => {
  const { data } = await axios.get(`${API_URL}/services`);
  return data;
};

const useService = () => {
  return useQuery("service", fetchService);
};

export default useService;

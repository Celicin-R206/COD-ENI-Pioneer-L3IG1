import axios from "axios";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

 const fetcher = (url)=> axios.get(url).then((res)=>res.data)

export const useService = (id) => {
  const {data,error,mutate} = useSWR(`${API_URL}/services/${id}`,fetcher)
  return{
    service:data,
    isLoading: !data,
    mutate
  }
}
import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = " https://21110.fullstack.clarusway.com/";

//* Axios Instance for Public API Request
const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  
  //* Axios Instance for Private API Request
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken,axiosPublic };
};

export default useAxios;

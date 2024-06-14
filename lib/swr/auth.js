/** @format */
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = ([url, token]) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

// Hook to register
export const useRegister = () => {
  const router = useRouter();
  const signup = async (
    nom,
    prenom,
    date_naissance,
    lieu_naissance,
    adresse,
    cin,
    code_copie,
    password
  ) => {
    try {
      const { data } = await axios.post(`${API_URL}/users`, {
        nom,
        prenom,
        date_naissance,
        lieu_naissance,
        adresse,
        cin,
        code_copie,
        password,
      });
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/main/service");
      return { message: data.message, isLoading: false };
    } catch (error) {
      console.error("Register failed", error);
      throw error;
    }
  };
  return { signup };
};

// Hook to login
export const useLogin = () => {
  const router = useRouter();
  const login = async (code, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/login`, {
        code,
        password,
      });
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/main/service");
      return { data, isLoading: false };
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };
  return { login };
};

// Hook to login
export const useLogout = () => {
  const router = useRouter();
  const logout = async (token) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("account");
      router.push("/login");
      return { data, isLoading: false };
    } catch (error) {
      console.error("Logout failed", error);
      throw error;
    }
  };
  return { logout };
};

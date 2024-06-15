/** @format */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuthProtection = () => {
  const navigation = useRouter();

  useEffect(() => {
    const storedAccount = localStorage.getItem("user");
    if (!storedAccount) {
      navigation.push("/login");
    }
  }, []);
};

export default useAuthProtection;

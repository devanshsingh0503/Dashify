import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/auth";

export default function useAuth() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  return auth;
}
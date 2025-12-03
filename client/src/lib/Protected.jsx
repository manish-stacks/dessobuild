"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function Protected({ children }) {
  const { isAuth, loadUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    loadUser();

    if (!localStorage.getItem("token")) {
      router.replace("/login");
    }
  }, []);

  if (!isAuth) return null;

  return children;
}

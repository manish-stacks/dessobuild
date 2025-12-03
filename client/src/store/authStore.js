import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  user: null,
  isAuth: false,

  login: ({ token, user }) => {
    localStorage.setItem("token", token);
    set({ token, user, isAuth: true });
  },

  loadUser: () => {
    const token = localStorage.getItem("token");
    if (!token) return set({ isAuth: false });

    set({ token, isAuth: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null, isAuth: false });
  }
}));

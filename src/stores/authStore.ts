import { create } from "zustand";
import { User } from "@/views/sign-in/types";

interface UserStore {
  user: User;
  signIn: (newUser: User) => void;
  signOut: () => void;
}

export const useAuthStore = create<UserStore>((set) => ({
  user: {
    username: "",
    email: "",
  },
  signIn: (newUser: User) => set({ user: newUser }),
  signOut: () => set(() => ({ user: { username: "", email: "" } })),
}));

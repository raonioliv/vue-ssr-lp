import { defineStore } from "pinia"
import type { State } from "../types/store/user"

export const useUserStore = defineStore("user", {
  state: (): State => ({
    userInfo: undefined
  }),
  actions: {
    setUser() {
      this.userInfo = {
        name: "Raoni Rocha",
        email: "raonirocha.oliv@gmail.com",
        initials: "RR"
      }
    }
  }
})

import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const cart = ref<CartItem[]>([]);

  return { cart };
});

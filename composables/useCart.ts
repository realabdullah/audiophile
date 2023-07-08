import { openDB } from "idb";

export const useCart = () => {
  type Access = "readwrite" | "readonly";

  const dbPromise = openDB("audiophiles", 1, {
    upgrade(db) {
      db.createObjectStore("audiophiles", { keyPath: "slug" });
    },
  });

  const callDB = async (action: Access = "readwrite") => {
    const db = await dbPromise;
    const tx = db.transaction("audiophiles", action);
    return tx.objectStore("audiophiles") as any;
  };

  // add to cart
  const addToCart = async (product: Product, action: string = "increment") => {
    const store = await callDB();
    const itemToBeAdded: CartItem = {
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: product?.quantity ?? 1,
    };
    const products = await store.getAll();
    const productExists = products.find(
      (item: CartItem) => item.slug === product.slug
    );

    if (productExists) {
      itemToBeAdded.quantity =
        action === "increment"
          ? productExists.quantity + 1
          : productExists.quantity - 1;
      store.put(itemToBeAdded);
      return;
    }
    store.add(itemToBeAdded);
  };

  // remove from cart
  const removeFromCart = async (slug: string) => {
    const store = await callDB();
    store.delete(slug);
  };

  // clear cart
  const clearCart = async () => {
    const store = await callDB();
    store.clear();
  };

  // get cart
  const getCart = async () => {
    const store = await callDB("readonly");
    return store.getAll() as Promise<CartItem[]> | [];
  };

  return {
    addToCart,
    removeFromCart,
    clearCart,
    getCart,
  };
};

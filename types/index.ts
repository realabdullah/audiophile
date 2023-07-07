interface CartItem {
  slug: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface Product extends CartItem {
  description: string;
  isNew: boolean;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: string[];
  others: {
    name: string;
    image: string;
    slug: string;
  }[];
}

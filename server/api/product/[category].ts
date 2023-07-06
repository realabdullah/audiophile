import products from "../../../assets/js/products";

export default defineEventHandler(async (event) => {
  const { category } = event.context.params as { category: string };

  const product = products.filter((p) => p.category === category);

  if (product.length === 0) {
    throw createError({
      statusCode: 404,
      message: `Product with category '${category}' not found`,
    });
  }

  return product;
});

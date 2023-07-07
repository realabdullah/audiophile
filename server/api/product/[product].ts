import products from "../../../assets/js/products";

export default defineEventHandler(async (event) => {
  const { product } = event.context.params as { product: string };

  const productDetails = products.find((p) => p.slug === product);

  if (!productDetails) {
    throw createError({
      statusCode: 404,
      message: `Product with name '${product}' not found`,
    });
  }

  return productDetails;
});

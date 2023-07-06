<script lang="ts" setup>
interface Product {
    name: string;
    description: string;
    image: string;
    isNew: boolean;
}

const route = useRoute();
const products = ref<Product[]>([]);

const { data, error } = await useFetch(`/api/product/${route.params.category}`);
if (error.value) {
    throw new Error(error.value.message);
}

products.value = data.value as Product[];
</script>

<template>
    <ProductCards :products="products" />
</template>

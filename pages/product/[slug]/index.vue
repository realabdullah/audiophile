<script lang="ts" setup>
definePageMeta({
    layout: "product"
});

interface Product {
    name: string;
    description: string;
    image: string;
    isNew: boolean;
};

const route = useRoute();
const product = ref<Product | null>(null);

const { data, error } = await useFetch(`/api/product/${route.params.slug}`);
if (error.value) {
    throw new Error(error.value.message);
}

product.value = data.value as Product;

useHead({ title: `${product.value.name} - Audiophile` });
</script>

<template>
    <ViewProduct :product="product" />
</template>

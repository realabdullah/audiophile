<script lang="ts" setup>
interface Product {
    name: string;
    image: string;
    slug: string;
};

interface SimilarProductsProps {
    products: Product[];
};

defineProps<SimilarProductsProps>();
</script>

<template>
    <h1 class="text-center text-transform-uppercase weight-700">you may also like</h1>
    <div class="similar__products d-flex align-items-strech justify-content-between">
        <div v-for="product in products"
            class="similar__products-card w-100 d-flex flex-column align-items-center justify-content-center">
            <div class="image w-100 d-flex align-items-center justify-content-center">
                <img :src="product.image" :alt="product.name">
            </div>
            <h3 class="name weight-700 text-transform-uppercase">{{ product.name }}</h3>
            <BaseButton variant="solid" text="See Product" type="link" :url="product.slug" />
        </div>
    </div>
</template>

<style scoped lang="scss">
h1 {
    margin-top: 16rem;
    margin-bottom: 6.4rem;
    @include font(3.2rem, 3.6rem);
    letter-spacing: 0.12rem;
    color: $col-black;
}

.similar__products {
    gap: 5rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (min-width: 769px) and (max-width: 960px) {
        gap: 3rem;
    }

    &-card {
        max-width: 35rem;

        @media screen and (max-width: 768px) {
            max-width: 100%;
        }

        .image {
            margin-bottom: 4rem;
            height: 31.8rem;
            border-radius: 0.8rem;
            background-color: $col-silver;
            padding: 3rem;

            img {
                height: 20rem;
                object-fit: cover;
            }
        }

        .name {
            margin-bottom: 3.2rem;
            @include font(2.4rem, 3.2rem);
            color: $col-black;
            letter-spacing: 0.12rem;
        }
    }
}
</style>

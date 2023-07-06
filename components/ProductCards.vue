<script lang="ts" setup>
interface Product {
    name: string;
    description: string;
    image: string;
    isNew: boolean;
}

interface Products {
    products: Product[];
}

defineProps<Products>();

const { hyphenate } = useHyphenate();

const isEven = (index: number) => index % 2 === 0;
</script>

<template>
    <div v-if="products && products.length > 0" class="wrapper">
        <div v-for="(product, index) in products" class="product d-flex align-items-center justify-content-space-between"
            :class="{ 'flex-row-reverse': !isEven(index) }">
            <div class="product__image w-100 d-flex align-items-center justify-content-center">
                <img :src="product.image" :alt="product.name">
            </div>
            <div class="product__info d-flex flex-column align-items-start">
                <span v-if="product.isNew" class="new weight-400">NEW PRODUCT</span>
                <h2 class="text-transform-uppercase">{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <BaseButton variant="solid" text="See Product" type="link" :url="`/product/${hyphenate(product.name)}`" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    max-width: 110rem;
    margin: 16rem auto;
    padding: 0 3rem;

    @media screen and (max-width: 768px) {
        margin: 12rem auto;
    }

    .product {
        gap: 5rem;
        margin-bottom: 16rem;

        &:last-child {
            margin-bottom: 0;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column !important;
        }

        &__image {
            max-width: 50rem;
            height: 56rem;
            border-radius: 0.8rem;
            background-color: $col-silver;
            padding: 7rem;

            @media screen and (max-width: 768px) {
                max-width: 100%;
                height: 35rem;
            }

            img {
                width: 34rem;
                height: 38rem;
                object-fit: contain;
                filter: drop-shadow(0px 49px 19px #CAB7B7);

                @media screen and (max-width: 768px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        &__info {

            @media screen and (max-width: 768px) {
                align-items: center !important;
                text-align: center;
            }

            .new {
                @include font(1.4rem, 1rem);
                letter-spacing: 1rem;
                color: $col-burntSienna;
            }

            h2 {
                max-width: 30rem;
                @include font(4rem, 4.4rem);
                letter-spacing: 0.14rem;
                color: $col-black;
                margin-top: 1.6rem;
                margin-bottom: 3.2rem;
            }

            p {
                max-width: 44rem;
                @include font(1.5rem, 2.5rem);
                color: $col-black;
                opacity: 0.5;
                margin-bottom: 4rem;
            }
        }
    }
}
</style>

<script lang="ts" setup>
const props = defineProps<{
    product: Product;
}>();

const router = useRouter();
const { addToCart } = useCart();
const count = ref(1);

const updateProductQuantity = (action: string) => {
    if (action === "increment") count.value++;
    if (action === "decrement" && count.value > 1) count.value--;
};

const addProductToCart = async () => {
    const productToAdd = { ...props.product, quantity: count.value };
    await addToCart(productToAdd);
    count.value = 1;
};
</script>

<template>
    <div class="product-page">
        <button class="go-back weight-500" @click="router.go(-1)">Go Back</button>
        <div class="product d-flex align-items-center justify-content-space-between">
            <div class="product__image w-100 d-flex align-items-center justify-content-center">
                <img :src="product.image" :alt="product.name">
            </div>
            <div class="product__info d-flex flex-column align-items-start">
                <span v-if="product.isNew" class="new weight-400">NEW PRODUCT</span>
                <h2 class="text-transform-uppercase">{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <span class="price weight-700">$ {{ product.price }}</span>

                <div class="product__info-cta d-flex align-items-center">
                    <BaseCount :count="count" @update-count="updateProductQuantity" />
                    <BaseButton variant="solid" text="ADD TO CART" @click="addProductToCart" />
                </div>
            </div>
        </div>

        <div class="product__details d-flex align-items-start justify-content-space-between">
            <div class="features w-100">
                <h4 class="weight-700">FEATURES</h4>
                <p class="weight-500">{{ product.features }}</p>
            </div>

            <div class="box w-100">
                <h4 class="weight-700 text-transform-uppercase">in the box</h4>
                <ul>
                    <li v-for="item in product.includes" class="d-flex align-items-center">
                        <span class="quantity weight-700">{{ item.quantity }}x</span>
                        <span class="item weight-500">{{ item.item }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="product__gallery">
            <img v-for="image in product.gallery" :src="image" :alt="product.name">
        </div>

        <SimilarProducts :products="product.others" />
    </div>
</template>

<style scoped lang="scss">
.product-page {
    max-width: 110rem;
    margin: 0 auto;
    padding: 9rem 3rem;

    .go-back {
        margin-bottom: 5.6rem;
        @include font(1.5rem, 2.5rem);
        color: $col-black;
        opacity: 0.5;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $col-burntSienna;
            opacity: 1;
        }
    }

    .product {
        gap: 5rem;
        margin-bottom: 16rem;

        @media screen and (max-width: 768px) {
            flex-direction: column !important;
            align-items: start !important;
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
                align-items: start !important;
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
                margin-bottom: 3.2rem;
            }

            .price {
                @include font(1.8rem, 2.5rem);
                letter-spacing: 0.13rem;
                color: $col-black;
                margin-bottom: 4.7rem;
            }

            &-cta {
                gap: 1.6rem;
            }
        }
    }

    .product__details {
        gap: 5rem;

        @media screen and (max-width: 768px) {
            flex-direction: column !important;
        }

        .features {
            max-width: 55rem;

            h4 {
                @include font(3.2rem, 3.6rem);
                letter-spacing: 0.12rem;
                color: $col-black;
                margin-bottom: 3.2rem;
            }

            p {
                @include font(1.5rem, 2.5rem);
                color: $col-black;
                opacity: 0.5;
            }
        }

        .box {
            max-width: 35rem;

            @media screen and (max-width: 768px) {
                display: flex;
                align-items: start;
                gap: 15rem;
                max-width: 100%;
            }

            @media screen and (max-width: 590px) {
                flex-direction: column;
                align-items: start;
                gap: 2.5rem;
            }

            h4 {
                @include font(3.2rem, 3.6rem);
                letter-spacing: 0.12rem;
                color: $col-black;
                margin-bottom: 3.2rem;
            }

            ul {

                li {
                    gap: 2.4rem;
                    margin-bottom: 0.8rem;

                    .quantity {
                        @include font(1.5rem, 2.5rem);
                        color: $col-burntSienna;
                    }

                    .item {
                        @include font(1.5rem, 2.5rem);
                        color: $col-black;
                        opacity: 0.5;
                    }
                }
            }
        }
    }

    .product__gallery {
        margin-top: 16rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.8rem;

            &:nth-child(1) {
                grid-area: 1 / 1 / 2 / 2;
            }

            &:nth-child(2) {
                grid-area: 2 / 1 / 3 / 2;
            }

            &:nth-child(3) {
                grid-area: 1 / 2 / 3 / 3;
            }
        }
    }
}
</style>

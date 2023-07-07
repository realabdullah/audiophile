<script lang="ts" setup>
const categories = [
    { title: "headphones", url: "/headphones", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569867/audiophile/desktop/home/gotlzjvxzman8du2qohz.png" },
    { title: "speakers", url: "/speakers", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569870/audiophile/desktop/home/ukfej69hrqfpuftboxos.png" },
    { title: "earphones", url: "/earphones", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569869/audiophile/desktop/home/h1oxbmbq5g78nth4lko7.png" },
];
</script>

<template>
    <div class="categories w-100 d-flex align-items-center">
        <div v-for="category in categories"
            class="categories__category position-relative d-flex align-items-end justify-content-center">
            <div class="categories__category-card d-flex flex-column align-items-center text-center">
                <img class="position-absolute" :src="category.image" :alt="category.title">
                <h4 class="text-transform-uppercase weight-700">{{ category.title }}</h4>
                <nuxt-link :to="category.url" class="text-transform-uppercase weight-700 d-flex align-items-center">
                    Shop
                    <IconCaret direction="right" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    max-width: 110rem;
    margin: 0 auto;
    margin-top: 20rem;
    margin-bottom: 16.8rem;
    padding: 0 3rem;
    gap: 3rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 10rem;
    }

    &__category {
        width: 35rem;
        height: 20.4rem;
        background-color: $col-silver;
        border-radius: 0.8rem;
        padding-bottom: 3rem;

        @media screen and (max-width: 768px) {
            width: 100%;
        }

        &-card {
            gap: 1.5rem;

            img {
                width: 12rem;
                height: 16rem;
                object-fit: contain;
                top: -8rem;
                filter: drop-shadow(0px 49px 19px #CAB7B7);
            }

            h1 {
                @include font(1.8rem, 2.5rem);
                letter-spacing: 0.1rem;
                color: $col-black;
            }

            a {
                gap: 1.3rem;
                @include font(1.3rem, 1.8rem);
                letter-spacing: 0.1rem;
                color: $col-black;
                opacity: 0.5;
                transition: color 0.3s ease-in-out;

                &:hover {
                    color: $col-burntSienna;
                    opacity: 1;
                }
            }
        }
    }
}
</style>


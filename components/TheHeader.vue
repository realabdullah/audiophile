<script lang="ts" setup>
const navLinks = ["home", "headphones", "speakers", "earphones"];
const categories = [
    { title: "headphones", url: "/headphones", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569867/audiophile/desktop/home/gotlzjvxzman8du2qohz.png" },
    { title: "speakers", url: "/speakers", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569870/audiophile/desktop/home/ukfej69hrqfpuftboxos.png" },
    { title: "earphones", url: "/earphones", image: "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569869/audiophile/desktop/home/h1oxbmbq5g78nth4lko7.png" },
];
const showMenu = ref(false);
const showCart = ref(false);

const toggleMenu = (status: boolean) => showMenu.value = status;
const toggleCart = (status: boolean) => showCart.value = status;
</script>

<template>
    <header class="header d-flex align-items-center justify-content-space-between">
        <!-- MOBILE -->
        <div class="header__left d-flex align-items-center">
            <Hamburger class="hamburger" @toggle-menu="toggleMenu" />

            <nuxt-link to="/" class="header__left-logo position-relative">
                <IconLogo />
            </nuxt-link>
        </div>

        <!-- DESKTOP -->
        <nuxt-link to="/" class="header__logo position-relative">
            <IconLogo />
        </nuxt-link>

        <nav class="header-navs">
            <ul class="d-flex align-items-center">
                <li v-for="link in navLinks" class="text-transform-uppercase weight-700">
                    <nuxt-link :to="link === 'home' ? '/' : `/${link}`">{{ link }}</nuxt-link>
                </li>
            </ul>
        </nav>

        <button class="header__cart position-relative" @click="toggleCart(true)">
            <IconCart />
        </button>

        <!-- mobile menu -->
        <div v-show="showMenu"
            class="mobile__menu position-absolute d-flex align-items-center justify-content-space-between">
            <div v-for="category in categories"
                class="menu-category position-relative d-flex align-items-end justify-content-center">
                <div class="menu-category-card d-flex flex-column align-items-center text-center">
                    <img class="position-absolute" :src="category.image" :alt="category.title">
                    <h4 class="text-transform-uppercase weight-700">{{ category.title }}</h4>
                    <nuxt-link :to="category.url" class="text-transform-uppercase weight-700 d-flex align-items-center">
                        Shop
                        <IconCaret direction="right" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </header>

    <!-- CART -->
    <Cart v-if="showCart" @toggle-cart="toggleCart(false)" />
</template>

<style lang="scss" scoped>
.header {
    padding: 3.3rem 0;
    background-color: transparent;
    border-bottom: 1px solid $col-white;

    &__left {
        gap: 4.2rem;
        color: $col-white;

        .hamburger {
            @media screen and (min-width: 768px) {
                display: none;
            }
        }

        &-logo {
            color: $col-white;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: $col-burntSienna;
            }

            @media screen and (max-width: 520px) {
                display: none;
            }
        }
    }

    &__logo {
        display: none;
        color: $col-white;

        @media screen and (max-width: 520px) {
            display: block;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: $col-burntSienna;
            }
        }
    }

    &-navs {

        @media screen and (max-width: 768px) {
            display: none;
        }

        ul {
            gap: 3.4rem;

            li {
                a {
                    @include font(1.3rem, 2.5rem);
                    color: $col-white;
                    transition: color 0.3s ease-in-out;

                    &:hover {
                        color: $col-burntSienna;
                    }
                }
            }
        }
    }

    &__cart {
        color: $col-white;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $col-burntSienna;
        }
    }
}

.mobile__menu {
    padding: 4rem;
    gap: 1rem;
    top: 97px;
    left: 0;
    width: 100%;
    height: auto;
    background-color: $col-white;
    padding-top: 9rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: #32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px;
    z-index: 9999;
    border-radius: 0 0 0.8rem 0.8rem;

    @media screen and (min-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 498px) {
        flex-direction: column;
        gap: 6.8rem;
    }

    .menu-category {
        width: 22rem;
        height: 16.5rem;
        background-color: $col-silver;
        border-radius: 0.8rem;
        padding-bottom: 2rem;

        @media screen and (max-width: 498px) {
            width: 100%;
            height: 16.5rem;
        }

        &-card {
            gap: 1rem;

            img {
                width: 8rem;
                height: 10rem;
                object-fit: contain;
                top: -5rem;
                filter: drop-shadow(0px 49px 19px #CAB7B7);
            }

            h1 {
                @include font(1.5rem, 2rem);
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

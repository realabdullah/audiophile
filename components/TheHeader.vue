<script lang="ts" setup>
const navLinks = ["home", "headphones", "speakers", "earphones"];
</script>

<template>
    <header class="header d-flex align-items-center justify-content-space-between">
        <div class="header__left d-flex align-items-center">
            <Hamburger class="hamburger" />

            <a href="/" class="header__left-logo">
                <IconLogo />
            </a>
        </div>

        <a href="/" class="header__logo">
            <IconLogo />
        </a>

        <nav class="header-navs">
            <ul class="d-flex align-items-center">
                <li v-for="link in navLinks" class="text-transform-uppercase weight-700">
                    <nuxt-link :to="`/${link}`">{{ link }}</nuxt-link>
                </li>
            </ul>
        </nav>

        <button class="header__cart">
            <IconCart />
        </button>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding: 3.3rem;
    background-color: transparent;
    border-bottom: 1px solid $col-white;

    &__left {
        gap: 4.2rem;

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

        @media screen and (max-width: 520px) {
            display: block;
            color: $col-white;
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
</style>

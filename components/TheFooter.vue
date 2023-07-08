<script lang="ts" setup>
const navLinks = ["home", "headphones", "speakers", "earphones"];
const socials = ["facebook", "twitter", "instagram"] as const;

// get current year
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer w-100">
        <div class="footer__content d-flex align-items-start justify-content-space-between">
            <div class="footer__content-left d-flex flex-column align-items-start">
                <nuxt-link to="/" class="logo" aria-label="logo">
                    <IconLogo />
                </nuxt-link>
                <ul class="mobile d-flex align-items-center">
                    <li v-for="link in navLinks" class="text-transform-uppercase weight-700">
                        <nuxt-link :to="link === 'home' ? '/' : `/${link}`">{{ link }}</nuxt-link>
                    </li>
                </ul>
                <span class="weight-500">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
                    music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our
                    demo facility - we’re open 7 days a week.</span>
                <div class="social-copyright d-flex align-items-center justify-content-space-between">
                    <p>Copyright {{ currentYear }}. All Rights Reserved</p>
                    <div class="socials d-flex align-items-center">
                        <a v-for="social in socials" :href="`https://www.${social}.com/`" target="_blank"
                            rel="noopener noreferrer" :aria-label="social">
                            <IconSocial :platform="social" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__content-right d-flex flex-column align-items-end">
                <ul class="d-flex align-items-center">
                    <li v-for="link in navLinks" class="text-transform-uppercase weight-700">
                        <nuxt-link :to="link === 'home' ? '/' : `/${link}`">{{ link }}</nuxt-link>
                    </li>
                </ul>

                <div class="footer__content-right-socials d-flex align-items-center">
                    <a v-for="social in socials" :href="`https://www.${social}.com/`" target="_blank"
                        rel="noopener noreferrer" :aria-label="social">
                        <IconSocial :platform="social" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: $col-jetBlack;
    padding: 7.5rem 0;

    &__content {
        max-width: 110rem;
        margin: 0 auto;
        padding: 0 3rem;
        gap: 2rem;

        @media screen and (max-width: 1090px) {
            display: block;
        }

        a {
            color: $col-white;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: $col-burntSienna;
            }
        }

        &-left {
            @media screen and (max-width: 1090px) {
                align-items: unset !important;
            }

            @media screen and (max-width: 768px) {
                align-items: center !important;
            }

            .logo {
                margin-bottom: 3.6rem;

                @media screen and (max-width: 768px) {
                    margin-bottom: 4.8rem;
                }

                @media screen and (min-width: 1091px) {
                    margin-bottom: 3.2rem;
                }
            }

            .mobile {
                gap: 3.4rem;
                margin-bottom: 3.2rem;

                @media screen and (max-width: 768px) {
                    margin-bottom: 4.8rem;
                    flex-direction: column;
                }

                @media screen and (min-width: 1091px) {
                    display: none;
                }
            }

            span {
                color: $col-white;
                opacity: 0.5;
                @include font(1.5rem, 2.5rem);
                max-width: 54rem;

                @media screen and (max-width: 768px) {
                    max-width: 32.7rem;
                    text-align: center;
                }
            }

            .social-copyright {
                margin-top: 5.6rem;

                @media screen and (max-width: 768px) {
                    flex-direction: column;
                    gap: 4.8rem;
                }

                p {
                    color: $col-white;
                    opacity: 0.5;
                    @include font(1.5rem, 2.5rem);
                }

                .socials {
                    display: none;

                    @media screen and (max-width: 1090px) {
                        display: flex;
                        gap: 1.6rem;
                    }
                }
            }
        }

        &-right {
            gap: 10rem;

            @media screen and (max-width: 1090px) {
                display: none;
            }

            ul {
                gap: 3.4rem;

                li {
                    a {
                        color: $col-white;
                        @include font(1.3rem, 2.5rem);
                        letter-spacing: 0.2rem;
                    }
                }
            }

            &-socials {
                gap: 1.6rem;

                a {
                    color: $col-white;
                }
            }
        }
    }
}
</style>


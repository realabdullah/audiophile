<script lang="ts" setup>
const route = useRoute();
</script>

<template>
    <Categories v-if="route.name !== 'home'" />
    <section class="container">
        <div class="container__content d-flex align-items-center justify-content-space-between">
            <div class="container__content-left">
                <h1 class="weight-700 text-transform-uppercase">Bringing you the <span>best</span> audio gear</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet some
                    of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <div class="container__content-right">
                <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1688413129/audiophile/desktop/home/iqw6vlxk4gvi4zk0fzzw.png"
                    alt="person on headgear">
            </div>
        </div>
    </section>

    <TheFooter />
</template>

<style lang="scss" scoped>
.container {
    margin: 20rem 0;

    @media (max-width: 768px) {
        margin: 12rem 0;
    }

    &__content {
        max-width: 110rem;
        margin: 0 auto;
        padding: 0 3rem;
        gap: 12.5rem;

        @media (max-width: 768px) {
            flex-direction: column-reverse;
            gap: 5rem;
        }

        @media (min-width: 769px) and (max-width: 999px) {
            gap: 5rem;
        }

        &-left {
            @media (max-width: 768px) {
                text-align: center;
                height: 100%;
            }

            h1 {
                max-width: 40rem;
                @include font(4rem, 4.4rem);
                letter-spacing: 0.15rem;
                color: $col-black;
                margin-bottom: 3.2rem;

                @media (max-width: 768px) {
                    max-width: 57rem;
                }

                span {
                    color: $col-burntSienna;
                }
            }

            p {
                max-width: 44.5rem;
                @include font(1.5rem, 2.5rem);
                color: $col-black;
                opacity: 0.5;

                @media (max-width: 768px) {
                    max-width: 57rem;
                }
            }
        }

        &-right {
            max-width: 54rem;
            max-height: 58.8rem;

            @media (max-width: 768px) {
                width: 100%;
                height: 30rem;
                max-width: 68.9rem;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0.8rem;
            }
        }
    }
}
</style>

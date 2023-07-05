<script lang="ts" setup>
const route = useRoute();

// const height = ref("72.9rem");
const height = computed(() => route.name === "home" ? "72.9rem" : "33.6rem");
</script>

<template>
    <section class="hero__section w-100" :class="route.name !== 'home' ? 'not-home' : 'home'">
        <div class="hero__section-body">
            <TheHeader />

            <div v-if="route.name === 'home'" class="hero__section-body--content d-flex flex-column align-items-start">
                <span class="new-product weight-400">NEW PRODUCT</span>
                <h1 class="title weight-700">XX99 Mark II Headphones</h1>
                <span class="detail weight-500">Experience natural, lifelike audio and exceptional build quality made for
                    the passionate music enthusiast.</span>
                <BaseButton variant="solid" text="See product" />
            </div>

            <div v-else>
                <h1 class="text-center text-transform-uppercase">{{ route.name }}</h1>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.not-home {
    h1 {
        color: $col-white;
        @include font(4rem, 4.4rem);
        letter-spacing: 0.1rem;
        margin-top: 9rem;
    }
}

.home {
    background-image: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1688561385/audiophile/desktop/uvk2bszjehwhq0scdx9k.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        background-image: url('https://res.cloudinary.com/dxvhsze0l/image/upload/v1688412960/audiophile/desktop/home/wh1ieqou8f2cj23y6z05.png');
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0c0c0cb3;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        background-size: 115rem;
    }

    @media screen and (min-width: 1500px) {
        background-size: 150rem;
    }
}

.hero__section {
    background-color: #060606f0;

    height: 100vh;
    max-height: v-bind(height);

    &-body {
        max-width: 110rem;
        margin: 0 auto;
        padding: 0 3rem;

        &--content {
            max-width: 39.8rem;
            margin-top: 12.8rem;

            @media screen and (max-width: 768px) {
                align-items: center !important;
                text-align: center;

                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .new-product {
                @include font(1.4rem, 1.9rem);
                letter-spacing: 1rem;
                padding-bottom: 2.4rem;
                color: $col-white;
                opacity: 0.5;
            }

            .title {
                color: $col-white;
                @include font(5.6rem, 5.8rem);
                letter-spacing: 0.2rem;
                margin-bottom: 2.4rem;
            }

            .detail {
                max-width: 34.9rem;
                @include font(1.5rem, 2.5rem);
                color: $col-white;
                opacity: 0.75;
                margin-bottom: 4rem;
            }
        }
    }
}
</style>

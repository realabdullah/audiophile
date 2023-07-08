<script lang="ts" setup>

</script>

<template>
    <div class="home__products">
        <div class="home__products-product w-100 d-flex align-items-center justify-content-end position-relative">
            <img class="position-absolute"
                src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569870/audiophile/desktop/home/ukfej69hrqfpuftboxos.webp"
                alt="speaker">
            <div class="home__products-product-info">
                <h1 class="weight-700">ZX9 SPEAKER</h1>
                <p class="weight-500">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                    sound.</p>
                <BaseButton class="btn" variant="solid" text="See Product" type="link" url="/product/zx9-speaker" />
            </div>
        </div>

        <div class="second__product d-flex flex-column align-items-start justify-content-center">
            <h1 class="weight-700">ZX7 SPEAKER</h1>
            <BaseButton class="btn" variant="solid" text="See Product" type="link" url="/product/zx7-speaker" />
        </div>

        <div class="earphone d-flex align-items-stretch">
            <div class="earphone-image"></div>
            <div class="earphone-content d-flex flex-column align-items-start justify-content-center">
                <h1 class="weight-700">YX1 EARPHONES</h1>
                <BaseButton class="btn" variant="solid" text="See Product" type="link" url="/product/yx1-earphones" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home__products {
    max-width: 110rem;
    margin: 0 auto;
    padding: 0 3rem;

    &-product {
        background-color: $col-burntSienna;
        height: 56rem;
        border-radius: 0.8rem;

        @media screen and (max-width: 868px) {
            height: 65rem;
            flex-direction: column;
            justify-content: center !important;
        }

        img {
            max-width: 40rem;
            max-height: 49rem;
            object-fit: cover;
            bottom: -3rem;
            left: 8%;

            @media screen and (max-width: 868px) {
                position: unset !important;
                max-width: 19.7rem;
                max-height: 23rem;
            }

            @media (min-width: 869px) and (max-width: 977px) {
                left: 5rem;
            }
        }

        &-info {
            max-width: 35rem;
            margin-right: calc(9.3rem / 56rem * 50%);

            @media screen and (max-width: 868px) {
                margin-right: 0;
                text-align: center;
            }

            @media (min-width: 869px) and (max-width: 977px) {
                margin-right: 0;
            }

            h1 {
                max-width: 26rem;
                @include font(5.6rem, 5.8rem);
                letter-spacing: 0.2rem;
                color: $col-white;
                margin-bottom: 2.4rem;

                @media screen and (max-width: 868px) {
                    margin: 6rem auto 2.4rem;
                }
            }

            p {
                @include font(1.5rem, 2.5rem);
                color: $col-white;
                opacity: 0.75;
                margin-bottom: 4rem;
            }
        }
    }

    .second__product {
        margin: 4.8rem auto;
        border-radius: 0.8rem;
        gap: 3.2rem;
        height: 32rem;
        background: url("https://res.cloudinary.com/dxvhsze0l/image/upload/v1688413129/audiophile/desktop/home/d6pwr9y0vffbi5jljqqe.webp") no-repeat center center;
        padding: 0 9.5rem;

        @media screen and (max-width: 600px) {
            padding: 0 3rem;
        }
    }

    .earphone {
        gap: 3rem;

        @media screen and (max-width: 868px) {
            flex-direction: column;
        }

        &-image {
            width: 54rem;
            height: 32rem;
            background: url("https://res.cloudinary.com/dxvhsze0l/image/upload/v1688413128/audiophile/desktop/home/gtjwqsznwy0b8hptjvkr.webp") no-repeat center center;
            background-size: cover;
            border-radius: 0.8rem;

            @media screen and (max-width: 868px) {
                width: 100%;
            }
        }

        &-content {
            width: 54rem;
            height: 32rem;
            background-color: $col-silver;
            border-radius: 0.8rem;
            gap: 3.2rem;
            padding: 0 9.5rem;

            @media screen and (max-width: 868px) {
                width: 100%;
                padding: 0 3rem;
            }

            h1 {
                @include font(2.8rem, 3.8rem);
                letter-spacing: 0.2rem;
                color: $col-black;
            }
        }
    }
}

.btn {
    background-color: $col-black;

    &:hover {
        opacity: 0.75;
    }
}
</style>

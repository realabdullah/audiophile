<script lang="ts" setup>
defineEmits(["toggle-cart"]);
</script>

<template>
    <div class="position-relative">
        <div class="cart d-flex flex-column w-100">
            <!-- CART HEADER -->
            <div class="cart__header d-flex align-items-center justify-content-space-between">
                <h2 class="text-transform-uppercase weight-700">cart (3)</h2>
                <button class="cart__header-close">Remove all</button>
            </div>

            <!-- CART ITEMS -->
            <div class="cart__items d-flex flex-column">
                <div class="cart__items-item d-flex align-items-center justify-content-space-between">
                    <div class="cart__items-item-content d-flex align-items-center">
                        <div class="cart__items-item-content-image d-flex align-items-center justify-content-center">
                            <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569867/audiophile/desktop/home/gotlzjvxzman8du2qohz.png"
                                alt="">
                        </div>
                        <div class="cart__items-item-content-info d-flex flex-column align-items-start">
                            <p class="weight-700">XX99 MK II</p>
                            <span class="weight-700">$ 2,999</span>
                        </div>
                    </div>

                    <div class="cart__items-item-count">
                        <BaseCount />
                    </div>
                </div>

                <div class="cart__items-item d-flex align-items-center justify-content-space-between">
                    <div class="cart__items-item-content d-flex align-items-center">
                        <div class="cart__items-item-content-image d-flex align-items-center justify-content-center">
                            <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569867/audiophile/desktop/home/gotlzjvxzman8du2qohz.png"
                                alt="">
                        </div>
                        <div class="cart__items-item-content-info d-flex flex-column align-items-start">
                            <p class="weight-700">XX99 MK II</p>
                            <span class="weight-700">$ 2,999</span>
                        </div>
                    </div>

                    <div class="cart__items-item-count">
                        <BaseCount />
                    </div>
                </div>

                <div class="cart__items-item d-flex align-items-center justify-content-space-between">
                    <div class="cart__items-item-content d-flex align-items-center">
                        <div class="cart__items-item-content-image d-flex align-items-center justify-content-center">
                            <img src="https://res.cloudinary.com/dxvhsze0l/image/upload/v1688569867/audiophile/desktop/home/gotlzjvxzman8du2qohz.png"
                                alt="">
                        </div>
                        <div class="cart__items-item-content-info d-flex flex-column align-items-start">
                            <p class="weight-700">XX99 MK II</p>
                            <span class="weight-700">$ 2,999</span>
                        </div>
                    </div>

                    <div class="cart__items-item-count">
                        <BaseCount />
                    </div>
                </div>
            </div>

            <!-- CART TOTAL -->
            <div class="cart__total d-flex align-items-center justify-content-space-between">
                <p class="weight-500">TOTAL</p>
                <span class="weight-700">$ 5,997</span>
            </div>

            <!-- CHECKOUT BTN -->
            <BaseButton class="checkout w-100" variant="solid" text="checkout" type="link" url="/checkout" />
        </div>
    </div>

    <!-- MODAL OVERLAY -->
    <div class="modal-overlay" @click="$emit('toggle-cart')"></div>
</template>

<style lang="scss" scoped>
.cart {
    padding: 3rem 3.3rem;
    max-width: 37.7rem;
    background-color: $col-white;
    border-radius: 0.8rem;

    position: absolute;
    top: 3rem;
    right: 0;
    z-index: 100;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        top: 3rem;
        left: 0;
        padding: 3.2rem 2.8rem;
    }

    @media screen and (max-width: 400px) {
        padding: 3.2rem 1rem;
    }

    &__header {
        margin-bottom: 3rem;

        h2 {
            @include font(1.8rem, 2.5rem);
            color: $col-black;
        }

        &-close {
            @include font(1.5rem, 2.5rem);
            color: $col-black;
            opacity: 0.5;
            text-decoration: underline;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: $col-burntSienna;
                opacity: 1;
            }
        }
    }

    &__items {
        gap: 2.4rem;

        &-item {
            &-content {
                gap: 1.6rem;

                &-image {
                    width: 6.4rem;
                    height: 6.4rem;
                    border-radius: 0.8rem;
                    background-color: $col-silver;
                    padding: 1.6rem;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                &-info {
                    gap: 0.2rem;

                    p {
                        @include font(1.5rem, 2.5rem);
                        color: $col-black;
                    }

                    span {
                        @include font(1.5rem, 2.5rem);
                        color: $col-black;
                        opacity: 0.5;
                    }
                }
            }
        }
    }

    &__total {
        margin-top: 3.2rem;

        p {
            @include font(1.5rem, 2.5rem);
            color: $col-black;
            opacity: 0.5;
        }

        span {
            @include font(1.8rem, 2.5rem);
            color: $col-black;
        }
    }

    .checkout {
        margin-top: 2.4rem;
        max-width: 100%;
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>

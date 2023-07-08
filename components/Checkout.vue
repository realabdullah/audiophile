<script lang="ts" setup>
let getCartItems: () => Promise<CartItem[]>;
const { cart } = storeToRefs(useStore());

const paymentOption = ref("");

const totalPrice = computed(() => {
    return cart.value.reduce((acc: number, curr: { price: string; quantity: number; }) => {
        return acc + Number(curr.price) * curr.quantity;
    }, 0);
});

const vat = computed(() => (totalPrice.value * 0.2).toFixed(2));

const grandTotal = computed(() => (Number(totalPrice.value) + Number(vat.value) + 50).toFixed(2));

onMounted(async () => {
    getCartItems = useCart().getCart;
    cart.value = await getCartItems();
});
</script>

<template>
    <div class="container">
        <BaseButton variant="link" text="Go Back" />

        <div class="checkout d-flex align-items-start justify-content-space-between">
            <div class="checkout__body w-100">
                <h1 class="checkout__body-header weight-700">CHECKOUT</h1>

                <form class="checkout__body-form">
                    <h4 class="checkout__body-form-header weight-700 text-transform-uppercase">Billing Details</h4>

                    <div class="form-group">
                        <BaseText label="Name" for="name" placeholder="Alexei Ward" :error="false" />
                        <BaseText label="Email Address" for="email" placeholder="Aalexei@mail.com" :error="false" />
                    </div>

                    <div class="form-group">
                        <BaseText label="Phone Number" for="telephone" placeholder="+1 202-555-0136" type="tel"
                            :error="false" />
                    </div>

                    <h4 class="checkout__body-form-header weight-700 text-transform-uppercase">shipping info</h4>

                    <BaseText style="margin-bottom: 2.4rem;" label="Address" for="address"
                        placeholder="1137 Williams Avenue" :error="false" />

                    <div class="form-group">
                        <BaseText label="ZIP Code" for="zipcode" placeholder="10001" type="number" :error="false" />
                        <BaseText label="City" for="city" placeholder="New York" :error="false" />
                    </div>

                    <div class="form-group">
                        <BaseText label="Country" for="country" placeholder="United States" :error="false" />
                    </div>

                    <h4 class="checkout__body-form-header weight-700 text-transform-uppercase">payment details</h4>

                    <div class="form-group">
                        <p class="label weight-700">Payment Method</p>

                        <div>
                            <BaseRadio v-model="paymentOption" style="margin-bottom: 2.4rem;" label="e-Money"
                                name="paymentoption" for="emoney" value="emoney" @update-value="paymentOption = $event" />
                            <BaseRadio v-model="paymentOption" label="Cash on Delivery" name="paymentoption" for="cod"
                                value="cod" @update-value="paymentOption = $event" />
                        </div>
                    </div>

                    <div v-show="paymentOption !== '' && paymentOption === 'emoney'" class="form-group">
                        <BaseText label="e-Money Number" for="emoney" placeholder="238521993" type="number" value=""
                            :error="false" />
                        <BaseText label="e-Money PIN" for="epin" placeholder="6891" type="number" value="" :error="false" />
                    </div>

                    <div v-show="paymentOption !== '' && paymentOption === 'cod'" class="cod d-flex align-items-center">
                        <IconCod />
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at
                            your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>
                    </div>
                </form>
            </div>

            <div class="cart w-100">
                <!-- CART HEADER -->
                <h2 class="cart__header text-transform-uppercase weight-700">summary</h2>

                <!-- CART ITEMS -->
                <div class="cart__items d-flex flex-column">
                    <div v-for="item in cart"
                        class="cart__items-item d-flex align-items-center justify-content-space-between">
                        <div class="cart__items-item-content d-flex align-items-center">
                            <div class="cart__items-item-content-image d-flex align-items-center justify-content-center">
                                <img :src="item.image" :alt="item.name">
                            </div>
                            <div class="cart__items-item-content-info d-flex flex-column align-items-start">
                                <p class="weight-700">{{ item.name }}</p>
                                <span class="weight-700">$ {{ formatAmount(item.price) }}</span>
                            </div>
                        </div>

                        <span class="cart__items-item-count weight-700">x{{ item.quantity }}</span>
                    </div>
                </div>

                <!-- CART TOTAL -->
                <div style="margin-top: 3.2rem;"
                    class="cart__total d-flex align-items-center justify-content-space-between">
                    <p class="weight-500">TOTAL</p>
                    <span class="weight-700">$ {{ formatAmount(totalPrice) }}</span>
                </div>

                <div style="margin-top: 0.7rem;"
                    class="cart__total d-flex align-items-center justify-content-space-between">
                    <p class="weight-500">SHIPPING</p>
                    <span class="weight-700">$ 50</span>
                </div>

                <div style="margin-top: 0.7rem;"
                    class="cart__total d-flex align-items-center justify-content-space-between">
                    <p class="weight-500">VAT (INCLUDED)</p>
                    <span class="weight-700">$ {{ formatAmount(vat) }}</span>
                </div>

                <div style="margin-top: 2.4rem;"
                    class="cart__total d-flex align-items-center justify-content-space-between">
                    <p class="weight-500">GRAND TOTAL</p>
                    <span class="grand weight-700">$ {{ formatAmount(grandTotal) }}</span>
                </div>

                <!-- CHECKOUT BTN -->
                <BaseButton class="checkout-btn w-100" variant="solid" text="CONTINUE & PAY" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 110rem;
    margin: 0 auto;
    padding: 0 3rem;

    .checkout {
        gap: 3rem;

        @media screen and (max-width: 890px) {
            flex-direction: column;
        }

        &__body {
            max-width: 73rem;
            background-color: $col-white;
            margin-top: 3.8rem;
            padding: 5.4rem 4.8rem 4.8rem;
            border-radius: 0.8rem;

            @media screen and (max-width: 600px) {
                padding: 2.4rem;
            }

            @media screen and (max-width: 890px) {
                max-width: 100%;
            }

            &-header {
                margin-bottom: 4.1rem;
                @include font(3.2rem, 3.6rem);
                letter-spacing: 0.14rem;
                color: $col-black;

                @media screen and (max-width: 600px) {
                    @include font(2.8rem, 3.8rem);
                }
            }

            &-form {

                &-header {
                    margin-bottom: 1.6rem;
                    @include font(1.3rem, 2.5rem);
                    letter-spacing: 0.1rem;
                    color: $col-burntSienna;
                }

                .form-group {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 1.6rem;
                    margin-bottom: 2.4rem;

                    @media screen and (max-width: 600px) {
                        grid-template-columns: 1fr;
                    }

                    .label {
                        color: $col-black;
                        @include font(1.2rem, 1.6rem);
                    }
                }

                .cod {
                    gap: 3.2rem;

                    p {
                        @include font(1.5rem, 2.5rem);
                        font-weight: 500;
                        color: $col-black;
                        opacity: 0.5;
                    }
                }
            }
        }

        .cart {
            max-width: 35rem;
            margin-top: 3.8rem;
            padding: 3.2rem 3.3rem;
            background-color: $col-white;
            border-radius: 0.8rem;

            @media screen and (max-width: 600px) {
                padding: 3.2rem 2.4rem;
            }

            @media screen and (max-width: 890px) {
                max-width: 100%;
            }

            &__header {
                margin-bottom: 3rem;

                h2 {
                    @include font(1.8rem, 2.5rem);
                    color: $col-black;
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

                    &-count {
                        @include font(1.5rem, 2.5rem);
                        color: $col-black;
                        opacity: 0.5;
                    }
                }
            }

            &__total {

                p {
                    @include font(1.5rem, 2.5rem);
                    color: $col-black;
                    opacity: 0.5;
                }

                span {
                    @include font(1.8rem, 2.5rem);
                    color: $col-black;
                }

                .grand {
                    color: $col-burntSienna;
                }
            }

            .checkout-btn {
                margin-top: 3.2rem;
                max-width: 100%;
            }
        }
    }
}
</style>

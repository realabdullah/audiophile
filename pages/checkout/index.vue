<script lang="ts" setup>
definePageMeta({
    layout: "product"
});

useHead({ title: "Checkout - Audiophiles" })
</script>

<template>
    <div class="checkout-page">
        <Checkout />
    </div>
</template>

<style lang="scss" scoped>
.checkout-page {
    padding: 7.9rem 0;
    padding-bottom: 14.1rem;
    background-color: $col-silver;

    @media screen and (max-width: 600px) {
        padding-top: 3.6rem;
    }
}
</style>

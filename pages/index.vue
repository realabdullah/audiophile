<script lang="ts" setup>

</script>

<template>
    <div>
        <TheHeader />
        <h1>AUDIO-PHILE</h1>
        <BaseButton variant="solid" text="See prodUCT" />
        <br>
        <br>
        <BaseButton variant="outline" text="See prodUCT" />
        <br>
        <br>
        <BaseButton variant="link" text="Shop" />
        <br>
        <br>
        <BaseText label="Shop" for="shop" placeholder="Insert your name" :error="false" />
        <br>
        <br>
        <BaseRadio label="Shop" for="shop" />
        <br>
        <br>
        <BaseCount />
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: rgba(12, 12, 12, 0.89);
    max-width: 110rem;
    margin: 0 auto;
}
</style>


<script lang="ts" setup>

</script>

<template>
    <div class="header">
        <div class="header-wrapper">
            <TheHeader />
        </div>
    </div>
    <slot />
    <FooterWrapper />
</template>

<style scoped lang="scss">
.header {
    background-color: $col-black;

    &-wrapper {
        max-width: 110rem;
        margin: 0 auto;
        padding: 0 3rem;
    }
}
</style>

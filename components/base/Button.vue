<script lang="ts" setup>
interface ButtonProps {
    variant: 'solid' | 'outline' | 'link';
    text: string;
};

defineProps<ButtonProps>();
</script>

<template>
    <button class="weight-700 text-transform-uppercase text-wrap-nowrap text-center"
        :class="[variant, { 'btn w-100': variant !== 'link' }]">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
    @include font(1.3rem, 1.7rem);
    letter-spacing: 0.1rem;
}

.btn {
    max-width: 160px;
    padding: 1.5rem 0;
}

.solid {
    background-color: $col-burntSienna;
    color: $col-white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: $col-peach;
        color: $col-white;
    }
}

.outline {
    background-color: $col-white;
    color: $col-black;
    border: 0.1rem solid $col-black;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: $col-black;
        color: $col-white;
    }
}

.link {
    background-color: transparent;
    color: $col-black;
    opacity: 0.5;

    &:hover {
        color: $col-burntSienna;
        opacity: 1;
    }
}
</style>


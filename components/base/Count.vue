<script lang="ts" setup>
const count = ref(1);

const mutateCount = (action: string) => {
    if (action === "increment") count.value++;
    else if (count.value <= 1) return;
    else count.value--;
};
</script>

<template>
    <div class="count w-100 d-flex align-items-center justify-content-center">
         <button @click="mutateCount('decrement')" :class="{ 'in-active': count <= 1 }">-</button>
         <span>{{ count }}</span>
         <button @click="mutateCount('increment')">+</button>
    </div>
</template>

<style lang="scss" scoped>
.count {
    max-width: 12rem;
    height: 4.8rem;
    background: $col-silver;
    gap: 2rem;
    padding: 0.7rem 1.5rem;

    button {
        color: $col-black;
        opacity: 0.5;
        transition: 0.4s ease-in-out;

        &:hover {
            color: $col-burntSienna;
            opacity: 1;
        }
    }

    span {
        color: $col-black;
        @include font(1.3rem, 1.7rem);
    }

    .in-active {
        cursor: not-allowed;
    }
}
</style>

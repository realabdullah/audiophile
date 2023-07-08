<script lang="ts" setup>
interface CountProps {
    count: number;
    usage?: string;
}

type CountEmits = "increment" | "decrement";

withDefaults(defineProps<CountProps>(), {
    count: 1,
    usage: "page",
});
const emits = defineEmits<{ (event: "update-count", type: CountEmits): void }>();

const mutateCount = (type: CountEmits) => emits("update-count", type);
</script>

<template>
    <div class="count d-flex align-items-center justify-content-center"
        :style="`width: ${usage === 'page' ? '14rem' : '8rem'}`">
        <button @click="mutateCount('decrement')">-</button>
        <span>{{ count }}</span>
        <button @click="mutateCount('increment')">+</button>
    </div>
</template>

<style lang="scss" scoped>
.count {
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
}
</style>

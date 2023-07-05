<script lang="ts" setup>
interface CaretProps {
    direction: 'up' | 'down' | 'left' | 'right';
};

defineProps<CaretProps>();
</script>

<template>
    <svg v-if="direction === 'right'" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="currentColor" stroke-width="2" />
    </svg>
</template>

<script lang="ts" setup>
const sideBarActive = ref(false);

const toggleSideBar = () => {
    sideBarActive.value = !sideBarActive.value;
};
</script>

<template>
    <div class="hamburger position-relative" :class="{ active: sideBarActive }" @click="toggleSideBar">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</template>

<style lang="scss" scoped>
.hamburger {
    cursor: pointer;

    .line {
        display: block;
        width: 1.6rem;
        height: 0.3rem;
        background-color: $col-white;
        margin: 0.3rem 0;
        transition: 0.3s ease-in-out;
    }
}

.active {
    z-index: 2;

    .line {
        &:nth-child(1) {
            transform: rotate(-45deg) translate(-0.5rem, 0.5rem);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:nth-child(3) {
            transform: rotate(45deg) translate(-0.35rem, -0.37rem);
        }
    }
}
</style>


<script lang="ts" setup>
interface BaseRadioProps {
    name: string;
    label: string;
    for: string;
}

defineProps<BaseRadioProps>();
</script>

<template>
    <div class="radio">
        <input class="d-none" :name="name" :id="for" type="radio" />
        <label :for="for" class="d-block weight-700 w-100 text-wrap-nowrap position-relative">
            <span>{{ label }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.radio {

    input {
        &:checked~label {
            border-color: $col-burntSienna;

            &::before {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    label {
        padding: 1.8rem 1.6rem;
        background: transparent;
        border: 1px solid $col-shadeOfGray;
        border-radius: 0.8rem;
        cursor: pointer;
        @include font(1.4rem, 1.9rem);
        transition: 0.4s ease-in-out 0s;

        &:hover {
            border-color: $col-burntSienna;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
        }

        &::after {
            width: 2rem;
            height: 2rem;
            border: 1px solid $col-shadeOfGray;
            left: 1.6rem;
        }

        &::before {
            width: 1rem;
            height: 1rem;
            top: 50%;
            transform: translate(50%, -50%);
            background-color: $col-burntSienna;
            opacity: 0;
            visibility: hidden;
            transition: 0.4s ease-in-out 0s;
        }

        span {
            padding-left: 3.6rem;
        }
    }
}
</style>

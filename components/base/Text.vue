<script lang="ts" setup>
interface TextProps {
    label: string;
    for: string;
    placeholder: string;
    error: boolean;
    type?: "text" | "number" | "email" | "tel";
};

withDefaults(defineProps<TextProps>(), {
    type: "text"
});
</script>

<template>
    <label :for="for" class="d-block w-100">
        <p class="label d-flex align-items-center justify-content-space-between" :class=" { error } ">
            <span class="weight-700">{{ label }}</span>
            <span v-if=" error " class="weight-500">Wrong format</span>
        </p>
        <input :type=" type " :placeholder=" placeholder " class="w-100" :class=" { 'i-error': error } ">
    </label>
</template>

<style lang="scss" scoped>
label {
    // max-width: 30.9rem;

    .label {
        margin-bottom: 0.9rem;
        color: $col-black;
        @include font(1.2rem, 1.6rem);
    }

    input {
        padding: 1.8rem 2.4rem;
        border: 1px solid $col-shadeOfGray;
        border-radius: 0.8rem;
        color: $col-black;
        @include font(1.4rem, 1.9rem);
        transition: border-color 0.2s ease-in-out;

        &:focus {
            outline: none;
            border-color: $col-burntSienna;
        }

        &::placeholder {
            color: $col-black;
            opacity: 0.4;
        }
    }

    .error {
        color: $col-crimson;
    }

    .i-error {
        border: 0.2rem solid $col-crimson;
    }
}
</style>

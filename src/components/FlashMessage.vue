<template>
    <div
        class="flex items-center text-white text-sm font-bold px-4 py-3 mb-6"
        role="alert"
        v-show="show"
    >
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "FlashMessage",
    props: {
        message: {
            type: String,
            required: true
        },
        show: {
            type: Boolean,
            required: true
        }
    },
};
</script>
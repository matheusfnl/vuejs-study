<template>
    <div>
        <input @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',

    methods: {
        onInput(event) {
            this.$emit('termChange', event.target.value)
        }
    }
}
</script>

<style scoped>
    input {
        width: 50%;
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>
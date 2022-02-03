<template>
    <div id="app">

        <div class="panel">
            <Score></Score>
        </div>
        <div class="panel result"></div>
        <div class="panel buttons"></div>
        <div class="panel logs"></div>
    </div>
</template>

<script>
import Score from './components/Score.vue'

export default {
    name: 'App',
    components: {
        Score,
    },
    methods: {

    }
}
</script>

<style scoped>
    #app {
        font-family: 'Montserrat Alternates', sans-serif;
        display: flex;
        flex-direction: column;
    }

    .panel {
        margin: 10px;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
</style>
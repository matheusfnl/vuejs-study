<template>
    <div class="scores">

        <div class="score">
            <h1>Jogador</h1>
            <div class="life-bar">
                <div class="life"
                    :class="{danger: playerLife <= 20}"
                    :style="{width: playerLife + '%'}"></div>
            </div>
            <div> {{playerLife}}% </div>
        </div>

        <div class="score">
            <h1>Monstro</h1>
            <div class="life-bar">
                <div class="life"
                    :class="{danger: monsterLife <= 20}"
                    :style="{width: monsterLife + '%'}"></div>
            </div>
            <div> {{monsterLife}}% </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Score',
    data() {
        return {
            playerLife: 0,
            monsterLife: 100,
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    watch: {

    }
}
</script>

<style scoped>
    .scores {
        display: flex;
    }

    .score {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .score h1 {
        font-weight: 400;
        font-size: 2.2rem;
    }

    .life-bar {
        width: 80%;
        height: 25px;
        border: 1px solid #aaa;
    }

    .life-bar .life {
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: rgb(106, 255, 106);
    }

    .life-bar .danger {
        background-color: rgb(255, 92, 92);
    }
</style>
<template>
    <li class="list-group-item media" @click="onVideoSelect">
        <img class="mr-3" :src="thumbnailUrl" />
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
        transition: font-size .2s;
    }

    li:hover {
        background-color: rgb(233, 233, 233);
        font-size: 17px;
    }

    li div {
        margin-left: 15px;
    }
</style>
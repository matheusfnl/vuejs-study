<template>
    <ul class="list-group col-md-4">
        <VideoListItem
            v-for="video in videos"
            :key="video.etag"
            :video="video"
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './videoListItem.vue';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    },
    props: ['videos']
}
</script>

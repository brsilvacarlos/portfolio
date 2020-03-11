<template>
    <div @click="goFullscreen" v-bind:style="'background-image: url('+img+ ');'"></div>
</template>

<script>
export default {
    props: ['img', 'onSelect'],
    computed: {
        backgroundImage(){
            return {
                'background-image': this.img
            }
        }
    },
    methods: {
        goFullscreen: function(e) {
            console.log('teste');
            this.onSelect(this.item, e.target.getBoundingClientRect())
        }
    },
}
</script>

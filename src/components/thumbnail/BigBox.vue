<template>
    <div v-bind:style="">
        
    </div>
</template>


<script>
export default {
    props: ['position', 'selected', 'onSelect'],
    created() {
        /* var css = {}
            for (var key in position) {
                css[key] = position[key] + 'px';
            }
            
        element.css(css); */

        setTimeout(() => {
                element.css({
                    top: '50%',
                    left: '10%'
                })
                element.addClass('image-out');
            }, 200);

            setTimeout(() => {
                element.css({
                    width: '80%',
                    height: '100%'
                })
            }, 500)
            
            setTimeout(() => {
                element.addClass('show');
            }, 800)
    },
}
</script>
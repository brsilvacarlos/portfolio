<template>
    <div>
        <Col :span="4">
            <Avatar :src="imagemCategoria" shape="square" size="100" />
        </Col>
    </div>
</template>


<script>

    export default {
        props: ['imagemCategoria'],
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>

    
</style>
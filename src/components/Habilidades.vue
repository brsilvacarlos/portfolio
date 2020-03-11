<template>
    <div>
        <ul>
            <Habilidade v-for="habilidade in habilidades" v-bind:key="habilidade" :imagemCategoria="habilidade.imagemCategoria"/>
        </ul>
    </div>
</template>

<script>

    import Habilidade from '@/components/Habilidade'

    export default {
        components: {Habilidade},
        data(){
            return {
                'habilidades': [
                    {
                       'imagemCategoria': "https://focusnfe.com.br/wp-content/themes/novo-focus-nfe/novo/img/exemplos-de-codigo/java-topo.svg"
                    },
                    {
                       'imagemCategoria': "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                    },
                    {
                       'imagemCategoria': "https://wishtech.com.br/wp-content/uploads/2018/03/php-logo.png"
                    }
                ]
            }
        } 
    }
</script>
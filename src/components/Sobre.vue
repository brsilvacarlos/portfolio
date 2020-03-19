<template>
    <div>
        <h1>Sobre Mim</h1>
        <p>Me chamo Carlos Augusto, eu sou graduado em Ciência da Computação, e atualmente possuo o cargo de Analista de Sistemas Pleno.</p>
        <p>Sou fascinado por programação, e sempre possuo interesse em aprender mais sobre linguagens de programação, sistemas operacionais, novas tecnologias, enfim, tudo ligado à tecnologia da informação.</p>

        <h2>Histórico Profissional</h2>
        <Row>
            <Col span="6" offset="8">
                <Timeline>
                    <TimelineItem v-for="(itemHistorico, index) in historico" :key="index">
                        <p class="time">{{itemHistorico.periodo}}</p>
                        <p class="content">Empresa: <a v-bind:href="itemHistorico.link">{{itemHistorico.empresa}}</a> </p>
                        <p class="content">Cargo: {{itemHistorico.cargo}}</p>
                    </TimelineItem>
                </Timeline>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            'historico': [
                {
                    'periodo': '2015 - 2016',
                    'empresa': 'PlataformaNet Mídia Online',
                    'cargo': 'Analista de Suporte Jr.',
                    'link': 'https://plataformanet.com.br/',
                },
                {
                    'periodo': '2016 - 2017',
                    'empresa': 'PlataformaNet Mídia Online',
                    'cargo': 'Programador',
                    'link': 'https://plataformanet.com.br/',
                },
                {
                    'periodo': '2017 - 2019',
                    'empresa': 'Élin Duxus Consultoria',
                    'cargo': 'Analista de Sistemas Jr.',
                    'link': 'http://www.duxus.com.br/',
                },
                {
                    'periodo': '2019 - Atual',
                    'empresa': 'Élin Duxus Consultoria',
                    'cargo': 'Analista de Sistemas Pleno',
                    'link': 'http://www.duxus.com.br/',
                }
            ]
        }
    } 
    
}
</script>
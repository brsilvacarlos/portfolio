import HelloWorld from '@/components/HelloWorld'
import Habilidades from '@/components/Habilidades'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/habilidades", component: Habilidades },
  { path: "/sobre", component: Sobre },
  { path: "/contato", component: Contato }
];


export default routes
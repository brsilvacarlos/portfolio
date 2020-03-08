import HelloWorld from '@/components/HelloWorld'
import Habilidades from '@/components/Habilidades'
import Sobre from '@/components/Sobre'

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/habilidades", component: Habilidades },
  { path: "/sobre", component: Sobre }
];


export default routes
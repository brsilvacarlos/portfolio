<template>
<div id="app">
  <transition appear appear-to-class="animated slideInUp">
    <MenuPrincipal></MenuPrincipal>
  </transition>
  <transition appear appear-to-class="animated slideInUp">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
import MenuPrincipal from '@/components/MenuPrincipal'
export default {
  name: 'app',
  components: {
    MenuPrincipal
  },
  beforeCreate() {
    this.$Spin.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            'class': 'demo-spin-icon-load',
            props: {
              type: 'ios-loading',
              size: 18
            }
          }),
          h('div', 'Loading')
        ])
      }
    });
  },
  created() {
    // this.$Spin.hide();
    setTimeout(() => {
        this.$Spin.hide();
      }, 100);
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

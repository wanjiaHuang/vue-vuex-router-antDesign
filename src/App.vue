<template>
  <div id="app">
    <page-layout>
      <template v-slot:banner>
        <banner></banner>
      </template>
      <template v-slot:modulesNav>
        <modules-nav></modules-nav>
      </template>
      <template v-slot:featureNav>
        <feature-nav></feature-nav>
      </template>
      <template v-slot:routerView>
        <router-view/>
      </template>

    </page-layout>
    <!--      <router-link to="/">Home</router-link>-->
    <!--      |-->
    <!--      <router-link to="/about">About</router-link>-->
  </div>
  <!--    <router-view/>-->
</template>
<script>

    import PageLayout from './views/PageLayout'
    import Banner from './views/Banner'
    import ModulesNav from './views/ModulesNav'
    import FeatureNav from './views/FeatureNav'

    export default {
        name: 'App',
        components: {FeatureNav, ModulesNav, Banner, PageLayout},
        data() {
            return {}
        }
    }
</script>

<style lang="less">
  #app {
    height: calc(100%);
  }
</style>

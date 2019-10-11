<template>
  <div class="FeatureNav">
    <div class="FeatureNav-layer">
      <div v-if="moduleMenu==='testModule'">
        <span @click="setFeatureNav('/testModule/TestOne')">testOne</span>
        |
        <span @click="setFeatureNav('/testModule/TestTwo')">testTwo</span>
      </div>
      <div v-else>
        <span @click="setFeatureNav('/testTwoModule/TO')">TO</span>
        |
        <span @click="setFeatureNav('/testTwoModule/TW')">TW</span>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'FeatureNav',
        data() {
            return {}
        },
        computed: {
            ...mapState({
                moduleMenu: state => state.moduleMenu
            })
        },
        create() {
        },
        mounted: function () {
        },
        methods: {
            setFeatureNav(param) {
                this.$store.commit('setFeatureNav', param)
            }
        }
    }
</script>

<style scoped>
  .FeatureNav {
    background: yellow;
    height: 50px;
    line-height: 50px;
  }

</style>

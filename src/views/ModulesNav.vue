<template>
  <div class="ModulesNav">
    <div class="ModulesNav-layer">
      <li @click="setModuleMenu('testModule')">testModule1</li>
      <li @click="setModuleMenu('testTwoModule')">testTwoModule1</li>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'ModulesNav',
        data() {
            return {}
        },
        create() {
        },
        mounted() {
        },
        methods: {
            setModuleMenu(param) {
                console.log(param)
                this.$store.commit('setModuleMenu', param)
            }
        }
    }
</script>

<style scoped>
  li {
    cursor: pointer
  }

</style>

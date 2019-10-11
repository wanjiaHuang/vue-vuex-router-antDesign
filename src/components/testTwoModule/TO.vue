<template>
  <div id="TO">
    <div class="TO-layer">
      <div>
        select - to
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'TO',
        data() {
            return {}
        },
        create() {
        },
        mounted() {
        },
        methods: {
            handleChange(value) {
                console.log(`selected ${value}`)
            }
        }
    }
</script>

<style scoped>

</style>

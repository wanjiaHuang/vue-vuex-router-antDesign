<template>
  <div id="TW">
    <div class="TW-layer">
      <a-switch defaultChecked @change='onChange'/>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'TW',
        data() {
            return {}
        },
        create() {
        },
        mounted() {
        },
        methods: {
            onChange(checked) {
                console.log(`a-switch to ${checked}`)
            }
        }
    }
</script>

<style scoped>

</style>

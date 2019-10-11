<template>
  <div id="TestOne">
    <div class="TestOne-layer">
      <div>
        <a-row>
          <a-col :span="12">col-12</a-col>
          <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
          <a-col :span="8">col-8</a-col>
        </a-row>
        <a-row>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
          <a-col :span="6">col-6</a-col>
        </a-row>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'TestOne',
        data() {
            return {}
        },
        create() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>

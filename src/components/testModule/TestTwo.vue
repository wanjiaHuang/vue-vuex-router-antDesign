<template>
  <a-form
    @submit="handleSubmit"
  >
    <a-form-item
      label="Note"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input/>
    </a-form-item>
    <a-form-item
      label="Gender"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            handleSubmit(e) {

            },
            handleSelectChange(value) {

            }
        }
    }
</script>

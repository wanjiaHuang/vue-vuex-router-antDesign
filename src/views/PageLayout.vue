<template>
  <div class="pageLayout">
    <div class="pageLayout-layer">
      <a-layout>
        <a-layout-header>
          <slot name="banner"/>
        </a-layout-header>
        <a-layout>
          <a-layout-sider>
            <slot name="modulesNav"/>
          </a-layout-sider>
          <a-layout-content>
            <slot name="featureNav"/>
            <slot name="routerView"/>
          </a-layout-content>
        </a-layout>
        <!--            <a-layout-footer>Footer</a-layout-footer>-->
      </a-layout>
    </div>
  </div>

</template>

<script>
    import Vue from 'vue'
    import {Layout} from 'ant-design-vue'

    console.log(Layout)
    Vue.component(Layout.name, Layout)
    Vue.component(Layout.Header.name, Layout.Header)
    Vue.component(Layout.Footer.name, Layout.Footer)
    Vue.component(Layout.Content.name, Layout.Content)
    Vue.component(Layout.Sider.name, Layout.Sider)
    export default {
        name: 'pageLayout',
        components: {},
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

<style scoped lang="less">
  .ant-layout-has-sider {
    height: calc(100% - 64px);
  }

  .pageLayout, .pageLayout-layer, .pageLayout-layer > .ant-layout {
    height: calc(100%);
  }

  .ant-layout-header {
    background: rgba(125, 125, 125, 0.3);
    text-align: center;
  }

  .ant-layout-sider {
    background: rgba(25, 25, 25, 0.3);
  }

</style>

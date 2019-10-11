<template>
  <div class="home">
    {{featureNav}}
    <component v-bind:is="componentObj"/>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'home',
        data() {
            return {
                componentObj: null
            }
        },
        computed: {
            ...mapState({
                featureNav: state => state.featureNav
            })
        },
        watch: {
            featureNav() {
                this.componentObj = resolve => ({
                    component: import(`@/components${this.featureNav}`)
                })
            }
        },
        methods: {},
        components: {
            // HelloWorld
        }
        // created () {
        //   this.componentObj = resolve => ({
        //     component: import(`../components/testModule/TestTwo`)
        //   })
        // }
    }
</script>

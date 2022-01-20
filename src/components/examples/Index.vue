<template>
  <div>
    <app-tabs :tab="tab" @change="onChangeTab"/>
    <section>
      <component :is="tab"/>
    </section>
  </div>
</template>

<script>
import appTabs from './Tabs'
import empty from './empty/Index'
import message from './message/Index'
import custom from './custom/Index'
import store from './store/Index'

export default {
  data() {
    return {
      tab: "empty"
    }
  },
  methods: {
    onChangeTab(tab) {
      this.tab = tab
    }
  },
  components: {
    appTabs, empty, message, custom, store
  }
}
</script>
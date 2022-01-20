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
import empty from '@/components/empty/Index'
import message from '@/components/message/Index'
import custom from '@/components/custom/Index'
import store from '@/components/store/Index'

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
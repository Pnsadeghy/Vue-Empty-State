<template>
  <empty-state :show="!list.length" :button-action="reload" >
    <div class="center-content" >
      <p>{{ $t('empty.text') }}</p>
      <button @click="onClearList" >{{ $t('empty.clear') }}</button>
    </div>
  </empty-state>
</template>

<script>
import emptyState from "@/components/packages/EmptyState"

export default {
  components: {emptyState},
  data() {
    return {
      list: []
    }
  },
  methods: {
    reload() {
      alert(this.$t('empty.fill'))
      this.list = [1]
    },
    onClearList() {
      this.list = []
    }
  }
}
</script>
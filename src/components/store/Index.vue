<template>
  <empty-state :show="message.show"
               :icon="message.icon"
               :theme="message.theme"
               :title="message.title"
               :description="message.description"
               :button-text="$t('store.back')"
               :button-action="onBack">
    <app-form/>
  </empty-state>
</template>

<script>
import emptyState from "@/components/tools/EmptyState"
import appForm from './Form'
import {mapGetters} from 'vuex'
import {MESSAGE, MESSAGE_HIDE} from "@/store/names"

export default {
  components: {emptyState, appForm},
  computed: {
    ...mapGetters({
      message: MESSAGE
    })
  },
  methods: {
    onBack() {
      this.$store.commit(MESSAGE_HIDE)
    }
  }
}
</script>
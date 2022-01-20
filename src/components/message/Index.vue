<template>
  <empty-state
      icon="warning" theme="warning"
      :title="$t('message.title')"
      :description="$t('message.description')"
      button-url="#"
  />
</template>

<script>
import emptyState from "@/components/tools/EmptyState"

export default {
  components: {emptyState}
}
</script>
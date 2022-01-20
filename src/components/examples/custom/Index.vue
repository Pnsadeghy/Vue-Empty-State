<template>
  <div style="height: calc(100vh - 2rem)">
    <empty-state
        icon="warning" :fit="true"
        :title="$t('custom.title')"
        :description="$t('custom.description')"
    >

      <template #icon >
        <img src="@/assets/icons/smile.svg" alt="custom icon">
      </template>

      <template #body >
        <strong>{{ $t('custom.text') }}</strong> -
        <i>{{ $t('custom.text') }}</i>
        <hr>
        <del>{{ $t('custom.text') }}</del>
      </template>

    </empty-state>
  </div>
</template>

<script>
import emptyState from "@/components/packages/EmptyState"

export default {
  components: {emptyState}
}
</script>
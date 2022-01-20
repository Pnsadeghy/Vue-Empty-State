<template>
  <form class="center-content" id="store_form" @submit.prevent="onSave" >
    <div>
      <label for="theme">{{ $t('label.title') }}</label>
      <input type="text" v-model="title">
    </div>
    <div>
      <label for="theme">{{ $t('label.description') }}</label>
      <textarea v-model="description" ></textarea>
    </div>
    <div>
      <label for="icon">{{ $t('label.icon') }}</label>
      <select v-model="icon" id="icon">
        <option value="" >{{ $t('state.type.none') }}</option>
        <option value="empty" >{{ $t('state.type.empty') }}</option>
        <option value="warning" >{{ $t('state.type.warning') }}</option>
        <option value="error" >{{ $t('state.type.error') }}</option>
      </select>
    </div>
    <div>
      <label for="theme">{{ $t('label.theme') }}</label>
      <select v-model="theme" id="theme">
        <option value="empty" >{{ $t('state.type.empty') }}</option>
        <option value="warning" >{{ $t('state.type.warning') }}</option>
        <option value="error" >{{ $t('state.type.error') }}</option>
      </select>
    </div>
    <button type="submit" >{{ $t('store.save') }}</button>
  </form>
</template>

<script>
import {MESSAGE_SET, MESSAGE} from '@/store/names'

export default {
  data() {
    return {
      title: '',
      description: '',
      theme: '',
      icon: ''
    }
  },
  methods: {
    onSave() {
      this.$store.commit(MESSAGE_SET, {
        title: this.title,
        description: this.description,
        theme: this.theme,
        icon: this.icon
      })
    }
  },
  created() {
    const data = this.$store.getters[MESSAGE]
    this.title = data.title
    this.description = data.description
    this.theme = data.theme
    this.icon = data.icon
  }
}
</script>

<style lang="scss" >
#store_form{
  width: 20rem;
  margin: 0 auto;
  select, input, textarea{
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  label{
    text-align: left;
    display: block;
  }
}
</style>
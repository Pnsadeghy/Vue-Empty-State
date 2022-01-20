<template>
  <header class="tab-list" :class="{'open': open}" >
    <button v-for="key in tabs"
            :class="{'active': key === tab}" class="link" type="button"
            :key="key" @click="onChangeTab(key)" >
      {{ $t(key + '.tab') }}
    </button>
    <button class="toggle" type="button" @click="openTabs"></button>
  </header>
</template>

<script>
export default {
  props: {
    tab: {
      type: String
    }
  },
  data() {
    return {
      tabs: ['empty', 'message', 'custom', 'store'],
      open: false
    }
  },
  methods: {
    openTabs() {
       this.open = true
    },
    onChangeTab(tab) {
      this.open = false
      this.$emit('change', tab)
    }
  }
}
</script>

<style lang="scss" >
.tab-list{
  display: flex;
  position: relative;
  z-index: 10;
  background-color: var(--gray-bg-header);

  .link{
    flex: 1;
    border: none;
    height: 2rem;
    background-color: var(--gray-bg-header);
    cursor: pointer;
    transition: background-color 0.4s;
    border-left: solid thin var(--gray-bg-header);

    &:first-child{
      border-left: none;
    }

    &.active{
      background-color: var(--gray-bg-header-active);
      color: var(--white-color);
    }
    &:hover{
      background-color: var(--gray-bg-header-active);
    }
  }
  .toggle{
    display: none;
  }
}

@media (max-width: 768px) and (min-width: 577px) {
  .tab-list .link{
    font-size: 0.8rem;
  }
}
@media (max-width: 576px) {
  .tab-list{
    display: block;
    height: 2rem;

    .link{
      text-align: left;
      width: 100%;
      &:not(.active) {
        display: none;
      }
    }
    .toggle{
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      text-align: right;
      cursor: pointer;
    }

    &.open{
      .link{
        display: block;
      }
      .toggle{
        display: none;
      }
    }
  }
}
</style>
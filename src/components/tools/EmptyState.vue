<template>
  <div class="empty-state-container">
    <slot v-if="!show"/>

    <div v-else class="empty-state" :class="[theme]">
      <div class="content">
        <div class="icon" v-if="icon" >
          <!-- Slot for icon-->
          <slot name="icon">
            <img :src="iconUrl" :alt="title">
          </slot>
        </div>
        <h4 class="title" v-if="title">{{ title }}</h4>
        <p class="description" v-if="description" v-html="description"></p>

        <!-- Slot for extra content -->
        <slot name="body"/>
        <button class="button" v-if="buttonAction" @click="buttonAction">{{ buttonContent }}</button>
        <a class="button" v-if="buttonUrl" :href="buttonUrl">{{ buttonContent }}</a>
      </div>
    </div>
  </div>
</template>

<script>
const types = ['warning', 'empty', 'error']

export default {
  props: {
    show: {
      /**
       * Show empty state or not
       */
      type: Boolean,
      default: true
    },
    icon: {
      /**
       * Icon name
       * @values warning, empty, error
       */
      type: String,
      default: 'empty',
      validator: function (value) {
        if (value === '') return true
        return types.includes(value)
      }
    },
    theme: {
      /**
       * Color theme
       * @values warning, empty, error
       */
      type: String,
      default: 'empty',
      validator: function (value) {
        if (value === '') return true
        return types.includes(value)
      }
    },
    title: {
      /**
       * Title
       */
      type: String,
      default: function () {
        return this.$t('state.empty.title')
      }
    },
    description: {
      /**
       * Description
       */
      type: String,
      default: ''
    },
    buttonText: {
      /**
       * Button text
       */
      type: String,
      default: ''
    },
    buttonUrl: {
      /**
       * Button redirect url
       */
      type: String,
      default: ''
    },
    buttonAction: {
      /**
       * Button click action
       */
      type: Function,
      default: null
    }
  },
  computed: {
    iconUrl() {
      return require(`@/assets/icons/${this.icon}.svg`)
    },
    buttonContent() {
      if (this.buttonText) return this.buttonText
      if (this.buttonUrl) return this.$t('state.empty.redirect')
      if (this.buttonAction) return this.$t('state.empty.reload')
      return ''
    }
  }
}
</script>

<style lang="scss">
.empty-state-container {
  height: 100%;
}

.empty-state {
  height: 100%;
  min-height: 20rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;

  .content {
    min-width: 15rem;
    text-align: center;
  }

  .icon {
    height: 7rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 2rem;

    img {
      width: 3rem;
    }
  }

  .title {
    margin: 0;
    font-size: 1.5rem;
  }

  .description {
    margin: 0;
    font-size: 1rem;
    color: #727272;
    white-space: pre-wrap;
  }

  .button{
    display: inline-block;
    text-align: center;
    height: 2rem;
    background-color: white;
    padding: 0 0.5rem;
    margin-top: 2rem;
    border-radius: 5px;
    border: solid thin #ccc;
    color: #727272;
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      background-color: #e3e3e3;
    }
  }
}
.empty-state.error {
  .icon{
    background-color: #e32000;
  }
  .title{
    color: #e32000;
  }
}
.empty-state.warning {
  .icon{
    background-color: #e3990a;
  }
}
</style>
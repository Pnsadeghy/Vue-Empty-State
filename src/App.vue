<template>
  <div id="app">
    <app-helper />
  </div>
</template>

<script>
import appHelper from '@/components/helper/Index'

export default {
  name: 'App',
  components: {
    appHelper
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import "assets/styles/content.scss";
@import "assets/styles/colors.scss";

body, html{
  height: 100%;
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  background-color: var(--gray-bg-body);
  color: #323232;
}
*{
  box-sizing: border-box;
}
button{
  font-family: inherit;
  font-size: 1rem;
}
</style>
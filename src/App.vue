<template>
<div id="app" class="container">
  <h1>{{title}}</h1>
  <div class="divider"></div>
  <div class="row">
    <writing></writing>
    <speaking></speaking>
  </div>
</div>
</template>

<script>
import writing from './components/Writing'
import speaking from './components/Speaking'

export default {
  name: 'app',
  data () {
    return {
      title: 'Martyn Davies'
    }
  },
  components: {
    writing,
    speaking
  }
}
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>

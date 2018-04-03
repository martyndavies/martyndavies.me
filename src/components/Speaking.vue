<template>
<div id="speaking" class="col s6">
  <h5>{{ title }} <span class="badge blue white-text">{{ numberOfTalks }}</span></h5>
  <div id="writing-list">
    <ul id="talks" class="collection">
      <li class="collection-item" v-for="talk of talks" :key="talk">
        <a :href="talk.url">{{ talk.title }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'speaking',
  data () {
    return {
      title: 'Speaking',
      talks:[],
      numberOfTalks: 0
    }
  },
  methods: {

  },
  beforeMount() {
    this.$http.get('./data/speaking.json').then(response => {
      this.talks = response.body
      this.numberOfTalks = response.body.length
    }).catch(reason => {
      console.log(reason)
    })
  }
}
</script>

<style lang="scss">

</style>

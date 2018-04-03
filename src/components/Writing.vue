<template>
<div id="writing" class="col s6">
  <h5>{{title}} <span class="badge blue white-text">{{ numberOfArticles }}</span></h5>
  <div id="writing-list">
    <ul id="article" class="collection">
      <li class="collection-item" v-for="article of articles" :key="article">
        <a :href="article.url">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'writing',
  data () {
    return {
      title: 'Writing',
      articles:[],
      numberOfArticles: 0
    }
  },
  beforeMount() {
    this.$http.get('./data/writing.json').then(response => {
      this.articles = response.body
      this.numberOfArticles = response.body.length
    }).catch(reason => {
      console.log(reason)
    })
  }
}
</script>

<style lang="scss">

</style>

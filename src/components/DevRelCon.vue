<template>
<div id="devrelcon" class="col s12">
  <h1>{{title}}</h1>
  <div class="divider"></div>
  <h3><em>Design Your Content Strategy With Data</em></h3>
  <div class="row">
    <div id="text-area" class="col s6">
      <p>Thanks for checking out the talk! I hope you found it useful and that there were some takeaways you can immediately put into place as part of your own strategy.</p>
      <p>The talk was initially longer than the 20 minutes I had on stage so I thought I would take a section and offer it up as bonus content if people wanted to read it.</p>
      <p>If one of those people is you then you can download it by clicking on the image on the right!</p>
      <p class="attribution">Download file by ✦ Shmidt Sergey ✦ from the Noun Project</p>
    </div>
    <div id="download-image" class="col s6">
      <a href="https://www.dropbox.com/s/5m4xkgu3xp9uhbz/Design%20Your%20Content%20Strategy%20with%20Data%20-%20Bonus%20Content.pdf?dl=0"><img :src="downloadImage" width="200"/></a>
    </div>
  </div>
</div>
</template>

<script>
import downloadImage from '../images/download.png';
export default {
  name: 'DevRelCon',
  data() {
    return {
      title: 'Dev Rel Con 2018',
      downloadImage
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
}

.attribution {
  font-size: 12px;
  color: #eeeeee;
}

#download-image {
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
}
</style>

<template>
  <section class="projectsContainer">
    <!-- Photos from unsplash.com
   Authors
    Kelly Sikkema
    Aditya
    Pankaj
    Photo by https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText Glenn Carstens-Peters on https://unsplash.com/s/photos/to-do-list?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText
    Photo by <a href="https://unsplash.com/@nampoh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxim Hopman</a> on <a href="https://unsplash.com/s/photos/crypto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    Photo by <a href="https://unsplash.com/@nadineshaabana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadine Shaabana</a> on <a href="https://unsplash.com/s/photos/music-spotify?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    -->
    <vueper-slides autoplay fixed-height="100%">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :image="slide.image"
        :link="slide.link"
        :style="'color:' + slide.color"
      />
    </vueper-slides>
  </section>
</template>

<script>
// @ is an alias to /src

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Projects",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      pauseOnHover: true,

      slides: [
        {
          title: '<h2 style="font-size: 2.3rem">Note App</h2>',
          content: "<h3>Vue.js</h3>",
          image: require("@/assets/note-slide.jpg"),
          color: "$bg-color",
          link: "https://github.com/dawmic/notes_app_vue",
        },
        {
          title: '<h2 style="font-size: 2.3rem">Weather App</h2>',
          content: "<h3>Vanilla JS<h3>",
          image: require("@/assets/weather-slide.jpg"),
          color: "#B2B9C3",
          link: "https://github.com/dawmic/Weather-App-JS",
        },
        {
          title: '<h2 style="font-size: 2.3rem">First website</h2>',
          content: "<h3>CSS</h3>",
          image: require("@/assets/landing-slide.jpg"),
          color: "$bg-color",
          link: "https://github.com/dawmic/my-first-website-psd-to-html",
        },
        {
          title: '<h2 style="font-size: 2.3rem">Todo</h2>',
          content: "<h3>Vanilla JS</h3>",
          image: require("@/assets/todo.jpg"),
          color: "$bg-color",
          link: "https://github.com/dawmic/todo-list",
        },
        {
          title: '<h2 style="font-size: 2.3rem">Sprintt Crypto</h2>',
          content: "<h3>Vue.js SCSS</h3>",
          image: require("@/assets/maxim-hopman-crypto.jpg"),
          color: "#B2B9B3",
          link: "https://github.com/dawmic/sprintt-crypto",
        },
        {
          title: '<h2 style="font-size: 2.3rem">Sprintt Music</h2>',
          content: "<h3>Vue.js</h3>",
          image: require("@/assets/nadine-music.jpg"),
          color: "#B2B9B3",
          link: "https://github.com/dawmic/sprintt-music",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.projectsContainer {
  width: 100%;
  height: 70%;
}

a {
  text-decoration: none;
  color: $bg-color;
  &:visited {
    color: $bg-color;
  }
}
</style>
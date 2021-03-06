<template>

  <div class="sidebar">
    <div v-for="item in socialMedia" :key="item.name" class="social">
      <a :href="item.url"><img :src="item.image" :alt="item.name"></a>
    </div>
  </div>

</template>

<script>
export default {
    name: 'MediaSidebar',
    data(){
      return{
        socialMedia: [
          {
            name: 'Facebook',
            image: require('@/assets/social_media/facebook.svg'),
            url: 'https://facebook.com',
          },
          {
            name: 'Linkedin',
            image: require('@/assets/social_media/linkedin.svg'),
            url: 'https://linkedin.com',
          },
          {
            name: 'Github',
            image: require('@/assets/social_media/github.svg'),
            url: 'https://github.com/dawmic',
          },
          {
            name: 'Twitter',
            image: require('@/assets/social_media/twitter.svg'),
            url: 'https://twitter.com',
          },
          {
            name: 'Reddit',
            image: require('@/assets/social_media/reddit.svg'),
            url: 'https://reddit.com',
          }  
            
            
            
          
        ]
      }
    },

}
</script>

<style lang="scss" scoped>

.sidebar{
  position: absolute;
  top: 35%;
  left: 3px;
  width: 50px;
  height: 30%;
  
 
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  

  @include media-sd{
    flex-direction: row;
    justify-content: space-around;
   
    top: 1rem;
    left: 0;
    width: 100%;
    height: auto;
 }  
}

.social{
  transition: all .3s;
  filter: grayscale(100%);
  a{
    img{
      border-radius:50%;
    }
  }
}
.social:hover{
  transform: scale(1.1);
  filter: none;
}

</style>
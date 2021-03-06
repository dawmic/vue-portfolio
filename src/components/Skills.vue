<template>
  <section class="skillsContainer">
    <div v-for="item in skills" :key="item.name">
      <img :src="item.image" :alt="item.name" class="skill" @click="handleModal(item)">
      
    </div>
    <transition name="fade" mode="out-in">
    <Modal  v-if="open" :item="modalItem" @closeModal="closeModal"/>
    </transition>
  </section>
</template>

<script>
// @ is an alias to /src

import Modal from '@/components/Modal.vue'

export default {
  name: 'Skills',
  components:{Modal},
  data(){
    return{
      modalItem: null,
      open: false,
      skills: [
        {
          name: 'HTML',
          image: require('@/assets/skills_icons/html5.svg'),
          openModal: false,
          description: "HTML is the most basic building block you'll need for developing websites.",
          topics: ['DOM','Accessibility', 'Forms', 'Canvas'],
        },
        {
          name: 'CSS',
          image: require('@/assets/skills_icons/css.svg'),
          openModal: false,
          description: 'CSS is the language used to style the document you create with HTML.',
          topics: ['Sass', 'Bootstrap', 'Flex', 'Grid','RWD'],
        },
        {
          name: 'JavaScript',
          image: require('@/assets/skills_icons/js.svg'),
          openModal: false,
          description: 'Where HTML and CSS determine the content & presentation of a page, JS determines the function.',
          topics: ['DOM manipulation', 'Events and Objects', 'Destructuring and Spread', 'Fetch and Axios', 'Promises and Async/Await','REST'],
        },
        {
          name: 'Vue',
          image: require('@/assets/skills_icons/vue.svg'),
          openModal: false,
          description: 'Progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
          topics: ['Vue-cli', 'Vuex', 'Vue router'],
        },
       
        {
          name: 'Linux',
          image: require('@/assets/skills_icons/linux.svg'),
          description: 'Linux Ubuntu',
          topics: ['Ubuntu, Kali Linux','Apache2','Users managment','Network configuration','Terminal'],
        },
        {
          name: 'Networking',
          image: require('@/assets/skills_icons/network.svg'),
          description: 'CCNA',
          topics: ['Router and Switch managment','TCP/IP','Routing protocols','HTTP','Wireless'],
        }

      ]
    }
  },
  methods:{
    handleModal(item){
      this.modalItem = item;
      this.open = true;
    },
    closeModal(){
      this.open = false;
    }
  }
  
}
</script>
<style lang="scss" scoped>
.skillsContainer{
  background: $app-bg;
  position: relative;
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  
.skill{
  height: 250px;
  width: 250px;
  filter: grayscale(100%);
  cursor: pointer;
  transition: all .2s ease-out;
  &:hover{
    filter: none;
    transform: scale(1.2);

    
  }
}
@include media-sd{
  .skill{
    height: 150px;
    width: 150px;
  }
  overflow: scroll;
  grid-template-columns: 1fr 1fr;
  
}

@media (orientation: landscape) and (max-height: 500px){
  overflow: scroll;
  .skill{
    height: 150px;
    width: 150px;
  }
}
  
}

</style>
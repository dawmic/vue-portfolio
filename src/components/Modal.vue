<template>

<div class="modalContainer">
 
  <button @click="closeModal"><img src="~@/assets/close-line.svg" alt=""></button>  
  <div class="imageContainer">
    <img :src="item.image" alt="">
  </div>

  
  <div class="infoContainer">
    <h2>{{item.name}}</h2>
    <ul>
      <li v-for="topic in item.topics" :key="topic.name">
        {{topic}}
      </li>
    </ul>
  </div>

</div>

 
</template>

<script>
export default {
name: 'Modal',
props:['item'],
methods:{
  closeModal(){
    this.$emit('closeModal');
  }
},
}
</script>

<style lang="scss" scoped>


.modalContainer{
  position: absolute;

 justify-self: center;
  
  width: 800px;
  
  min-height: 50%;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  button{
    position: absolute;
    right: 10px;
    top: 2px;
    height: 40px;
    width: 3rem;
    background: transparent;
    outline: none;
    border: none;
    transform: scale(.7);
    margin: .3rem 1rem 0 0;
   
    img{
  height: 30px;
  width: 30px;
  &:active{
    transform: scale(0.9);
  }
  
}
  

} 
  .imageContainer{
    padding: 1rem;
    flex: .2 1 auto;
     img{
    height: 8rem;
    width: 8rem;
  
          }
  } 
.infoContainer{
  flex: .9 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
    h2{
    margin: 1rem 0;
    font-size: 2.5rem;
    color: rgba(14%, 15%, 15%,.7);
    }
    ul{
      li{
        text-align: left;
        font-size: 1.2rem;
        padding: .3rem;
        list-style-image: url('~@/assets/star-marker.png');
        color: rgba(14%, 15%, 15%,.9);
      }
    }
}
@include media-sd{
  width: 90%;
}
}
@include media-xsd{
  .modalContainer{
    height: auto;
    flex-direction: column;
   
    .imageContainer{
      flex: 0 1 auto;
     
    }
    .infoContainer{
      
      h2{
        
        display: none;
      }
      ul{
       
        li{
          font-size: 1rem;

        }
      }
    }
  }
}
</style>
  
  
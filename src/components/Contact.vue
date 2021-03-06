<template>

  <form class="contactContainer"  @submit="checkForm"
  action="https://formspree.io/f/meqpepvw"
  method="post">
    <h2 class="contactHeader">Get in touch</h2>
                
                
                <label for="name"></label>
                <input  name="name" type="text" id="name" class="input-form" placeholder="Your Name *"  v-model="form.name" ref="name"
                @focus="resetFlag"
                @keypress="resetFlag"
                :class="{ 'has-error': submitting && invalidName }"
/>
                <label for="email"></label>
                <input type="text" name="email" id="email" class="input-form" placeholder="Your E-mail *"
                  v-model="form.email"
                  :class="{ 'has-error': submitting && invalidEmail }"
/>
                
                <label for="message"></label>
                <textarea id="message" name="message" class="input-form area-form" placeholder="Your message *" rows="5" cols="33"
                 v-model="form.text"
                 :class="{ 'has-error': submitting && invalidText }"
>
          </textarea>
           <p v-if="error" class="error">The field cannot be empty.</p>
            <p v-if="success" class="success">Added successfully</p>
                <button class="submitBtn">Submit</button>
<transition name="appear">
  <media-sidebar v-if="showSidebar"/>
</transition>
 
  </form>

</template>

<script>
// @ is an alias to /src
import MediaSidebar from '@/components/MediaSidebar.vue'


export default {
  name: 'Contact',
  components:{
    MediaSidebar,
    
  },
  data(){
    return{
      form:{
        name: '',
        email: '',
        text: '',
      },
      error: false,
      success: false,
      submitting: false,
      showSidebar: false,
    }
  },
  methods:{
    checkForm(){
      this.submitting = true;
      this.resetFlag();

      if(this.invalidName || this.invalidEmail || this.invalidText){
        this.error = true;
        this.success = false;
        event.preventDefault();
        return;
      }
    this.$refs.name.focus();
    this.error = false;
    this.success = true;
    this.submitting = false;
    
    },
    resetFlag(){
      this.error = false;
      this.success = false;
    },
    appearMedia(){
      let x = this;
      setTimeout(()=>{
        x.showSidebar = true;
      },1200)
    }
   
  },
  computed:{
    invalidName(){
      return this.form.name === '';
    },
    invalidEmail(){
      return this.form.email === '';
    },
    invalidText(){
      return this.form.text === '';
    }
  },
  mounted(){
    this.appearMedia();
  }
  
  
}
</script>
<style lang="scss" scoped>
.contactContainer{
  animation: showUp .7s;
  width: clamp(50%, 500px, 100%);
  height: 70%;
  overflow: visible;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: transparent;

  .contactHeader{
    color: $header-text-color;
    flex: 0.2 1 auto;
    font-size: 3rem;
    letter-spacing: -1px;
    
  }
 
  .submitBtn{
    width: 10rem;
    height: 3.2rem;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 1.3rem;
    outline: none;
    border: 2px solid $base-font;
    background: transparent;
    color: $base-font;
    position: relative;
    z-index: 99;
    transition: all .3s;
    
    
    &::after{
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 10rem;
      height: 3.2rem;
      top: 4px;
      right: -10px;
      background: transparent;
      z-index: 98;
      border: 2px solid $base-font;
    transition: all ease-in .2s;
      
    }
    &:hover::after{
      top: -1px;
      right: -1px;
    }
  }
  @include media-sd{
    
    .contactHeader{
      font-size: 2rem;
    }
    input,textarea{
      font-size: 1rem;
      min-height: 2rem;
    }
    .submitBtn{
      font-size: 1rem;
      
      margin-top: 1rem;
    }
  }
 @media (orientation: landscape) and (max-height: 500px) {

   .submitBtn{
     &:hover{
       transform: scale(1.1);
     }
     &::after{
       display: none;
     }
   }
 }
  
  }
.error{
    color: red;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}
.success{
    color: #32A95D;
}
.has-error{
  border: 2px solid red;
}
  p{
      font-size: 1rem;
      color: black;
  }



input,textarea{
  width: 75%;
  margin-bottom: 1rem;
  min-height: 2.5rem;
  background: transparent;
  border: none;
  outline: none;
  color: $base-font;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 1.2rem;
 
}
input{
  flex: .1 1 auto;
  border-left: 2px solid $base-font;
  border-bottom: 2px solid $base-font;
  text-align: center;
  
  
}
textarea{
  flex: .2 1 auto;
  border: 2px solid #FAFAFA;
  
}
.appear-enter-active, .appear-leave-active {
  transition: all .3s ease-out;
 
}
.appear-enter, .appear-leave-to  {

  transform: translateX(-100%);
  
}




 
</style>
<template>
  <section class="about">
    
      <h2><span>who</span> <span>am</span> <span>I</span><span>?</span></h2>
      
      <div class="infoContainer" >
      <h3>Hi, I'm Dawid and I'm going to get a job as frontend developer.</h3>
      <p class="infoParagraph">You know already what is my name and what is my target. 
       I am self taught person. My knowledge is not only web programming. Of course I know HTML, CSS, JavaScript and some tools but  I have also solid fundamentals about network and linux. I have even passed <abbr title="Cisco Certified Network Associate">CCNA</abbr> exam.
</p>
    <p class="infoParagraph">This site has a cycling feel. I love cycling. It is one of the most versatile activities that can become a daily habit. Apart from maintaining good health and helping the environment by reducing pollution, cycling has a lot of benefits that will make you fall in love with it!
</p>  
     
    </div>
    
      
    
    

  </section>
</template>
<script>
 
export default {
  name: 'About',
  data(){
    return{
      image: require('@/assets/ian-unsplah.jpg'),
      
    }
  },
 
}
</script>
<style lang="scss" scoped>
*{
  color: $base-font;
  text-align: left;
}


.about{
   
    width: 100%;
    height: 100vh;
    background: url('~@/assets/bike-about.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
   
      h2{
        animation: showUp .5s ease-out;
        font-size: 5rem;
        padding: 0 0 0 5rem;
        align-self: flex-start;
         span{
           font-size: 5rem;
           display: inline-block;
         }
         span:nth-child(1){
           transform: translateY(-30px);
         }
         span:nth-child(2){
           transform: translateY(-10px);
         }
         span:nth-child(4){
           transform: translateY(-20px);
         }
      }   
      
      .infoContainer{
        animation: showUp .9s ease-out;
        background: rgba(0, 0, 0, 0.62);
        width: 50%;
        align-self: flex-start;
        margin-left: 3rem;
        flex: .5 1 auto;
        cursor: default;
        h3{
        position: relative;
        padding: 3rem 3rem 1rem 3rem;
        font-size: 1.5rem;
        &::after{
          content: '';
          position: absolute;
          left: 3rem;
          bottom: 0;
          height: 3px;
          width: 5rem;
          background: #565E57;
        }
      }
      .infoParagraph{
        width: 100%;
        padding: 1.5rem 3rem;
        font-size: 1.2rem;
        line-height: 1.4;
        position: relative;
         &::after{
          content: '';
          position: absolute;
          left: 3rem;
          bottom: 0;
          height: 3px;
          width: 4rem;
          background: #565E57;
       }
       
       }
      }
      @include media-md{
      background-position: center;
        .infoContainer{
         width: 90%;
         overflow: scroll;
        }
    } 
    @include media-sd{
      
      background-position: right bottom;
      h2{
        span{
          font-size: 3.4rem;
        }
      }
      .infoContainer{
        overflow: scroll;
        width: 90%;
        margin: 0;
       align-self: center;
       .infoParagraph{
         font-size: 1rem;
         }
      }
    } 
    @include media-xsd{
      
      h2{
       margin-top: 2rem;
       span{
         font-size: 3rem;
       }
         span:nth-child(1){
           transform: translateY(-10px);
         }
         span:nth-child(2){
           transform: translateY(-5px) scale(.8);
         }
         span:nth-child(4){
           transform: translateY(-15px);
         }
       
        }
     .infoContainer{
       width: 95%;
       h3{
         font-size: 1.2rem;
       }
       .infoParagraph{
         padding: 1rem 3rem;
       }
     }
     @include media-xxsd{
      
       h2{
         font-size: 2rem;
       }
       .infoContainer{
         margin: 1rem;
         max-height: 100vh;
         overflow: scroll;
       }
     }
    }
  
 } 

    
    
   




</style> 
       
        
       
        
    
      
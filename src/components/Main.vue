<template>
  <header class="headerContainer">
    <!--photo made by Josh Nutall joshnuttal.co.uk -->
  <h1>It's me. <br>
    I create websites. <br>
    I do cycling. <br>
    I'm frontend developer.
  </h1>
  <nav class="navContainer">
    <ul>
      <li> <router-link to="/about" tag="a">About</router-link></li>
      <li>  <router-link to="/skills" tag="a">Skills</router-link> </li>
      <li> <router-link to="/projects" tag="a">Projects</router-link></li>
      <li> <router-link to="/contact" tag="a">Contact</router-link></li>
   </ul> 
   </nav>
    </header>
</template>

<script>
export default {
  name: 'Main',
 
}
</script>

<style lang="scss" scoped>

  .headerContainer{
    background: url('~@/assets/bike-main.jpg') no-repeat;
    background-size: cover;
    background-position: right top;
    
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    h1{
      color: $header-text-color;
      font-size: 4rem;
       width: 45%;
      margin-right: 1rem;
      letter-spacing: -3px;
      line-height: 1.2;
      flex: .4 1 auto;
      text-align: center;
      animation: 1s headerAppear ease-out;
       }
     .navContainer{
      flex: .1 1 auto;
      width: 400px;
      margin-right: 8%;
     height: 50px;
      
      
      ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 100%;
         list-style-type: none;
        
        
       
        li{
          transition: all .5s;
          &:hover{
            transform: translateY(-3px);
          }
          a{
            text-decoration: none;
            font-size: 1.3rem;
          
            justify-self: center;
            line-height: 2;
            color: $header-text-color;
            padding: .7rem;
            &:active{
              border: 3px dashed $header-text-color;
            
            }
            &:visited{
              color: $header-text-color;
            }
          }  
          }
        
      }
    }    
  } 
        
  @include media-ld{
    .headerContainer{
      h1{
        width: 55%;
        font-size: 3rem;
        letter-spacing: -1px;
      }

    }
  }
  @include media-md{
    .headerContainer{
      
      h1{
        font-size: 2.8rem;
        letter-spacing: -1px;
        width: 50%;
      }
    }
  }
  @include media-sd{
    .headerContainer{
      
      background: url('~@/assets/bike-main-mobile.jpg') no-repeat;
      background-size: cover;
      background-position: 75% 25%;
      
      h1{
        font-size: 2.6rem;
        width: 95%;
        margin-right: 0;
        align-self: center;
        
      }
      .navContainer{
        width: 70%;
        align-self: center;
        margin-right: 0;
        flex: .03 1 auto;
        
      }
    }
  }
  @include media-xsd{
    .headerContainer{
      .navContainer{
      width: 100%;
    }
    }
    
  }

</style>
       
          
          
            
            
           
           
           
          
      
  
  
  
      
      


       
      
      
     
      
   

    
   
        
    
 
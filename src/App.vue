<template>
  <div id="app">
<transition name="fade" mode="out-in">
  <router-view/>  
</transition>

  </div>
</template>

<style lang="scss">



*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
  a{
    text-decoration: none;
    color: inherit;
  }
  &:visited{
    color: inherit;
  }
  }
html{
  font-size: 16px;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $app-bg;
 
}
  p{
    color: black;
    font-size: 48px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
 
}
.fade-enter, .fade-leave-to  {

  opacity: 0;
}




</style>

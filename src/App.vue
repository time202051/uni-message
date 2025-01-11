<template>
  <div id="app">
    <button  @click="goHome">Click me</button>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    console.log("this",this);
  },
  methods: {
    goHome(){
      this.$message.success('Welcome to Home Page');
      // this.$message({
      //   type:'error',
      //   message: 'Welcome to Home Page',
      // });
    }
  }
}
</script>

<style lang="scss">
// @import "@/uni_modules/uview-ui/index.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

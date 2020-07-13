<template>
    <div id="top-nav">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/home">首页</router-link> </el-menu-item>
        <el-menu-item index="2"><router-link to="/newroom">建房</router-link> </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    name: "TopNav",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.router-link {
  text-decoration: none;
}

#top-nav {
  float: left;
}
</style>

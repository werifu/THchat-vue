<template>
<div style="position: fixed; top: 0; float: top;">
    <el-header>    
        <TopNav></TopNav>
        <TopInfo :isLogin="isLogin" :username="username"></TopInfo>
    </el-header>
</div>
</template>


<script>
import TopNav from "./TopNav.vue"
import TopInfo from "./TopInfo.vue"
export default {
    name: "Header",
    components: {
        TopNav,
        TopInfo,
    },
    computed: {
        isLogin() {
            // console.log("登录状态：", this.$store.state.isLogin);
            return this.$store.state.isLogin;
        },
        username() {
            return this.$store.state.username;
        }
    }
} 
</script>

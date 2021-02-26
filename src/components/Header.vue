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
import axios from "axios"
export default {
    name: "Header",
    components: {
        TopNav,
        TopInfo,
    },
    created() {
        axios.get(`http://${process.env.VUE_APP_HOST}/api/v1/status`)
        .then(res => {
            if (res.data.islogin == 1) {
                this.$store.commit("login", res.data.username);
            }
        }).catch(err => (console.log(err)));
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

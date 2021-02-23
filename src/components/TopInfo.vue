<template>
    <div id="top-info">
        <div v-if="isLogin">
            <router-link :to="'/' + username">{{ username }}</router-link>
        </div>
        <div v-else>
        <router-link to="/login"><el-button>登录</el-button></router-link>
        <router-link to="/signup"><el-button>注册</el-button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopInfo",
    props: ["username", "isLogin"],
    
    created() {
        
    }
}
</script>

<style scoped>
#top-info {
    position: fixed;
    float: right;
    margin: 12px;
    right: 0;
}

.el-button {
    margin-left: 10px;
}
</style>
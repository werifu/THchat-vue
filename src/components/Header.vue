<template>
<div style="position: fixed; top: 0; float: top;">
    <el-header>    
        <TopNav></TopNav>
        <TopInfo :isLogin="false"></TopInfo>
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
    }
} 
</script>

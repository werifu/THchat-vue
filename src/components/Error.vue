<template>
<el-container>
    <el-main>
    <div>
        <h2 style="text-align: center;">{{ msg }}</h2>
        <router-link to="/home" style="margin: 0 auto;"><el-button type="primary">返回首页</el-button></router-link>
    </div>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>

<script>
import Footer from './Footer.vue'
export default {
    name: "Error",
    components: [
        Footer,
    ],
    data () {
        return {
            msg: '404 NOT FOUND',
        }
    }
    
}
</script>
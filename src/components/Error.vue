<template>
    <div>
        <h2 style="text-align: center;">{{ msg }}</h2>
        
        <router-link to="/home" style="margin: 0 auto;"><el-button type="primary">返回首页</el-button></router-link>
    </div>
</template>

<script>
export default {
    name: "Error",
    data () {
        return {
            msg: '404 NOT FOUND',
        }
    }
}
</script>
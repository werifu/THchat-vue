<template>
<el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-main>
        <h1 style="margin-top: 10px; margin-left: 20%">Waiting for Github's oauth....</h1>
    </el-main>

    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>


<script>
import Footer from "./Footer.vue"
import Header from "./Header.vue"
import qs     from "qs"
import axios from "axios"
export default {
    name: "OauthGithub",
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            canEnter : false,
            roomName: this.$route.params.name,
        };
    },
    created() {
        let code = window.location.href.match(/(?<=code=).+(?=#)/)[0];
        let url = `http://${process.env.VUE_APP_HOST}/api/v1/oauth/github`;
        axios.post(url, qs.stringify({code: code})).then(res=> {
            console.log(res.data);
            this.$store.commit('login', res.data.username);
            this.$router.push('/home');
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {

    },
}



</script>

<style scoped>

</style>
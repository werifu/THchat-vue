<template>
<el-container>
    <el-header><Header></Header></el-header>
    <el-main>
        <h1 style="text-align: center">登录界面</h1>
        <div id="loginForm">
        <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码" clearable show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="submit" @click="onSubmit">登录</el-button>
        </el-form-item>
            <a :href="github_oauth_url"><el-button style="float: right; padding: 3px 0" type="text">Github SSO</el-button></a>
            <router-link to="/signup"><el-button style="float: right; padding: 3px 0" type="text">注册点这里</el-button></router-link>
        </el-form>
        </div>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import axios from "axios"
import cryptoJs from "crypto-js"
import qs from "qs"
export default {
    name: "Login",
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            github_oauth_url: "https://github.com/login/oauth/authorize?client_id=27d33904d0bff3420d9a",
        } 
    },
    created() {
        this.$message('created');
        console.log("created");
    },
    methods: {
        onSubmit() {
            let formData = this.form;
            let salt = process.env.VUE_APP_SALT;
            let pwdWithSalt = cryptoJs.SHA1(formData.password+salt).toString(cryptoJs.enc.Base64);
            axios.post(`http://${process.env.VUE_APP_HOST}/api/v1/login`, qs.stringify({username: formData.username, password: pwdWithSalt}))
                .then(res => {
                    console.log(res.data);
                    // console.log(this.$cookies.isKey("mysession"));
                    // console.log(document.cookies);
                    this.$store.commit('login', res.data.username);
                    })
                .catch(err => (console.log(err)));
            this.$message('username:'+ formData.username);
        }
    }
}
</script>
<style scoped>
#loginForm {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .20), 0 0 6px rgba(0, 0, 0, .04);
    width: 300px;
    margin: 0 auto;
    padding: 40px;
}

.el-button {
    width: 60%;
    text-align: center;
}

p {
    font-size: 13px;
    text-align: right;
}
</style>
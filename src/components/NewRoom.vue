<template>
<el-container>
    <el-header><Header></Header></el-header>
    <el-main>
        <h1 style="text-align: center">新建房间</h1>
        <div id="loginForm">
        <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="房间名">
            <el-input v-model="form.roomname" placeholder="请输入房间名" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码" clearable show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="submit" @click="onSubmit">创建</el-button>
        </el-form-item>
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
import qs from "qs"

export default {
    name: "NewRoom",
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            form: {
                roomname: "",
                password: "",
            },
        } 
    },
    created() {
        this.$message('created');
        console.log("created");
    },
    methods: {
        onSubmit() {
            let formData = this.form;
            axios.post(`http://${process.env.VUE_APP_HOST}/api/v1/newroom`, qs.stringify({room_name: formData.roomname, password: formData.password}))
                .then(res => {
                    console.log(res.data);
                    // this.$cookies.set("my_session", res.data, "12h");
                    })
                .catch(err => (console.log(err)));
            this.$message(formData.roomname);
            this.$message('roomname:'+ formData.roomname);
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
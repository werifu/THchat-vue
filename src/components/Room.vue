<template>
<el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-main>
        <div v-if="canEnter">
        <h1 style="margin-top: 10px; margin-left: 20%">{{ $route.params.name }}</h1>
        <ChatBox></ChatBox>
        </div>
        <div v-else>
        
        </div>
    </el-main>

    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>


<script>
import Footer from "./Footer.vue"
import Header from "./Header.vue"
import ChatBox from "./ChatBox.vue"
import axios from "axios"
import cryptoJs from "crypto-js"
export default {
    name: "Room",
    components: {
        Header,
        Footer,
        ChatBox,
    },
    data() {
        return {
            canEnter : false,
            roomName: this.$route.params.name,
        };
    },
    created() {
        this.canEnter = false;    
        console.log("canEnter = false");
        // 进入房间前检测
        console.log("等待输入");
            this.$prompt('请输入密码', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
        }).then(({ value }) => {
            this.getRoom(value);
        }).catch((e) => {
            console.log(e);
        });
    },
    methods: {
        getRoom(psw) {
            let salt = process.env.VUE_APP_SALT;
            let pwsWithSalt = cryptoJs.SHA1(psw+salt).toString(cryptoJs.enc.Base64);
            axios.get(`http://${process.env.VUE_APP_HOST}/api/v1/room/`+this.roomName, {
                params: {
                    password: pwsWithSalt
                }
            }
            ).then( res => {
                var code = res.data.code;
                console.log(code);
                // 10002: ErrRoomPassword
                // 10003: ErrNotExistRoom
                // 50001: NotLogin
                if (code === 200) {
                    this.$message("成功");
                    this.canEnter = true;
                    return true;
                }
                if (code === 10002) {
                    this.$message("密码错误,请刷新");
                }else if (code === 10003) {
                    this.$message("房间不存在");
                }else if (code === 50001) {
                    this.$message("未登录");
                }
                return false;
            }).catch(e => {console.log(e);});
        },
        

    },
}



</script>

<style scoped>

</style>
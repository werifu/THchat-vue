<template>
    <div class="chat-box">
        <WS ref="ws" @new-msg="receiveMessage"></WS>
        <div class="msg-board">
            <el-scrollbar style="height: 100%;" wrapStyle="overflow-x: hidden;">
                <li v-for="msg in msgs" :key="msg.message">{{ msg }}</li>
            </el-scrollbar>
        </div>
        <form>
        <el-input v-model="msgInput" @keyup.enter.native="send"></el-input>
        <el-button type="submit" @click="send">发送</el-button>
        </form>
        <p>  {{ this.msgInput }}</p>   
    </div>
</template>

<script>
import WS from "./WS.vue"
export default {
    name: "ChatBox",
    components: {
        WS,
    },
    data() {
        return {
            msgInput: "",
            msgs: [],
            newMsg: "",
            
        }
    },
    methods: {
        send() {
            this.$refs.ws.ws_send(this.msgInput);
            this.msgInput = "";
        },
        receiveMessage(msg) {
            this.msgs.push(msg);
            console.log("push完了");
        },
        
    }

}
</script>
<style scoped>
.chat-box {
    background-color: white;
    float: left;
    margin-top: 40px;
    margin-left: 10%;
    width: 40%;
    
}
.msg-board {
    box-shadow: 0 1px 0px rgba(0, 0, 0, .20), 0 0 6px rgba(0, 0, 0, .04);
    width: 90%;
    height: 550px;
    border: 2px solid #d7dae2;
    border-radius: 20px;
}
.el-input {
    margin-top: 15px;
    width: 78%;
}

.el-scrollbar__wrap {
    overflow-x: hidden;
}

li {
    list-style-type: none;
    margin: 15px;
}
</style>
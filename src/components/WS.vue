<template>
<div></div>
</template>

<script>
  export default {
    name : 'WS',
    // props : ['roomName'],
    data() {
      return {
        websock: null,
        roomName: this.$route.params.name,
      }
    },
    created() {
      this.$message("testWS");
      this.initWebSocket(this.roomName);
    },
    updated() {
      console.log("开始创建ws");
    
    },
    destroyed() {
      this.$message("destroyed");
      this.websock.close() //离开路由之后断开websocket连接
    },
    methods: {
      initWebSocket(roomName){ //初始化weosocket
        const wsuri = "ws://127.0.0.1:8000/api/v1/room/"+ roomName + "/ws";
        console.log(wsuri);
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.ws_onmessage;
        this.websock.onopen = this.ws_onopen;
        this.websock.onerror = this.ws_onerror;
        this.websock.onclose = this.ws_close;
      },
      ws_onopen(){ //连接建立之后执行send方法发送数据
        // let actions = {"test":"12345"};
        // this.ws_send(JSON.stringify(actions));
      },
      ws_onerror(){//连接建立失败重连
        this.initWebSocket();
      },
      ws_onmessage(e){ //数据接收
        console.log(e.data);
        this.$emit("new-msg", e.data);
      },
      ws_send(Data){//数据发送
        this.websock.send(Data);
      },
      ws_close(e){  //关闭
        console.log('断开连接',e);
      },
    },
    watch: {
      $route() {
        location.reload();
      },
      
    },
    
  }
</script>
<style lang='less'>
 
</style>
<template>
    <div class="room-outline">
        <h2>房间名字：{{ name }}</h2>
        <h3>创建者： {{ createdBy }}</h3>
        <h3>创建时间： {{ createdAt }}</h3>
        <div v-if="isCreator">
            <el-button style="float: right; padding: 3px 0" type="text" @click="deleteRoom">删除</el-button>
        </div>
        <router-link :to="'/room/'+name"> <el-button style="float: center; padding: 5px 0" type="text">{{ name }}</el-button></router-link>
        
        
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "RoomOutline",
    props: ["name", "createdBy", "createdAt", "username", "isCreator"],
    methods: {
        deleteRoom() {
            let url = `http://${process.env.VUE_APP_HOST}/api/v1/room/`+ this.name;
            axios.delete(url).then(res=> {
                if (res.data.code === 200) {
                    alert(`房间${this.name}已删除`);
                } else {
                    alert(res.data.message);
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    font-family: "PingFangSC";
}
.room-outline {
    float: left;
    text-align: center;
    margin: 80px;
    margin-right: 20px;
    width: 350px;
    height: 200px;
    /* border: 2px solid; */
    border-radius: 4px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, .04);
    font-family: "PingFang SC";
    
}
</style>
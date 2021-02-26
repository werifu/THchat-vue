<template>
<el-container>
    <el-header><Header></Header></el-header>
    <el-main>
        <RoomOutline v-for="room in rooms" 
        :key="room.Name" 
        :name="room.Name" 
        :createdBy="room.CreatedBy"
        :createdAt="room.CreatedAt">
        </RoomOutline>
        
    </el-main>
    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>

<script>
import axios from "axios"
import Header from "./Header.vue"
import RoomOutline from "./RoomOutline.vue"
import Footer from "./Footer.vue"
export default {
    name: "Home",
    data() {
        return {
            rooms: [
            ],
        } 
    },
    components: {
        Header,
        RoomOutline,
        Footer,
    },
    beforeCreate() {
        axios.get(`http://${process.env.VUE_APP_HOST}/api/v1/home`, )
            .then(
                res => {
                    this.rooms = res.data.rooms;
                
                }
            ).catch( err => console.log(err));
        
    }
}
</script>


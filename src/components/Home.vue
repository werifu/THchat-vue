<template>
<el-container>
    <el-header><Header></Header></el-header>
    <el-main>
        <RoomOutline name="房间1" id="1"></RoomOutline>
        <RoomOutline name="豪华大套间" id="2"></RoomOutline>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
</el-container>
</template>

<script>
import Header from "./Header.vue"
import RoomOutline from "./RoomOutline.vue"
import Footer from "./Footer.vue"
export default {
    name: "Home",
    components: {
        Header,
        RoomOutline,
        Footer,
    }
}
</script>


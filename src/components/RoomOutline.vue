<template>
    <div class="room-outline">
        <h2>房间名字：{{ name }}</h2>
        <h3>创建者： {{ createdBy }}</h3>
        <h3>创建时间： {{ createdAt }}</h3>
        <router-link :to="'/room/'+name"> {{ name }}</router-link>
    </div>
</template>

<script>
export default {
    name: "RoomOutline",
    props: ["name", "createdBy", "createdAt"],
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
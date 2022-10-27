<template>
    <div class="sidebar">
        <div class="row title">
            <h2>My Project</h2>
        </div>
        <div class="row">
            <ul class="list">
                <li class="item">
                    <img src="../assets/monitor.png" >
                    Dashboard
                    <!-- <ul class="drop">
                        <li>
                            <p>Graph 1</p>
                        </li>
                        <li>
                            <p>Graph 2</p>
                        </li>
                        <li>
                            <p>Graph 3</p>
                        </li>
                        <li>
                            <p>Graph 4</p>
                        </li>
                    </ul> -->
                </li>
                <li class="item">
                    <img src="../assets/folder.png" >
                    Data
                </li>
                <li class="item">
                    <img src="../assets/setting.png" >
                    Settings
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
export default {
//   name: 'side-bar',

    
}
</script>
<style scoped>
.sidebar{
    background-color: azure;
    height: 100vh;
}
.title{
    text-align: center;
    height: 80px;
    align-content: center;

}
.list{
    list-style-type: none;
}
.drop{
    margin-top:10px;
    list-style-type: none;
}
li{
    font-weight: bold;
    /* background-color: rgb(222, 254, 254); */

}
.item{
    /* background-color: red; */
    background-color: rgb(225, 226, 226);
    height: 50px;
    justify-content: center;
    border-radius:1rem;
    padding-left:20px;
    margin: 10px;
    padding-top: 4%;
    align-content: center;

}
img{
    width: 20px;
    margin-right: 5px;
}
</style>
<template>
  <div style="padding:200px 700px">
    <div class="tabs">
      <span v-for="(item,index) in ['新闻','体育','娱乐']"
       :key="index"
        @click="handleClick(index)" 
        :class="{active:current === index}"
        >{{item}}</span>
    </div>

    <div class="u1"  v-show="current ===0">
      <ul>
        <li>东风41或亮相阅兵 更先进战略武器已在研</li>
        <li>东风41或亮相阅兵 更先进战略武器已在研</li>
        <li>东风41或亮相阅兵 更先进战略武器已在研</li>
      </ul>
    </div>

    <div class="u2"  v-show="current ===1">
      <ul>
        <li>男篮世界杯-中国队胜科特迪瓦</li>
        <li>男篮世界杯-中国队胜科特迪瓦</li>
        <li>男篮世界杯-中国队胜科特迪瓦</li>
      </ul>
    </div>

    <div class="u3" v-show="current ===2">
      <ul>
        <li>精致boy姚明明分享时尚经 想挑战坏人角色</li>
        <li>精致boy姚明明分享时尚经 想挑战坏人角色</li>
        <li>精致boy姚明明分享时尚经 想挑战坏人角色</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
data(){
  return{
    // 记录当前的状态
    current:0
  }
},
methods:{
  handleClick(index){
    this.current = index
  }
}
};
</script>

<style lang="less" scoped>
.tabs{
  span{
    padding: 10px;
    cursor: pointer;
  }
}
.u1>ul>li,.u2>ul>li,.u3>ul>li{
  list-style: none
}
.active{
  color:red
}
</style>